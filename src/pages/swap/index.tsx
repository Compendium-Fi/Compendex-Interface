/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, makeStyles, Tab } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import React, { useEffect, useMemo, useState } from "react";
// @ts-ignore
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { AutoComplete, Col, Row } from "antd";
import styled from "styled-components";
import BuySellCard from "../../components/BuySellCard";
import FloatingNavBar from "../../components/layout/FloatingNavbar";
import SwapBottomTab from "../../components/SwapBottomTab";
import SwapTokenHistoryChart from "../../components/SwapTokenHistoryChart";
import TokenSmallCard from "../../components/TokenSmallCard";

import JupiterForm from "@/components/swap/Jupiter";

import { useGlobalSwap } from "@/context/GlobalSwap";
import { useTokenList } from "@/context/tokenList";
import { useViewport } from "@/context/viewPort";
import useTokenInfoQuery from "@/hooks/useTokenInfoQuery";
import { useRouter } from "next/router";
import CustomTicker from "../../components/CustomTicker";
import TickerItem from "../../components/TickerItem";
import { getTokenTickers } from "../../utils/tokenApi";
import SeoParams from "@/components/SeoParams";
import { getCookie } from "cookies-next";
let { Option } = AutoComplete;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -4em;
  width: 98vw;
  flex: 1;

  // padding: 16px 16px;

  scrollbar-width: none !important;
  // overflow-y: scroll;
  .borderNone .ant-select-selector {
    border: none !important;
  }
`;

function Swap({ tokenList }) {
  return (
    <>
      <SnackbarProvider maxSnack={5} autoHideDuration={8000}>
        <AppInner tokenList={tokenList} />
      </SnackbarProvider>
    </>
  );
}

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
      borderBottom: "none",
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
      minWith: "auto",
      minWidth: "125px",
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "transparent",
    },
    "& .MuiTabs-flexContainer": {
      borderBottom: "1px solid #132235",
    },
    "& .iuIFQc": {
      minHeight: "10px !important",
    },
  },
});
const AppInner = ({ tokenList }) => {
  const { splTokenList } = useTokenList();

  const [initTokenId, setInitTokenId] = useState("solana");
  const [selectedFirst, setSelectedFirst] = useState(false);

  const { width } = useViewport();
  const history = useRouter();
  const RenderNormal = ({ screenWidth }) => {
    const classes = useStyles();
    const { fromMint, toMint } = useGlobalSwap();

    const fromTokenData = useTokenInfoQuery(`tokenInfo-from`, fromMint);
    const toTokenData = useTokenInfoQuery(`tokenInfo-to`, toMint);
    useMemo(() => {}, [fromTokenData, toTokenData]);
    const [value, setValue] = React.useState("1");
    const [swapValue, setSwapValue] = useState("1");
    const handleSwapChange = (event, newValue) => {
      if (newValue == "2") {
        history.push("/market/8BnEgHoWFysVcuFFX7QztDmzuH8r5ZFvyP3sYwn1XTh6");
      } else {
        setSwapValue(newValue);
      }
    };

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <>
       
        <Row
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,

            flex: 1,
            position: "relative",
            marginBottom: 30,
            gap: "20px",
          }}
        >
          <Col flex={"360px"}>
            <div className=" data-card-container">
              <TabContext value={swapValue}>
                <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                  <TabList
                    className={classes.root}
                    scrollButtons="auto"
                    onChange={handleSwapChange}
                    TabIndicatorProps={{ style: { minWidth: "auto" } }}
                  >
                    <Tab label={`Smart Swap`} value="1" />
                    {/* <Tab label={`Limit Order`} value="2" /> */}
                    <Tab label={`Open Book`} value="2" />
                  </TabList>
                </Box>

                <TabPanel value="1">
                  <JupiterForm />
                </TabPanel>
                <TabPanel value="2"></TabPanel>
              </TabContext>
            </div>
          </Col>
          <Col flex={"auto"}>
            <div className="swap-token-chart-card">
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="Token History Chart"
                    className={classes.root}
                  >
                    <Tab
                      label={`${
                        !fromTokenData.isLoading &&
                        !fromTokenData.isError &&
                        fromTokenData.data.tokenInfo
                          ? fromTokenData.data.tokenInfo.tokenInfo.name
                          : ""
                      } Price chart`}
                      value="1"
                    />
                    <Tab
                      label={`${
                        !toTokenData.isLoading &&
                        !toTokenData.isError &&
                        toTokenData.data &&
                        toTokenData.data.tokenInfo
                          ? toTokenData.data.tokenInfo.tokenInfo.name
                          : ""
                      } Price chart`}
                      value="2"
                    />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <SwapTokenHistoryChart
                    tokenHistory={
                      !fromTokenData.isLoading &&
                      !fromTokenData.isError &&
                      fromTokenData.data.tokenHistory &&
                      fromTokenData.data.tokenHistory
                    }
                  />
                </TabPanel>
                <TabPanel value="2">
                  <SwapTokenHistoryChart
                    tokenHistory={
                      !toTokenData.isLoading &&
                      !toTokenData.isError &&
                      toTokenData.data &&
                      toTokenData.data.tokenHistory &&
                      toTokenData.data.tokenHistory
                    }
                  />
                </TabPanel>
              </TabContext>
            </div>
          </Col>
          <Col flex={"360px"}>
            <BuySellCard />
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "space-evenly",
            display: "flex",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            flexShrink: 1,
            flex: 1,
            position: "relative",
            marginBottom: 30,
            gap: "20px",
          }}
        >
          <Col flex={"436px"}>
            <TokenSmallCard
              mint={fromMint}
              tokenInfo={
                !fromTokenData.isLoading &&
                !fromTokenData.isError &&
                fromTokenData.data.tokenInfo &&
                fromTokenData.data.tokenInfo
              }
            />
          </Col>
          <Col flex={"436px"}>
            <TokenSmallCard
              mint={toMint}
              tokenInfo={
                !fromTokenData.isLoading &&
                !toTokenData.isError &&
                toTokenData.data &&
                toTokenData.data.tokenInfo &&
                toTokenData.data.tokenInfo
              }
            />
          </Col>
          <Col flex={"auto"}>
            <SwapBottomTab />
          </Col>
        </Row>
      </>
    );
  };
  const RenderMedium = ({ screenWidth }) => {
    const classes = useStyles();

    const [value, setValue] = React.useState("1");
    const { fromMint, toMint } = useGlobalSwap();

    const fromTokenData = useTokenInfoQuery(`tokenInfo-from`, fromMint);
    const toTokenData = useTokenInfoQuery(`tokenInfo-to`, toMint);
    const [swapValue, setSwapValue] = useState("1");
    const handleSwapChange = (event, newValue) => {
      if (newValue == "2") {
        history.push("/market/8BnEgHoWFysVcuFFX7QztDmzuH8r5ZFvyP3sYwn1XTh6");
      } else {
        setSwapValue(newValue);
      }
    };
    useMemo(() => {}, [fromTokenData, toTokenData]);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const customClasses = useStyles({});
    return (
      <>
    
        <Row
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,

            flex: 1,
            position: "relative",
            marginBottom: 30,
            marginLeft: 30,
            gap: "20px",
          }}
        >
          <Col flex={"360px"}>
            <div className=" data-card-container">
              <TabContext value={swapValue}>
                <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                  <TabList
                    className={classes.root}
                    scrollButtons="auto"
                    TabIndicatorProps={{ style: { minWidth: "auto" } }}
                    onChange={handleSwapChange}
                  >
                    <Tab label={`Smart Swap`} value="1" />
                    {/* <Tab label={`Limit Order`} value="2" /> */}
                    <Tab label={`Open Book`} value="2" />
                  </TabList>
                </Box>

                <TabPanel value="1">
                  <JupiterForm />
                </TabPanel>
              </TabContext>
            </div>
          </Col>
          <Col flex={"auto"}>
            <div className="swap-token-chart-card">
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="Token History Chart"
                    className={classes.root}
                  >
                    <Tab
                      label={`${
                        !fromTokenData.isLoading &&
                        !fromTokenData.isError &&
                        fromTokenData.data.tokenInfo
                          ? fromTokenData.data.tokenInfo.tokenInfo.name
                          : ""
                      } Price chart`}
                      value="1"
                    />
                    <Tab
                      label={`${
                        !toTokenData.isLoading &&
                        !toTokenData.isError &&
                        toTokenData.data &&
                        toTokenData.data.tokenInfo
                          ? toTokenData.data.tokenInfo.tokenInfo.name
                          : ""
                      } Price chart`}
                      value="2"
                    />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <SwapTokenHistoryChart
                    tokenHistory={
                      !fromTokenData.isLoading &&
                      !fromTokenData.isError &&
                      fromTokenData.data.tokenHistory &&
                      fromTokenData.data.tokenHistory
                    }
                  />
                </TabPanel>
                <TabPanel value="2">
                  <SwapTokenHistoryChart
                    tokenHistory={
                      !toTokenData.isLoading &&
                      !toTokenData.isError &&
                      toTokenData.data &&
                      toTokenData.data.tokenHistory &&
                      toTokenData.data.tokenHistory
                    }
                  />
                </TabPanel>
              </TabContext>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,

            flex: 1,
            position: "relative",
            marginBottom: 30,
            marginLeft: 30,
            gap: "20px",
          }}
        >
          <Col flex={"360px"}>
            <BuySellCard />
          </Col>
          <Col flex={"auto"}>
            <TokenSmallCard
              mint={fromMint}
              tokenInfo={
                !fromTokenData.isLoading &&
                !fromTokenData.isError &&
                fromTokenData.data.tokenInfo &&
                fromTokenData.data.tokenInfo
              }
            />
          </Col>
          <Col flex={"auto"}>
            <TokenSmallCard
              mint={fromMint}
              tokenInfo={
                !toTokenData.isLoading &&
                !toTokenData.isError &&
                toTokenData.data.tokenInfo &&
                toTokenData.data.tokenInfo
              }
            />
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,

            flex: 1,
            position: "relative",
            marginBottom: 30,
            marginLeft: 30,
            gap: "20px",
          }}
        >
          <Col flex={"auto"}>
            <SwapBottomTab />
          </Col>
        </Row>
      </>
    );
  };
  const RenderSmall = ({ screenWidth }) => {
    const classes = useStyles();

    const [value, setValue] = React.useState("1");
    const { fromMint, toMint } = useGlobalSwap();

    const fromTokenData = useTokenInfoQuery(`tokenInfo-from`, fromMint);
    const toTokenData = useTokenInfoQuery(`tokenInfo-to`, toMint);
    const [swapValue, setSwapValue] = useState("1");
    const handleSwapChange = (event, newValue) => {
      if (newValue == "2") {
        history.push("/market/8BnEgHoWFysVcuFFX7QztDmzuH8r5ZFvyP3sYwn1XTh6");
      } else {
        setSwapValue(newValue);
      }
    };
    useMemo(() => {}, [fromTokenData, toTokenData]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <>
     
        <Row
          style={{
            minHeight: "400px",
            flexWrap: "nowrap",
          }}
        >
          <Col flex="auto">
            <Row
              style={{
                marginTop: "20px",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            >
              <Col flex={"auto"}>
                <div className=" data-card-container">
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                      <TabList
                        className={classes.root}
                        scrollButtons="auto"
                        TabIndicatorProps={{ style: { minWidth: "auto" } }}
                        onChange={handleSwapChange}
                      >
                        <Tab label={`Smart Swap`} value="1" />

                        <Tab label={`Open Book`} value="2" />
                      </TabList>
                    </Box>

                    <TabPanel value="1">
                      <JupiterForm />
                    </TabPanel>
                  </TabContext>
                </div>
              </Col>
            </Row>
            <Row
              style={{
                marginTop: "20px",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            >
              <Col flex={"auto"}>
                <div className="swap-token-chart-card">
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                      <TabList
                        onChange={handleChange}
                        aria-label="Token History Chart"
                        className={classes.root}
                      >
                        <Tab
                          label={`${
                            !fromTokenData.isLoading &&
                            !fromTokenData.isError &&
                            fromTokenData.data.tokenInfo
                              ? fromTokenData.data.tokenInfo.tokenInfo.name
                              : ""
                          } Price chart`}
                          value="1"
                        />
                        <Tab
                          label={`${
                            !toTokenData.isLoading &&
                            !toTokenData.isError &&
                            toTokenData.data &&
                            toTokenData.data.tokenInfo
                              ? toTokenData.data.tokenInfo.tokenInfo.name
                              : ""
                          } Price chart`}
                          value="2"
                        />
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <SwapTokenHistoryChart
                        tokenHistory={
                          !fromTokenData.isLoading &&
                          !fromTokenData.isError &&
                          fromTokenData.data.tokenHistory &&
                          fromTokenData.data.tokenHistory
                        }
                      />
                    </TabPanel>
                    <TabPanel value="2">
                      <SwapTokenHistoryChart
                        tokenHistory={
                          !toTokenData.isLoading &&
                          !toTokenData.isError &&
                          toTokenData.data &&
                          toTokenData.data.tokenHistory &&
                          toTokenData.data.tokenHistory
                        }
                      />
                    </TabPanel>
                  </TabContext>
                </div>
              </Col>
            </Row>

            <Row
              style={{
                marginTop: "20px",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            >
              <Col flex={"auto"}>
                <BuySellCard />
              </Col>
            </Row>
            <Row
              style={{
                marginTop: "20px",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            >
              <Col flex={"auto"}>
                <TokenSmallCard
                  mint={fromMint}
                  tokenInfo={
                    !fromTokenData.isLoading &&
                    !fromTokenData.isError &&
                    fromTokenData.data.tokenInfo &&
                    fromTokenData.data.tokenInfo
                  }
                />
              </Col>
            </Row>
            <Row
              style={{
                marginTop: "20px",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            >
              <Col flex={"auto"}>
                <TokenSmallCard
                  mint={fromMint}
                  tokenInfo={
                    !toTokenData.isLoading &&
                    !toTokenData.isError &&
                    toTokenData.data.tokenInfo &&
                    toTokenData.data.tokenInfo
                  }
                />
              </Col>
            </Row>
            <Row
              style={{
                marginTop: "20px",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            >
              <Col flex={"auto"}>
                <SwapBottomTab />
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  };

  const component = (() => {
    if (width < 1000) {
      return <RenderSmall screenWidth={width} />;
    } else if (width < 1420) {
      return <RenderMedium screenWidth={width} />;
    } else {
      return <RenderNormal screenWidth={width} />;
    }
  })();

  const SwapHeader = ({ coingeckoId, selectedFirst }) => {
    const [tokenTickers, setTokenTickers] = useState([]);

    const initTickers = async () => {
      let tickers = await getTokenTickers();
      setTokenTickers(tickers);
    };
    // const initInfo = async () => {
    //     if (!selectedFirst && splTokenList) {
    //         let token = splTokenList.find(
    //             (elm) => elm.address === fromMint.toBase58()
    //         );
    //         if (token && fromTokenData) {
    //             setSelectedToken(token);
    //             setTokenInfo(fromTokenData.coingecko);
    //         }
    //     } else {
    //         let token = splTokenList.find(
    //             (elm) => elm.address === toMint.toBase58()
    //         );
    //         if (token && toTokenData) {
    //             setSelectedToken(token);
    //             setTokenInfo(toTokenData.coingecko);
    //         }
    //     }
    // };

    useEffect(() => {
      initTickers();
      return () => {};
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const { width } = useViewport();

    return width > 910 ? (
      <FloatingNavBar style={{ marginTop: "-15px" }}>
        <Row
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "nowrap",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "rgba(51, 66, 87, 0.6)",
            borderRadius: "5px",
            marginBottom: "20px",
            minHeight: "60px",
            padding: "5px",
            marginLeft: width > 1400 ? "0px" : "30px",
            backgroundColor: "#080f19",
          }}
        >
          <Col flex={"230px"}>
            <div
              className="price-title"
              style={{
                backgroundColor: "rgba(19, 34, 53, 0.5)",
                width: "100%",
                minHeight: "40px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "rgb(19, 34, 53)",
                borderRadius: "5px",
                maxWidth: "180px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <img src={"/assets/img/pricing.png"} alt="" />
              <span>Price Movements</span>
            </div>
          </Col>
          <Col flex={"auto"}>
            <div className="parent-container">
              <CustomTicker>
                {tokenTickers &&
                  tokenTickers.map((elm: any) => <TickerItem elm={elm} />)}
              </CustomTicker>
            </div>
          </Col>
        </Row>
      </FloatingNavBar>
    ) : (
      <FloatingNavBar>
        <Row
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "nowrap",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "rgba(51, 66, 87, 0.6)",
            borderRadius: "5px",
            minHeight: "60px",
            marginBottom: "20px",
            marginLeft: "5px",
            marginRight: "5px",
            padding: "10px",
            gap: "5px",
            backgroundColor: "#080f19",
          }}
        >
          <Col flex={"auto"}>
            <div
              className="price-title"
              style={{
                backgroundColor: "rgba(19, 34, 53, 0.5)",
                width: "100%",
                minHeight: "40px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "rgb(19, 34, 53)",
                borderRadius: "5px",
                maxWidth: "120px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <img src={"/assets/img/pricing.png"} alt="" />
              <span>Price Movements</span>
            </div>
          </Col>
          <Col flex={"auto"}>
            <div className="parent-container">
              <CustomTicker>
                {tokenTickers &&
                  tokenTickers.map((elm: any) => (
                    <div className="sol-price-card" key={elm.id}>
                      <span id="token">{elm.symbol}</span>
                      <span id="usd-price">{elm.current_price}</span>
                      <span
                        id="percentage"
                        className={
                          elm.market_cap_change_percentage_24h > 0
                            ? "percentage-plus"
                            : "percentage-minus"
                        }
                      >
                        {elm.market_cap_change_percentage_24h > 0 ? "+" : ""}
                        {elm.market_cap_change_percentage_24h.toFixed(3)}%
                      </span>
                    </div>
                  ))}
              </CustomTicker>
            </div>
          </Col>
        </Row>
      </FloatingNavBar>
    );
  };
  return (
    <>
      <div className="page__row">
        <div
          className="page__col"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Wrapper>
            <SwapHeader
              coingeckoId={initTokenId}
              selectedFirst={selectedFirst}
            />
            {component}
          </Wrapper>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  const fromToken = getCookie("fromToken");
  const toToken = getCookie("toToken");
  const title: string = ` Smart Swap Aggregator ${fromToken} - ${toToken}  | Compendex`;

  const description: string = ` Swap  ${fromToken}  for ${toToken} on the smartest swap aggregator on Solana. Make intelligent decisions with the latest analytics, smart order routing, data, and charts, for all supported markets.`;
  return {
    props: {
      title,
      description,
    },
  };
}

export default Swap;
