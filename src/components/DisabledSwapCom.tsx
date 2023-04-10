import { Button, makeStyles } from "@material-ui/core";
import { Provider } from "@project-serum/anchor";
import { SnackbarProvider, useSnackbar } from "notistack";
import {
  useContext, useEffect, useLayoutEffect, useMemo, useState
} from "react";
// @ts-ignore
import Wallet from "@project-serum/sol-wallet-adapter";
import {
  ConfirmOptions,
  Connection, PublicKey, Signer, Transaction,
  TransactionSignature
} from "@solana/web3.js";

import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import axios from "axios";
import numeral from "numeral";
import styled from "styled-components";
import GlobalSwapContext from "../context/context/globalSwapContext";
import FloatingNavBar from "../Serum/components/layout/FloatingNavbar";
import { Swap, SwapCard } from "../swap-ui";
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -4em;
  padding: 16px 16px;

  scrollbar-width: none !important;
  overflow-y: scroll;
  .borderNone .ant-select-selector {
    border: none !important;
  }
`;
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
// App illustrating the use of the Swap component.
//
// One needs to just provide an Anchor `Provider` and a `TokenListContainer`
// to the `Swap` component, and then everything else is taken care of.
function DisabledSwapComponent({ fromAddress, toAddress, tokenList }) {
  const { fromGlobalMint, toGlobalMint } = useContext(GlobalSwapContext);

  useEffect(() => {}, [fromGlobalMint, toGlobalMint]);
  return (
    <SnackbarProvider maxSnack={5} autoHideDuration={8000}>
      <AppInner
        fromAddress={fromAddress}
        toAddress={toAddress}
        tokenList={tokenList}
      />
    </SnackbarProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

function AppInner({ fromAddress, toAddress, tokenList }) {
  const styles = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [isConnected, setIsConnected] = useState(false);
  const { fromGlobalMint, toGlobalMint } = useContext(GlobalSwapContext);
  const [initTokenId, setInitTokenId] = useState("solana");
  const [provider, wallet] = useMemo(() => {
    const opts: ConfirmOptions = {
      preflightCommitment: "recent",
      commitment: "recent",
    };
    //const network = `https://radial-delicate-layer.solana-mainnet.discover.quiknode.pro/${process.env.REACT_APP_QUICK_NODE_API_KEY}/`;
    //const network = `https://radial-delicate-layer.solana-mainnet.discover.quiknode.pro/${process.env.REACT_APP_QUICK_NODE_API_KEY}/`;
    const network = `https://radial-delicate-layer.solana-mainnet.discover.quiknode.pro/${process.env.REACT_APP_QUICK_NODE_API_KEY}/`;
    const wallet = new Wallet("https://www.sollet.io", network);
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new NotifyingProvider(
      connection,
      wallet,
      opts,
      (tx, err) => {
        if (err) {
          enqueueSnackbar(`Error: ${err.toString()}`, {
            variant: "error",
          });
        } else {
          enqueueSnackbar("Transaction sent", {
            variant: "success",
            action: (
              <Button
                color="inherit"
                component="a"
                target="_blank"
                rel="noopener"
                href={`https://explorer.solana.com/tx/${tx}`}
              >
                View on Solana Explorer
              </Button>
            ),
          });
        }
      }
    );
    return [provider, wallet];
  }, [enqueueSnackbar]);

  // Connect to the wallet.
  useEffect(() => {
    wallet.on("connect", () => {
      enqueueSnackbar("Wallet connected", { variant: "success" });
      setIsConnected(true);
    });
    wallet.on("disconnect", () => {
      enqueueSnackbar("Wallet disconnected", { variant: "info" });
      setIsConnected(false);
    });
  }, [wallet, enqueueSnackbar, fromGlobalMint, toGlobalMint]);

  return (
    <div>
      {tokenList && (
        <Swap
          provider={provider}
          tokenList={tokenList}
          containerStyle={{
            // backgroundColor: "#242731",
            height: "560px",
            // background: "rgb(255,255,255)",
            // border: "2px solid rgba(170, 170, 170, 0.2)",
            // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            // margin: "0.4em",
            // maxWidth: "95%",
          }}
          swapTokenContainerStyle={{
            // border: "1px solid rgba(170, 170, 170, 0.2)",
            color: "#000",
            boxShadow: "none",
            backgroundColor: "rgb(241, 241, 241)",
            borderRadius: "10px",
          }}
          fromMint={fromGlobalMint}
          toMint={toGlobalMint}
        >
          <div className="swap-ui">
            <SwapCard
              containerStyle={{
                // backgroundColor: "#242731",
                height: "670px",
                // background: "rgb(255,255,255)",
                // border: "2px solid rgba(170, 170, 170, 0.2)",
                // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                width: "100%",
                // margin: "0.4em",
              }}
              swapTokenContainerStyle={{
                // border: "1px solid rgba(170, 170, 170, 0.2)",
                color: "#000",
                boxShadow: "none",
                backgroundColor: "rgb(241, 241, 241)",
                borderRadius: "10px",
              }}
            />
          </div>
        </Swap>
      )}
    </div>
  );
}

// Cast wallet to AnchorWallet in order to be compatible with Anchor's Provider class
interface AnchorWallet {
  signTransaction(tx: Transaction): Promise<Transaction>;
  signAllTransactions(txs: Transaction[]): Promise<Transaction[]>;
  publicKey: PublicKey;
}

// Custom provider to display notifications whenever a transaction is sent.
//
// Note that this is an Anchor wallet/network provider--not a React provider,
// so all transactions will be flowing through here, which allows us to
// hook in to display all transactions sent from the `Swap` component
// as notifications in the parent app.
class NotifyingProvider extends Provider {
  // Function to call whenever the provider sends a transaction;
  private onTransaction: (
    tx: TransactionSignature | undefined,
    err?: Error
  ) => void;

  constructor(
    connection: Connection,
    wallet: Wallet,
    opts: ConfirmOptions,
    onTransaction: (tx: TransactionSignature | undefined, err?: Error) => void
  ) {
    const newWallet = wallet as AnchorWallet;
    super(connection, newWallet, opts);
    this.onTransaction = onTransaction;
  }

  async send(
    tx: Transaction,
    signers?: Array<Signer | undefined>,
    opts?: ConfirmOptions
  ): Promise<TransactionSignature> {
    try {
      const txSig = await super.send(tx, signers, opts);
      this.onTransaction(txSig);
      return txSig;
    } catch (err) {
      if (err instanceof Error || err === undefined) {
        this.onTransaction(undefined, err);
      }
      return "";
    }
  }

  async sendAll(
    txs: Array<{ tx: Transaction; signers: Array<Signer | undefined> }>,
    opts?: ConfirmOptions
  ): Promise<Array<TransactionSignature>> {
    try {
      const txSigs = await super.sendAll(txs, opts);
      txSigs.forEach((sig) => {
        this.onTransaction(sig);
      });
      return txSigs;
    } catch (err) {
      if (err instanceof Error || err === undefined) {
        this.onTransaction(undefined, err);
      }
      return [];
    }
  }
}

export default DisabledSwapComponent;
