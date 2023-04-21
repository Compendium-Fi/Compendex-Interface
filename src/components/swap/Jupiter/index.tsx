import { InlineResponse200MarketInfos } from "@jup-ag/api";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import { TokenInfo } from "@solana/spl-token-registry";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction, VersionedTransaction } from "@solana/web3.js";
import { useInterval, useLocalStorageState } from "ahooks";
import React, {
  FunctionComponent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { SwapRoute } from "../SwapRoute";
import { SelectCoin } from "./SelectCoin";
//import { toast } from "react-toastify";
import { getFeeAddress } from "../../../utils/fees";
//import { RenderUpdate } from "../../../utils/notifications";
import { retry } from "@bonfida/hooks";
import { nanoid } from "nanoid";
import { Balance } from "./Balance";
//import { GENESYS_GO_CONNECTIONS } from "../../utils/connection";
import { useSolBalance, useTokenAccounts } from "@bonfida/hooks";
import { NATIVE_MINT } from "@solana/spl-token";

// Token Mints
export const INPUT_MINT_ADDRESS =
  "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"; // USDC
export const OUTPUT_MINT_ADDRESS =
  "5Wsd311hY8NXQhkt9cWHwTnqafk7BGEbLu8Py3DSnPAr"; // CMFI

import WalletConnect from "@/components/WalletConnect";
import { useSwapStyles } from "@/components/styles";
import { useGlobalSwap } from "@/context/GlobalSwap";
import { useConnection } from "@/utils/connection";
import { Button, Group, Loader, UnstyledButton } from "@mantine/core";
import { Refresh } from "@mui/icons-material";
import Link from "next/link";
import { useQueryClient } from "react-query";
import { useJupiterApiContext } from "../../../context/jupiter";
import { Slippage } from "./Slippage";
import { useRouter } from "next/router";
import { useTokenList } from "@/context/tokenList";
import { useWalletTokenBalance } from '@lndgalante/solutils';
import { showNotification } from "@mantine/notifications";
interface IJupiterFormProps { fromMint?: string, toMint?: string }

const JupiterForm: FunctionComponent<IJupiterFormProps> = (props) => {
  const { classes, cx } = useSwapStyles();
  const { query } = useRouter();
  const toastId = useRef(nanoid());
  const { splTokenList } = useTokenList();
  const [firstLoad, setFirstLoad] = useState(false);
  const { connected, publicKey, signAllTransactions, sendTransaction } =
    useWallet();
  const connection = useConnection();
  const { tokenMap, routeMap, loaded, api } = useJupiterApiContext();
  const [routes, setRoutes] = useState<Awaited<ReturnType<any>>["data"]>([]);

  const [slippage, setSlippage] = useLocalStorageState("slippage", {
    defaultValue: 1,
  });
  const { setFromMint, setToMint } = useGlobalSwap();
  const [selectedRoute, setSelectedRoute] = useState<any | null>(null);
  const queryClient = useQueryClient();
  const [inputTokenInfo, setInputTokenInfo] = useState<
    TokenInfo | null | undefined
  >(tokenMap.get(INPUT_MINT_ADDRESS) as TokenInfo);
  const [outputTokenInfo, setOutputTokenInfo] = useState<
    TokenInfo | null | undefined
  >(tokenMap.get(OUTPUT_MINT_ADDRESS) as TokenInfo);
  const [hasRoute, setHasRoute] = useState(false);
  const [swapping, setSwapping] = useState(false);
  const [loadingRoute, setLoadingRoute] = useState(true); // Loading by default
  const { data: tokenAccounts, refresh: refreshToken } = useTokenAccounts(
    connection,
    publicKey
  );
  const [inputAmout, setInputAmount] = useState("1");
  const { data: solBalance, refresh: refreshSol } = useSolBalance(
    connection,
    publicKey
  );

  const initQuerySwap = () => {
    if (query['tokens']) {
      const initTokensQuery = query['tokens'];
      const initTokens = (initTokensQuery as string).split('-');
      const fromTokenInfo = splTokenList.find((tkn) => tkn.symbol == initTokens[0]);
      const toTokenInfo = splTokenList.find((tkn) => tkn.symbol == initTokens[1]);
      if (fromTokenInfo && toTokenInfo) {
        setInputTokenInfo(tokenMap.get(fromTokenInfo.address) as TokenInfo);
        setOutputTokenInfo(tokenMap.get(toTokenInfo.address) as TokenInfo);
        setFromMint(fromTokenInfo.address);
        setToMint(toTokenInfo.address);
        queryClient.refetchQueries([`tokenInfo-from`, fromTokenInfo.address]);
        queryClient.refetchQueries([`tokenInfo-to`, toTokenInfo.address]);
      }
    }
  }
  useMemo(() => {
    if (query['tokens']) {
      initQuerySwap();
    } else {
      setInputTokenInfo(tokenMap.get(INPUT_MINT_ADDRESS) as TokenInfo);
      setOutputTokenInfo(tokenMap.get(OUTPUT_MINT_ADDRESS) as TokenInfo);
      setFromMint(INPUT_MINT_ADDRESS);
      setToMint(OUTPUT_MINT_ADDRESS);
      queryClient.refetchQueries([`tokenInfo-from`, INPUT_MINT_ADDRESS]);
      queryClient.refetchQueries([`tokenInfo-to`, OUTPUT_MINT_ADDRESS]);
    }
  }, [tokenMap]);

  // Good to add debounce here to avoid multiple calls
  const fetchRoute = React.useCallback(() => {
    if (!inputTokenInfo || !outputTokenInfo) return;
    setLoadingRoute(true);
    api
      .v4QuoteGet({
        amount: (
          parseFloat(inputAmout) * Math.pow(10, inputTokenInfo?.decimals)
        ).toString(),
        inputMint: inputTokenInfo?.address,
        outputMint: outputTokenInfo?.address,

        feeBps: 50,
      })
      .then(({ data }) => {
        if (data) {
          setHasRoute(
            data.length > 0 &&
            !!data[0].outAmount &&
            Number(data[0].outAmount) > 0
          );
          setRoutes(data);
        }
      })
      .finally(() => {
        setLoadingRoute(false);
      });
  }, [api, inputAmout, inputTokenInfo, outputTokenInfo]);

  useEffect(() => {
    fetchRoute();
  }, [fetchRoute]);

  const bestRoute = routes?.[0];

  useEffect(() => {
    if (!firstLoad && bestRoute) {
      setSelectedRoute(bestRoute);
      setFirstLoad(true);
    }
  }, [loaded, bestRoute]);

  useEffect(() => {
    setFirstLoad(false);
  }, [inputTokenInfo, outputTokenInfo, loadingRoute]);

  // ensure outputMint can be swapable to inputMint
  useEffect(() => {
    if (inputTokenInfo) {
      const possibleOutputs = routeMap.get(inputTokenInfo.address);

      if (
        possibleOutputs &&
        !possibleOutputs?.includes(outputTokenInfo?.address || "")
      ) {
        setHasRoute(false);
      }
    } else {
      setHasRoute(false);
    }
  }, [inputTokenInfo, outputTokenInfo]);

  const handleSwap = async () => {
    if (!outputTokenInfo?.address) return;

    const wSol = inputTokenInfo?.address === NATIVE_MINT.toBase58();

    const parsedAmount = parseFloat(inputAmout);
    if (
      !parsedAmount ||
      isNaN(parsedAmount) ||
      !isFinite(parsedAmount) ||
      !inputTokenInfo?.address
    ) {
      showNotification({
        title: <span>Error</span>,
        message: <span>Invalid amount</span>,
        color: 'red',

        loading: false,
      });
      // return toast.info(<p className="text-xs font-bold">Invalid amount</p>);
    }

    const tokenAccount = tokenAccounts?.getByMint(
      new PublicKey(inputTokenInfo?.address)
    );

    const userBalances =
      wSol && solBalance
        ? solBalance.uiAmount
        : tokenAccount?.decimals
          ? Number(tokenAccount?.account.amount) /
          Math.pow(10, tokenAccount?.decimals)
          : null;

    if (!userBalances) {
      showNotification({
        title: <span>Error</span>,
        message: <span>Could not find user balances</span>,
        color: 'red',

        loading: false,
      });
      // return toast.info(
      //   <p className="text-xs font-bold">Could not find user balances</p>
      // );
    }

    if (userBalances < parsedAmount) {
      showNotification({
        title: <span>Error</span>,
        message: <span> Not enough balances (only have {userBalances.toFixed(2)})
          {inputTokenInfo.symbol})</span>,
        color: 'red',

        loading: false,
      });
      //return <div></div>;
      // return toast.info(
      //   <p className="text-xs font-bold">
      //     Not enough balances (only have {round(userBalances, 2)}
      //     {inputTokenInfo.symbol})
      //   </p>
      // );
    }

    const txids: string[] = [];
    try {
      if (!loadingRoute && selectedRoute && publicKey && signAllTransactions) {
        setSwapping(true);
        showNotification({
          title: <span>Info</span>,
          message: <span>Preparing Transaction</span>,
          color: 'blue',

          loading: false,
        });
        // toast(<RenderUpdate updateText="Preparing transaction" load={true} />, {
        //   type: toast.TYPE.INFO,
        //   autoClose: false,
        //   toastId: toastId.current,
        // });

        // Fee are in output token
        const { pubkey: feeAccount, ix } = await getFeeAddress(
          connection,
          new PublicKey(outputTokenInfo.address),
          publicKey
        );

        let feeTx: Transaction | undefined = undefined;
        if (ix) {
          feeTx = new Transaction().add(ix);
          const { blockhash } = await connection.getLatestBlockhash();
          feeTx.feePayer = publicKey;
          feeTx.recentBlockhash = blockhash;
          const sig = await sendTransaction(feeTx, connection);
          await connection.confirmTransaction(sig, "processed");
        }

        const { swapTransaction } = await api.v4SwapPost({
          body: {
            route: selectedRoute,
            userPublicKey: publicKey.toBase58(),
            feeAccount: feeAccount.toBase58(),
          },
        });
        // const transactions = (
        //   [swapTransaction].filter(Boolean) as string[]
        // ).map((tx) => {
        //   return Transaction.from(Buffer.from(tx, "base64"));
        // });
        const swapTransactionBuf = Buffer.from(swapTransaction, "base64");
        var transaction = VersionedTransaction.deserialize(swapTransactionBuf);
        // toast.update(toastId.current, {
        //   type: toast.TYPE.INFO,
        //   autoClose: false,
        //   render: () => (
        //     <RenderUpdate updateText="Sending transaction" load={true} />
        //   ),
        //   toastId: toastId.current,
        // });
        showNotification({
          title: <span>Info</span>,
          message: <span>Sending transaction</span>,
          color: 'blue',

          loading: true,
        });
        await signAllTransactions([transaction]);
        const rawTransaction = transaction.serialize();
        const txid = await retry(async () => {
          const tx = await connection.sendRawTransaction(rawTransaction, {
            skipPreflight: true,
            maxRetries: 2,
          });
          await connection.confirmTransaction(tx);
          console.log(`https://solscan.io/tx/${tx}`);
          return tx;
        });
        showNotification({
          title: <span>Transaction confirmed 👌</span>,
          message: <span>View Transaction on {<Link href={`https://solscan.io/tx/${txid}`} target="_blank">Solscan</Link>}</span>,
          color: 'green',

          loading: false,
        });
        // let c = 1;
        // const len = transactions.length;
        // for (let transaction of transactions) {
        //   console.log(`Sending tx ${c}/${len}`);

        //   const txid = await retry(async () => {
        //     const sig = await sendRawTransaction([connection], transaction);
        //     await connection.confirmTransaction(sig, "processed");
        //     return sig;
        //   });

        //   txids.push(txid);

        //   console.log(txid);
        //   c += 1;
        // }

        // toast.update(toastId.current, {
        //   type: toast.TYPE.SUCCESS,
        //   autoClose: 5_000,
        //   render: () => (
        //     <RenderUpdate
        //       updateText="Transaction confirmed 👌"
        //       signatures={txids}
        //       load={true}
        //     />
        //   ),
        //   toastId: toastId.current,
        // });
      }
    } catch (e) {
      console.error("Error", e);
      const isError = e instanceof Error;
      if (isError && e.message.includes("Transaction simulation")) {
        showNotification({
          title: <span>Transaction Failed </span>,
          message: <span>Transaction simulation failed</span>,
          color: 'red',

          loading: false,
        });
        // toast.update(toastId.current, {
        //   type: toast.TYPE.INFO,
        //   autoClose: 5_000,
        //   render: () => (
        //     <RenderUpdate
        //       updateText="Transaction simulation failed"
        //       load={false}
        //     />
        //   ),
        // });
      } else if (isError && e.message.includes("blockhash")) {
        showNotification({
          title: <span>Transaction Failed </span>,
          message: <span>Blockhash not found</span>,
          color: 'red',

          loading: false,
        });
        // toast.update(toastId.current, {
        //   type: toast.TYPE.INFO,
        //   autoClose: 5_000,
        //   render: () => (
        //     <RenderUpdate updateText="Blockhash not found" load={false} />
        //   ),
        //   toastId: toastId.current,
        // });
      } else if (
        isError &&
        e.message.includes("Transaction was not confirmed") &&
        txids.length > 0
      ) {
        // toast.update(toastId.current, {
        //   type: toast.TYPE.INFO,
        //   autoClose: 5_000,
        //   render: () => (
        //     <RenderUpdate
        //       updateText="Transaction failed to confirm. Inspect it on the explorer"
        //       load={false}
        //       signatures={txids}
        //     />
        //   ),
        // });
      } else if (
        isError &&
        e.message.includes("Transaction was not confirmed")
      ) {
        // toast.update(toastId.current, {
        //   type: toast.TYPE.INFO,
        //   autoClose: 5_000,
        //   render: () => (
        //     <RenderUpdate
        //       updateText="Transaction failed to confirm"
        //       load={false}
        //     />
        //   ),
        // });
      } else {
        // toast.update(toastId.current, {
        //   type: toast.TYPE.ERROR,
        //   autoClose: 5_000,
        //   render: () => (
        //     <RenderUpdate updateText="Transaction failed 🤯" load={false} />
        //   ),
        // });
      }
    }
    refreshToken();
    refreshSol();
    setSwapping(false);
  };

  const handleSwitch = () => {
    const _ = { ...inputTokenInfo } as TokenInfo;
    setInputTokenInfo(outputTokenInfo);
    setOutputTokenInfo(_);
  };

  const outputAmount =
    bestRoute &&
    (bestRoute.outAmount || 0) / Math.pow(10, outputTokenInfo?.decimals || 1);

  const refresh = async () => {
    if (swapping) return;
    fetchRoute();
    refreshToken();
    refreshSol();
  };

  useInterval(() => {
    refresh();
  }, 15_000);

  return (
    <>
      <div className={classes.root}>
        <div style={{ position: "relative" }}>
          <Group my={10} position="apart" noWrap

          >


            <Slippage slippage={slippage} setSlippage={setSlippage} />
            {location.pathname === "/" ? (
              <Link href={"/swap"} className="swap-link-btn">
                Click Here For Full Smart Swap Functionality 👆
              </Link>
            ) : (
              <a
                style={{
                  whiteSpace: "pre-wrap",
                  fontFamily: "Roboto",
                  fontSize: "10px",
                  color: "rgba(226, 232, 240, 0.51)",
                  textAlign: "center",
                  fontWeight: "400",
                }}
                href="https://jup.ag/infra"
                target={"_blank"}
                rel="noreferrer"
              >
                Powered By Jupiter For Best Routing
              </a>
            )}
            <UnstyledButton onClick={() => { }}>
              <Refresh style={{ color: "#7791E0" }} />
            </UnstyledButton>
          </Group>
        </div>

        <div className={classes.header}>
          <div className={classes.swapForm}>
            <div className={classes.inputContainer}>
              <div>
                <SelectCoin
                  tokenInfo={inputTokenInfo}
                  setCoin={setInputTokenInfo}
                  tokenType={"from"}
                />
              </div>
              <input
                value={inputAmout}
                type="number"
                onChange={(e) => setInputAmount(e.target.value.trim())}
                className={classes.inputStyles}
              />
            </div>
            <div>
              <Balance
                tokenAccounts={tokenAccounts}
                token={inputTokenInfo}
                setInput={setInputAmount}
                solBalance={solBalance}
              />
            </div>
          </div>

          <div className={classes.switchIcon}>
            <UnstyledButton onClick={handleSwitch}>
              <SwapCallsIcon
                style={{
                  fontSize: "30px",

                  fill: "rgba(251, 251, 251, 0.5)",
                }}
              />
            </UnstyledButton>
          </div>

          <div className={classes.swapForm}>

            <div className={classes.inputContainer}>
              <div>
                <SelectCoin
                  tokenInfo={outputTokenInfo}
                  setCoin={setOutputTokenInfo}
                  tokenType={"to"}
                />
              </div>
              <div className={classes.outputDisplay}>{outputAmount}</div>
            </div>
            <div>
              <Balance
                tokenAccounts={tokenAccounts}
                token={outputTokenInfo}
                solBalance={solBalance}
              />
            </div>
          </div>

          {loadingRoute && (
            <div
              style={{
                height: "216px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Loader variant="bars"  />
            </div>
          )}
          {!hasRoute && !loadingRoute && (
            <div className={classes.noRoute}>
              <span className={classes.noRoute}>No route found</span>
              {/* <img className="h-[30px] w-[30px]" src={emoji} /> */}
            </div>
          )}
          {!loadingRoute &&
            !!bestRoute &&
            !!bestRoute.marketInfos &&
            !!outputAmount &&
            !!hasRoute && (
              <button onClick={() => setSelectedRoute(bestRoute)}>
                <SwapRoute
                  isBestRoute={true}
                  route={bestRoute.marketInfos}
                  tokenMap={tokenMap}
                  selected={bestRoute === selectedRoute}
                  amount={outputAmount}
                />
              </button>
            )}
          {!loadingRoute &&
            hasRoute &&
            routes
              ?.slice(1)
              ?.filter((e) => !!e.marketInfos && !!e.outAmount)
              .map((r, idx) => {
                return (
                  <button
                    onClick={() => setSelectedRoute(r)}
                    key={`route-${idx}`}
                  >
                    <SwapRoute
                      route={r.marketInfos as InlineResponse200MarketInfos[]}
                      tokenMap={tokenMap}
                      amount={
                        (r.outAmount as number) /
                        Math.pow(10, outputTokenInfo?.decimals || 0)
                      }
                      selected={r === selectedRoute}
                    />
                  </button>
                );
              })}

          {connected ? (
            <div>
              <Button
                fullWidth
                onClick={handleSwap}
                disabled={swapping || !loaded || !hasRoute}
                className={classes.swapButton}
                loading={swapping}
              >
                Swap
              </Button>
            </div>
          ) : (
            <WalletConnect />
          )}
        </div>
      </div>
    </>
  );
};

export default JupiterForm;
