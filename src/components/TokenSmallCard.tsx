import { Box, makeStyles, Tab } from "@material-ui/core";
import StarIcon from "@mui/icons-material/Star";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import numeral from "numeral";
import React, { useEffect, useMemo, useState } from "react";

import useLocalStorageState from "use-local-storage-state";
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
const TokenSmallCard = (props: {
  mint: string;
  className?: string;
  tokenInfo: any;
}) => {
  const { splTokenList } = useTokenList();
  const { connected, wallet, publicKey } = useWallet();
  //@ts-ignore
  const classes = useStyles();
  const [watchList, setWatchList, { isPersistent }] = useLocalStorageState(
    "watchList",
    {
      defaultValue: null,
      storageSync: true
    }
  );
  const [value, setValue] = React.useState("1");
  const [favTokenList, setFavTokenList] = useState<any[]>([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const [tokenInfo, setTokenInfo] = useState<any>(null);
  const { tokenInfo } = props;
  const [token, setToken] = useState<any>(null);

  const fromNative = (amount: number, decimals: number) => {
    return amount / 10 ** decimals;
  };
  const displayName = (elm) => {
    let token = splTokenList.find((tkn) => tkn.symbol === elm);
    console.log("TOken", token)

    if (token) {
      return elm;
    } else {
      let newToken = splTokenList.find((tkn) => tkn.address === elm);

      if (newToken) {
        return newToken.symbol;
      } else {
        return "UNKNOWN";
      }
    }
  };
  const checkIfExist = (token) => {
    if (!token) {
      return false;
    } else {
      let exist = favTokenList.find((elm) => elm.symbol == token.symbol);
      if (exist) {
        return true;
      } else {
        return false;
      }
    }
  };
  const addTokenToWatchList = (token) => {
    if (token) {
      const exist = favTokenList.find((elm) => elm.symbol == token.symbol);
      if (exist) {
        const filterList = favTokenList.filter(
          (elm) => elm.symbol !== token.symbol
        );
        setFavTokenList(filterList);
      } else {
        setFavTokenList([...favTokenList, token]);
      }
    }

    // let list = localStorage.getItem("watchList");
    if (connected && publicKey) {
      if (watchList) {
        let parsedList = watchList;
        const exist = watchList[`${publicKey.toBase58()}`].find(
          (elm) => elm.symbol == token.symbol
        );
        if (exist) {
          parsedList[`${publicKey.toBase58()}`] = watchList[
            `${publicKey.toBase58()}`
          ].filter((elm) => elm.symbol !== token.symbol);
        } else {
          parsedList[`${publicKey.toBase58()}`] = [
            ...watchList[`${publicKey.toBase58()}`],
            token
          ];
        }

        setWatchList(parsedList);
      } else {
        let newList: any = {};
        newList[`${publicKey.toBase58()}`] = [token];
        setWatchList(newList);
      }
    }
  };
  useMemo(() => {
    if (connected && publicKey) {
      if (watchList) {
        if (watchList && watchList[`${publicKey.toBase58()}`]) {
          setFavTokenList(watchList[`${publicKey.toBase58()}`]);
        }
      }
    }
  }, [connected, watchList]);
  // const initTokenInfo = async (mint, coingeckoId) => {
  //   try {
  //     let result = await axios.post(
  //       `https://devnetdex.compendium.fi/mapper/`,
  //       {
  //         token: mint,
  //         coingeckoId: coingeckoId,
  //       }
  //     );

  //     if (!result.data.error) {
  //       setTokenInfo(result.data);
  //     }
  //   } catch (error) {
  //     console.log("ERR", error);
  //   }
  // };
  useEffect(() => {
    let newToken = splTokenList.find((tkn) => tkn.address === props.mint);
    if (newToken) {
      setToken(newToken);
    }
  }, [props.mint, favTokenList]);
  // useMemo(() => {
  //   if (token) {
  //     initTokenInfo(token.address, token?.extensions?.coingeckoId);
  //   }

  //   return () => {};
  // }, [token]);

  const tokenHolders = (tokenHolders) => {
    let holders = 0;
    tokenHolders.forEach((elm) => {
      //holders = holders + elm.amount;
      holders = holders + fromNative(elm.amount, tokenHolders[0].decimals);
    });
    //  console.log("Holders", holders);
    //let totalValue = fromNative(holders, tokenHolders[0].decimals);
    let totalValue = holders;

    return totalValue;
  };
  return (
    <div className="token-graph-container">
      <TabContext value={value}>
        <Box className={classes.root} style={{ width: "100%" }}>
          <TabList onChange={handleChange} className={classes.root}>
            <Tab
              fullWidth
              label={`${token ? token.symbol : ""} Token Information`}
              value="1"
            />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          className={classes.panel}
          style={{ padding: "0.7em !important" }}
        >
          <div className="inner-tab" style={{ padding: "0.7em" }}>
            <div className="token-card">
              <img
                src={token ? token.logoURI : ""}
                className="token-icon"
                alt=""
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  justifySelf: "flex-start",
                  position: "absolute",
                  left: "45px"
                }}
              >
                <span>{token ? token.name : ""}</span>
                <span>{token ? token.symbol : ""}</span>
              </div>
              <button onClick={() => addTokenToWatchList(token)}>
                <StarIcon
                  style={{ color: checkIfExist(token) ? "yellow" : "gray" }}
                />
              </button>
              {/* <a
                href={`https://solscan.io/token/${token?.address}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={solscan}
                  style={{
                    height: 30,
                    width: 30,
                    objectFit: "contain",
                    borderRadius: "50px"
                  }}
                  alt=""
                />
              </a> */}
            </div>
            <div className="token-mint-card">
              <a
                href={`https://solscan.io/token/${token?.address}`}
                target="_blank"
                rel="noreferrer"
              >
                {token && token.address}
              </a>
            </div>
            <div className="token-container-info">
              <div className="row-line">
                <span className="row-title">Current Price</span>
                <span>
                  $
                  {(tokenInfo &&
                    tokenInfo.tokenInfo &&
                    numeral(
                      tokenInfo.coingecko.market_data.current_price.usd
                    ).format("0,0.000")) ||
                    0}
                </span>
              </div>
              <div className="row-line">
                <span className="row-title">Fully Diluted MC:</span>
                <span>
                  $
                  {tokenInfo &&
                    tokenInfo.coingecko &&
                    numeral(
                      tokenInfo.coingecko.market_data.circulating_supply *
                      tokenInfo.coingecko.market_data.current_price.usd
                    ).format("0,0")}
                </span>
              </div>
              <div className="row-line">
                <span className="row-title">Max Total Supply:</span>
                <span>
                  {tokenInfo &&
                    numeral(
                      tokenInfo.coingecko.market_data.total_supply
                    ).format("0,0")}
                </span>
              </div>
              <div className="row-line">
                <span className="row-title">Circulating Supply:</span>
                <span>
                  {tokenInfo &&
                    numeral(
                      tokenInfo.coingecko.market_data.circulating_supply
                    ).format("0,0")}
                </span>
              </div>
              <div className="row-line">
                <span className="row-title">Total Volume:</span>
                <span>
                  $
                  {tokenInfo &&
                    numeral(
                      tokenInfo.coingecko.market_data.total_volume.usd
                    ).format("0,0.000")}
                </span>
              </div>
              <div className="row-line">
                <span className="row-title">Top 10% Holders:</span>
                <span>
                  {tokenInfo
                    ? (
                      tokenHolders(tokenInfo.tokenHolders) /
                      tokenInfo.coingecko.market_data.total_supply
                    ).toFixed(2)
                    : 0}
                  %
                </span>
              </div>
              <div className="row-line">
                <span className="row-title">Total On-Chain Holders:</span>
                <span>
                  {tokenInfo
                    ? (
                      tokenHolders(tokenInfo.tokenHolders) /
                      tokenInfo.coingecko.market_data.total_supply
                    ).toFixed(2)
                    : 0}
                  %
                </span>
              </div>
              <div className="row-line">
                <span className="row-title">Verified CoinGecko Markets:</span>
                <span>{tokenInfo && tokenInfo.coingecko.tickers.length}</span>
              </div>
              <div className="row-line">
                <span className="row-title-markets">
                  Top Markets (Via CoinGecko):
                </span>
              </div>
              <div className="row-line market-list">
                <hr />
                {/* <ul> */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    marginTop: "15px",
                    gap: "15px"
                  }}
                >
                  {tokenInfo &&
                    tokenInfo.coingecko.tickers

                      .sort((a, b) => {
                        if (a.volume > b.volume) {
                          return -1;
                        } else {
                          return 1;
                        }
                      })
                      .slice(0, 2)
                      .map((elm: any, ind: number) => {
                        return (
                          <div
                            key={ind.toString()}
                            className="market-card-item"
                          >
                            <span>
                              - {elm.market.name}: {displayName(elm.base)}-
                              {displayName(elm.target)}
                            </span>
                          </div>
                        );
                      })}
                </div>
                {/* </ul> */}
              </div>
            </div>
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default TokenSmallCard;
