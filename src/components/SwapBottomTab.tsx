// import { TOKEN_LIST_URL } from "@jup-ag/core";
import { Box, makeStyles, Tab } from "@material-ui/core";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";

import WalletConnect from "../components/WalletConnect";
import { useConnection } from "../utils/connection";
//import { useWallet } from "../Serum/utils/wallet";
import { fetchTokenPrice, getUsersTokenSolScan } from "../utils/tokenApi";
import numeral from "numeral";
import moment from "moment";
import { ArrowRightAltSharp } from "@material-ui/icons";
import WatchList from "./WatchList";
import { useWallet } from "@solana/wallet-adapter-react";
import { useTokenList } from "@/context/tokenList";
const useStyles = makeStyles({
  root: {
    "& .Mui-selected": {
      backgroundColor: "#132235",
      color: "#E2E8F0",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "11px",
      lineHeight: "12px",
      textTransform: "capitalize",
      border: "1px solid #132235",
      borderTopRadius: "5px",
      borderBottom: "none"
    },
    "& .MuiTab-root": {
      color: "#E2E8F0",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "11px",
      lineHeight: "12px",
      textTransform: "capitalize",

      maxHeight: "30px",
      borderBottom: "none",
      minHeight: "30px",
      minWidth: "125px"
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "transparent"
    },
    "& .MuiTabs-flexContainer": {
      borderBottom: "1px solid #132235",
      width: "100%"
    },

    " & .MuiTabPanel-root": {
      width: "100%"
    },
    "& .MuiBox-root-650": {
      width: "100%"
    },
    "& .MuiTabPanel-root-dreiQx": {
      width: "100%"
    },
    "& .MuiBox-root": {
      backgroundColor: "green"
    },
    "& .MuiTabPanel-root": {
      backgroundColor: "red"
    }
  },
  panel: {
    "& .MuiTabPanel-root": {
      backgroundColor: "red"
    }
  }
});
const SwapBottomTab = () => {
  const getTokenImageBySymbol = (symbol) => {
    let token = splTokenList.find((elm) => elm.symbol == symbol);
    // console.log("Token", token);
    if (token) {
      return token.logoURI;
    } else {
      return null;
    }
  };
  //@ts-ignore
  const classes = useStyles();
  const { connected, wallet, publicKey } = useWallet();
  const [value, setValue] = React.useState("1");
  const [userBalance, setUserBalance] = useState<any>([]);
  const { splTokenList } = useTokenList();
  const connection = useConnection();
  const [tradeHistory, setTradeHistory] = useState([]);
  const getTransactionHistory = useCallback(async () => {
    try {
      if (connected && wallet && publicKey) {
        let { data } = await axios.get(
          `https://stats.jup.ag/transactions?publicKey=${publicKey.toBase58()}`
        );

        setTradeHistory(data);
      }
    } catch (e: any) {
      console.log(e.message);
    }
  }, [connected, wallet]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const findTokenIconBySymbol = (symbol) => {
    let token = splTokenList.find((elm) => elm.symbol === symbol);

    return token ? token.logoURI : "";
  };
  const initBalance = useCallback(async () => {
    if (connected && publicKey) {
      const { data } = await axios.get("https://cache.jup.ag/tokens");

      let result = await getUsersTokenSolScan(publicKey.toBase58());
      //@ts-ignore
      let balance = await connection.getBalance(publicKey);
      let solBalance = balance / LAMPORTS_PER_SOL;
      let { marketData } = await fetchTokenPrice("solana");
      const solInfo = {
        tokenIcon:
          "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
        tokenAddress: "So11111111111111111111111111111111111111112",
        tokenName: "Native Solana",
        tokenSymbol: "SOL",
        tokenAmount: { uiAmountString: solBalance.toString() },
        balanceInUSD: solBalance * marketData ? marketData.current_price.usd : 0
      };
      if (result) {
        const mappedResult = result.map(async (elm) => {
          let tkn = data.find((token) => token.symbol === elm.tokenSymbol);
          if (tkn && tkn.extensions) {
            let { marketData } = await fetchTokenPrice(
              tkn.extensions.coingeckoId
            );
            return {
              ...elm,
              balanceInUSD: marketData
                ? elm.tokenAmount.uiAmount * marketData.current_price.usd
                : 0
            };
          }
        });
        const finalResult = await Promise.all(mappedResult);
        // console.log("final Result", finalResult);
        setUserBalance([solInfo, ...finalResult]);
      }
    }
  }, [connected]);
  useEffect(() => {
    initBalance();
    getTransactionHistory();
  }, [initBalance, getTransactionHistory]);
  return (
    <div className="token-graph-container">
      <TabContext value={value}>
        <Box className={classes.root} style={{ width: "100%" }}>
          <TabList onChange={handleChange} className={classes.root}>
            <Tab fullWidth label={`Balances`} value="1" />
            <Tab fullWidth label={`Swap History`} value="2" />
            <Tab fullWidth label={`WatchList`} value="3" />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          className={classes.panel}
          style={{ padding: "0.7em !important" }}
        >
          {!connected ? (
            <div className="inner-tab">
              <div className="news-item">
                <div className="left-item">
                  <AccountBalanceWalletIcon
                    style={{ color: "rgb(119, 145, 224)" }}
                  />
                  <div className="text-connect">
                    Please connect your wallet to utilize Swap functions , view
                    balances, or access your open orders.
                  </div>
                </div>
                <div className="header__user wallet-btn">
                  <WalletConnect />
                </div>
              </div>
            </div>
          ) : (
            <div
              className="inner-tab-container"
              style={{
                padding: "0.7em",
                maxHeight: "600px",
                overflowY: "scroll"
              }}
            >
              {userBalance
                .filter((elm) => elm !== undefined)
                .sort((a, b) => b.balanceInUSD - a.balanceInUSD)
                .map((elm: any, ind: number) => (
                  <div className="balance-item " key={ind.toString()}>
                    <div className="token-info">
                      <img
                        src={elm.tokenIcon}
                        alt=""
                        className="item-token-icon"
                      />
                      <div className="token-name">
                        <span id="name">
                          {elm.tokenName} ({elm.tokenSymbol})
                        </span>
                        <span id="balance">
                          {elm.tokenAmount.uiAmountString} {elm.tokenSymbol}
                        </span>
                      </div>
                    </div>
                    <div className="token-info">
                      <div
                        className="token-name"
                        style={{ alignItems: "flex-end" }}
                      >
                        <span id="name">
                          ${numeral(elm.balanceInUSD).format("0,0.000")}
                        </span>
                        <span id="balance-adr">{`${elm.tokenAddress.slice(
                          0,
                          4
                        )}...${elm.tokenAddress.slice(-3)}`}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </TabPanel>
        <TabPanel
          value="2"
          className={classes.panel}
          style={{ padding: "0.7em !important" }}
        >
          {!connected ? (
            <div className="inner-tab">
              <div className="news-item">
                <div className="left-item">
                  <AccountBalanceWalletIcon
                    style={{ color: "rgb(119, 145, 224)" }}
                  />
                  <div className="news-info">
                    Please connect your wallet to utilize Openbook functions ,
                    view balances, or access your open orders.
                  </div>
                </div>
                <div className="header__user wallet-btn">
                  <WalletConnect />
                </div>
              </div>
            </div>
          ) : (
            <div
              className="inner-tab-container"
              style={{
                padding: "0.7em",
                maxHeight: "600px",
                overflowY: "scroll"
              }}
            >
              {tradeHistory
                .sort((a: any, b: any) => {
                  if (
                    new Date(a.timestamp).getTime() >
                    new Date(b.timestamp).getTime()
                  ) {
                    return 1;
                  } else {
                    return -1;
                  }
                })
                .slice(0, 20)
                .map((elm: any) => (
                  <div className="sell-item">
                    <div className="left-item">
                      <img
                        src={findTokenIconBySymbol(elm.inSymbol)}
                        alt=""
                        className="icon"
                      />
                      <ArrowRightAltSharp />
                      <img
                        src={findTokenIconBySymbol(elm.outSymbol)}
                        alt=""
                        className="icon"
                      />
                      <div className="token-pricing">
                        <span className="name">
                          {elm.inSymbol}/{elm.outSymbol}
                        </span>
                        <span className="price">
                          {`
                          ${numeral(Number(elm.inAmountInDecimal)).format(
                            "0,0.000"
                          )}
                            ${elm.inSymbol} →
                          ${numeral(Number(elm.outAmountInDecimal)).format(
                            "0,0.000"
                          )}
                            ${elm.outSymbol}`}
                        </span>
                      </div>
                    </div>
                    <span>{moment(elm.timestamp).fromNow()}</span>
                  </div>
                ))}
            </div>
          )}
        </TabPanel>
        <TabPanel
          value="3"
          className={classes.panel}
          style={{ padding: "0.7em !important" }}
        >
          <WatchList />
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default SwapBottomTab;
