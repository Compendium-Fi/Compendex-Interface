import { Box, makeStyles, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Col, Row } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AnalyticsChart from "../components/AnalyticsChart";
import CryptoNewsCom from "../components/CryptoNewsCom";
import CustomTicker from "../components/CustomTicker";
import MarketPulseChart from "../components/MarketPulseChart";
import SellBuyItem from "../components/SellBuyItem";
import TickerItem from "../components/TickerItem";
import TopLendingYields from "../components/TopLendingYields";
import TopTVLComp from "../components/TopTVLComp";
import TrendingSwapItem from "../components/TrendingSwapItem";
import { useJupStat } from "../context/jupStat";
import FloatingNavBar from "../components/layout/FloatingNavbar";
import TopNFTCollection from "../components/TopNFTCollection";
import { getTokenTickers } from "../utils/tokenApi";
import { useRouter } from "next/router";

import { useViewport } from "@/context/viewPort";
import { useCommonStyles } from "@/components/styles";

import JupiterForm from "@/components/swap/Jupiter";
import { Skeleton } from "@mantine/core";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -4em;
  width: 98vw;
  justify-content: "center";
  align-items: "center";
  flex: 1;

  // padding: 16px 16px;

  scrollbar-width: none !important;
  // overflow-y: scroll;
  .borderNone .ant-select-selector {
    border: none !important;
  }
`;
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
      minWith: "150px",
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
export async function getStaticProps(context) {
  return {
    props: {
      name: "DEX Trading Terminal | Compendex",
      description:
        "Introducing the next generation of trading technology: an open-source, professional-grade trading terminal for Solana. This platform aggregates protocols and analytics across Solana to help improve market efficiency and equalize opportunities for all.",
      image: "https://res.cloudinary.com/doohfu9i4/image/upload/v1682543816/Compendex_-_Solana_Terminal_Overview_Image_tl8h2s.png"
    }, // will be passed to the page component as props
  };
}
export default function Home() {
  return (
    <>
      {/* <SeoLayout title="DEX Trading Terminal | Compendex" > */}
      <TradePageInner />
      {/* </SeoLayout> */}
    </>
  );
}
// description=" Introducing the next generation of trading technology: an open-source, professional-grade trading terminal for Solana. This platform aggregates protocols and analytics across Solana to help improve market efficiency and equalize opportunities for all."
function TradePageInner() {
  const [handleDeprecated, setHandleDeprecated] = useState(false);
  const [tokenTickers, setTokenTickers] = useState([]);

  const { classes } = useCommonStyles();
  const { width } = useViewport();
  const initTickers = async () => {
    let tickers = await getTokenTickers();
    setTokenTickers(tickers);
  };
  const changeOrderRef = useRef();

  useEffect(() => {
    initTickers();
    const handleResize = () => { };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const componentProps = {
    onChangeOrderRef: (ref: any) => (changeOrderRef.current = ref),
    onPrice: useCallback(
      //@ts-ignore
      (price: any) =>
        //@ts-ignore
        changeOrderRef.current && changeOrderRef.current({ price }),
      []
    ),
    onSize: useCallback(
      //@ts-ignore
      (size: any) => changeOrderRef.current && changeOrderRef.current({ size }),
      []
    ),
  };

  const component = (() => {
    if (handleDeprecated) {
      return (
        <DeprecatedMarketsPage
          switchToLiveMarkets={() => setHandleDeprecated(false)}
        />
      );
    }
    if (width < 1000) {
      return <RenderSmall {...componentProps} screenWidth={width} />;
    } else if (width < 1420) {
      return <RenderMedium {...componentProps} screenWidth={width} />;
    } else {
      return <RenderNormal {...componentProps} screenWidth={width} />;
    }
  })();

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
          <div>
            <Wrapper>
              {width > 910 ? (
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
                      <div className={"parent-container"}>
                        <CustomTicker>
                          {tokenTickers &&
                            tokenTickers.map((elm) => <TickerItem elm={elm} />)}
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
                                      ? classes.percentagePlus
                                      : classes.percentageMinus
                                  }
                                >
                                  {elm.market_cap_change_percentage_24h > 0
                                    ? "+"
                                    : ""}
                                  {elm.market_cap_change_percentage_24h.toFixed(
                                    3
                                  )}
                                  %
                                </span>
                              </div>
                            ))}
                        </CustomTicker>
                      </div>
                    </Col>
                  </Row>
                </FloatingNavBar>
              )}
              {component}
            </Wrapper>
          </div>
        </div>
      </div>
    </>
  );
}

const DeprecatedMarketsPage = ({
  switchToLiveMarkets,
}: {
  switchToLiveMarkets: any;
}) => {
  return (
    <>
      <Row>
        <Col flex="auto"></Col>
      </Row>
    </>
  );
};

const RenderNormal = ({
  onChangeOrderRef,
  onPrice,
  onSize,
  screenWidth,
}: {
  onChangeOrderRef: any;
  onPrice: any;
  onSize: any;
  screenWidth: any;
}) => {
  const { classes: commonClasses } = useCommonStyles();
  const [chartValue, setChartValue] = useState("1");
  const [oderValue, setOrderValue] = useState("1");
  const [nftTab, setNftTab] = useState("1");
  const [statsTab, setStatsTab] = useState("1");
  const [trendingSwapView, setTrendingSawpView] = useState("1");
  const [newsTabs, setNewsTab] = useState("1");

  const history = useRouter();
  const handleNewsChange = (event: any, newValue: string) => {
    setNewsTab(newValue);
  };
  const handleTrendingChange = (event: any, newValue: string) => {
    setTrendingSawpView(newValue);
  };
  const handleNftChange = (event: any, newValue: string) => {
    setNftTab(newValue);
  };
  const handleStatChange = (event: any, newValue: string) => {
    setStatsTab(newValue);
  };
  const handleOrderChange = (event: any, newValue: string) => {
    if (newValue === "2") {
      history.push("/market/8BnEgHoWFysVcuFFX7QztDmzuH8r5ZFvyP3sYwn1XTh6");
    } else {
      setOrderValue(newValue);
    }
  };
  const handleChartChange = (event: any, newValue: string) => {
    setChartValue(newValue);
  };
  const classes = useStyles();
  const { volumeByPairs, topBuys, topSells } = useJupStat();

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
            <TabContext value={oderValue}>
              <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                <TabList
                  onChange={handleOrderChange}
                  className={classes.root}
                  scrollButtons="auto"
                  TabIndicatorProps={{ style: { minWidth: "auto" } }}
                >
                  <Tab label={`Smart Swap`} value="1" />
                  {/* <Tab label={`Limit Order →`} value="2" /> */}
                  <Tab label={`Openbook →`} value="2" />
                </TabList>
              </Box>

              <TabPanel value="1">
                <JupiterForm />
              </TabPanel>
              <TabPanel value="2"></TabPanel>
              {/* <TabPanel value="3"></TabPanel> */}
            </TabContext>
          </div>
        </Col>
        <Col flex={"auto"}>
          <div className="data-card-container">
            <TabContext value={chartValue}>
              <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                <TabList
                  onChange={handleChartChange}
                  className={classes.root}
                  scrollButtons="auto"
                  TabIndicatorProps={{ style: { minWidth: "auto" } }}
                >
                  <Tab label={`Market Pulse`} value="1" />
                  <Tab label={`Solana TVL Tracker`} value="2" />
                </TabList>
              </Box>

              <TabPanel value="1">
                <MarketPulseChart />
              </TabPanel>
              <TabPanel value="2">
                <AnalyticsChart />
              </TabPanel>
            </TabContext>
          </div>
        </Col>

        <Col flex={"360px"}>
          <div className=" data-card-container">
            {" "}
            <TabContext value={trendingSwapView}>
              <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                <TabList
                  onChange={handleTrendingChange}
                  aria-label="Token History Chart"
                  className={classes.root}
                >
                  <Tab label={`Trending Swaps`} value="1" />
                  <Tab label={`Top Buys`} value="2" />
                  <Tab label={`Top Sells`} value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab" style={{ padding: "0.7em" }}>
                  <Skeleton
                    visible={volumeByPairs.length == 0}
                    sx={{
                      "&::before": { background: "#0f172a" },
                      "&::after": { background: "#17264a" },
                    }}
                  >
                    {volumeByPairs.slice(0, 10).map((elm, ind) => (
                      <TrendingSwapItem
                        sellTokenSymbol={elm.name.split("/")[0]}
                        buyTokenSymbol={elm.name.split("/")[1]}
                        key={ind.toString()}
                        volume={elm.value}
                      />
                    ))}
                  </Skeleton>
                </div>
              </TabPanel>
              <TabPanel value="2">
                {" "}
                <div className="inner-tab" style={{ padding: "0.7em" }}>
                  <Skeleton
                    visible={volumeByPairs.length == 0}
                    sx={{
                      "&::before": { background: "#0f172a" },
                      "&::after": { background: "#17264a" },
                    }}
                  >
                    {topBuys.slice(0, 10).map((elm, ind) => (
                      <SellBuyItem
                        key={ind.toString()}
                        tokenSymbol={elm.symbol}
                        volume={elm.amount}
                        side={"buy"}
                      />
                    ))}
                  </Skeleton>
                </div>
              </TabPanel>
              <TabPanel value="3">
                {" "}
                <div className="inner-tab" style={{ padding: "0.7em" }}>
                  <Skeleton
                    visible={volumeByPairs.length == 0}
                    sx={{
                      "&::before": { background: "#0f172a" },
                      "&::after": { background: "#17264a" },
                    }}
                  >
                    {topSells.slice(0, 10).map((elm, ind) => (
                      <SellBuyItem
                        key={ind.toString()}
                        tokenSymbol={elm.symbol}
                        volume={elm.amount}
                        side={"sell"}
                      />
                    ))}
                  </Skeleton>
                </div>
              </TabPanel>
            </TabContext>
            <button className={commonClasses.viewSwapButton}>
              View Smart Swap - Powered By Jupiter
            </button>
          </div>
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
          <div className=" data-card-container">
            <TabContext value={nftTab}>
              <Box
                sx={{ borderBottom: 1, borderColor: "#132235", height: "30px" }}
              >
                <TabList
                  onChange={handleNftChange}
                  className={classes.root}
                  scrollButtons="auto"
                  TabIndicatorProps={{ style: { minWidth: "auto" } }}
                >
                  <Tab label={`Top NFT Collections`} value="1" />
                  {/* <Tab label={`New NFT Collections`} value="2" /> */}
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab">
                  <TopNFTCollection />
                </div>
              </TabPanel>
              <TabPanel value="2">
                {/* <Orderbook
                  smallScreen={false}
                  onPrice={onPrice}
                  onSize={onSize}
                /> */}
              </TabPanel>
            </TabContext>
            <button
              className={commonClasses.viewSwapButton}
              onClick={() => {
                window.open(`https://hyperspace.xyz/`, "_blank");
              }}
            >
              Open Hyperspace NFT Marketplace
            </button>
          </div>
        </Col>
        <Col flex={"436px"}>
          <div className=" data-card-container">
            <TabContext value={statsTab}>
              <Box
                sx={{ borderBottom: 1, borderColor: "#132235", height: "30px" }}
              >
                <TabList
                  onChange={handleStatChange}
                  className={classes.root}
                  scrollButtons="auto"
                  TabIndicatorProps={{ style: { minWidth: "auto" } }}
                >
                  <Tab label={`Top TVL Rankings`} value="1" />
                  <Tab label={`Yield Statistics`} value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab">
                  <TopTVLComp />
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="inner-tab">
                  <TopLendingYields />
                </div>
                {/* <TradesTable smallScreen={false} /> */}
              </TabPanel>
            </TabContext>
            <button
              className={commonClasses.viewSwapButton}
              onClick={() => {
                history.push("/analytics");
              }}
            >
              View DeFi Statistics - Powered By DefiLlama
            </button>
          </div>
        </Col>

        <Col flex={"auto"}>
          <div className="news-card-container">
            <TabContext value={newsTabs}>
              <Box
                sx={{ borderBottom: 1, borderColor: "#132235", height: "30px" }}
              >
                <TabList
                  onChange={handleNewsChange}
                  className={classes.root}
                  scrollButtons="auto"
                  TabIndicatorProps={{ style: { minWidth: "auto" } }}
                >
                  <Tab label={`Latest Market News`} value="1" />
                  <Tab label={`Watchlist`} value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab">
                  <CryptoNewsCom />
                </div>

                {/* <TradesTable smallScreen={false} /> */}
              </TabPanel>
              <TabPanel value="1">
                {/* <TradesTable smallScreen={false} /> */}
              </TabPanel>
            </TabContext>
          </div>
        </Col>
      </Row>
    </>
  );
};
const RenderMedium = ({
  onChangeOrderRef,
  onPrice,
  onSize,
  screenWidth,
}: {
  onChangeOrderRef: any;
  onPrice: any;
  onSize: any;
  screenWidth: any;
}) => {
  const { classes: commonClasses } = useCommonStyles();
  const [chartValue, setChartValue] = useState("1");
  const [oderValue, setOrderValue] = useState("1");
  const [nftTab, setNftTab] = useState("1");
  const [statsTab, setStatsTab] = useState("1");
  const [trendingSwapView, setTrendingSawpView] = useState("1");
  const [newsTabs, setNewsTab] = useState("1");
  const { volumeByPairs, topBuys, topSells } = useJupStat();
  const history = useRouter();
  const handleNewsChange = (event: any, newValue: string) => {
    setNewsTab(newValue);
  };
  const handleTrendingChange = (event: any, newValue: string) => {
    setTrendingSawpView(newValue);
  };
  const handleNftChange = (event: any, newValue: string) => {
    setNftTab(newValue);
  };
  const handleStatChange = (event: any, newValue: string) => {
    setStatsTab(newValue);
  };
  const handleOrderChange = (event: any, newValue: string) => {
    if (newValue === "2") {
      history.push("/market/8BnEgHoWFysVcuFFX7QztDmzuH8r5ZFvyP3sYwn1XTh6");
    } else {
      setOrderValue(newValue);
    }
  };
  const handleChartChange = (event: any, newValue: string) => {
    setChartValue(newValue);
  };
  const classes = useStyles();

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
            <TabContext value={oderValue}>
              <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                <TabList
                  onChange={handleOrderChange}
                  className={classes.root}
                  scrollButtons="auto"
                  TabIndicatorProps={{ style: { minWidth: "auto" } }}
                >
                  <Tab label={`Smart Swap`} value="1" />

                  <Tab label={`Openbook →`} value="2" />
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
          <div className="data-card-container">
            <TabContext value={chartValue}>
              <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                <TabList
                  onChange={handleChartChange}
                  className={classes.root}
                  scrollButtons="auto"
                  TabIndicatorProps={{ style: { minWidth: "auto" } }}
                >
                  <Tab label={`Market Pulse`} value="1" />
                  <Tab label={`Solana TVL Tracker`} value="2" />
                </TabList>
              </Box>

              <TabPanel value="1">
                <MarketPulseChart />
              </TabPanel>
              <TabPanel value="2">
                {" "}
                <AnalyticsChart />
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
          <div className=" data-card-container">
            {" "}
            <TabContext value={trendingSwapView}>
              <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                <TabList
                  onChange={handleTrendingChange}
                  aria-label="Token History Chart"
                  className={classes.root}
                >
                  <Tab label={`Trending Swaps`} value="1" />
                  <Tab label={`Top Buys`} value="2" />
                  <Tab label={`Top Sells`} value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab" style={{ padding: "0.7em" }}>
                  <Skeleton
                    visible={volumeByPairs.length == 0}
                    sx={{
                      "&::before": { background: "#0f172a" },
                      "&::after": { background: "#17264a" },
                    }}
                  >
                    {volumeByPairs.slice(0, 10).map((elm, ind) => (
                      <TrendingSwapItem
                        sellTokenSymbol={elm.name.split("/")[0]}
                        buyTokenSymbol={elm.name.split("/")[1]}
                        key={ind.toString()}
                        volume={elm.value}
                      />
                    ))}
                  </Skeleton>
                </div>
              </TabPanel>
              <TabPanel value="2">
                {" "}
                <div className="inner-tab" style={{ padding: "0.7em" }}>
                  <Skeleton
                    visible={volumeByPairs.length == 0}
                    sx={{
                      "&::before": { background: "#0f172a" },
                      "&::after": { background: "#17264a" },
                    }}
                  >
                    {topBuys.slice(0, 10).map((elm, ind) => (
                      <SellBuyItem
                        key={ind.toString()}
                        tokenSymbol={elm.symbol}
                        volume={elm.amount}
                        side={"buy"}
                      />
                    ))}
                  </Skeleton>
                </div>
              </TabPanel>
              <TabPanel value="3">
                {" "}
                <div className="inner-tab" style={{ padding: "0.7em" }}>
                  {topSells.slice(0, 10).map((elm, ind) => (
                    <SellBuyItem
                      key={ind.toString()}
                      tokenSymbol={elm.symbol}
                      volume={elm.amount}
                      side={"sell"}
                    />
                  ))}
                </div>
              </TabPanel>
            </TabContext>
            <button className={commonClasses.viewSwapButton}>
              View Smart Swap - Powered By Jupiter
            </button>
          </div>
        </Col>

        <Col flex={"auto"}>
          <div className="data-card-container">
            <TabContext value={nftTab}>
              <Box
                sx={{ borderBottom: 1, borderColor: "#132235", height: "30px" }}
              >
                <TabList
                  onChange={handleNftChange}
                  className={classes.root}
                  scrollButtons="auto"
                  TabIndicatorProps={{ style: { minWidth: "auto" } }}
                >
                  <Tab label={`Top NFT Collections`} value="1" />
                  {/* <Tab label={`New NFT Collections`} value="2" /> */}
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab">
                  <TopNFTCollection />
                </div>
              </TabPanel>
              <TabPanel value="2">
                {/* <Orderbook
                  smallScreen={false}
                  onPrice={onPrice}
                  onSize={onSize}
                /> */}
              </TabPanel>
            </TabContext>
            <button
              className={commonClasses.viewSwapButton}
              onClick={() => {
                window.open(`https://hyperspace.xyz/`, "_blank");
              }}
            >
              Open Hyperspace NFT Marketplace
            </button>
          </div>
        </Col>
        <Col flex={"auto"}>
          <div className=" data-card-container">
            <TabContext value={statsTab}>
              <Box
                sx={{ borderBottom: 1, borderColor: "#132235", height: "30px" }}
              >
                <TabList
                  onChange={handleStatChange}
                  className={classes.root}
                  scrollButtons="auto"
                  TabIndicatorProps={{ style: { minWidth: "auto" } }}
                >
                  <Tab label={`Top TVL Rankings`} value="1" />
                  <Tab label={`Yield Statistics`} value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab">
                  <TopTVLComp />
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="inner-tab">
                  <TopLendingYields />
                </div>
                {/* <TradesTable smallScreen={false} /> */}
              </TabPanel>
            </TabContext>
            <button
              className={commonClasses.viewSwapButton}
              onClick={() => {
                history.push("/analytics");
              }}
            >
              View DeFi Statistics - Powered By DefiLlama
            </button>
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
        <Col flex={"auto"}>
          <div className="news-card-container">
            <TabContext value={newsTabs}>
              <Box
                sx={{ borderBottom: 1, borderColor: "#132235", height: "30px" }}
              >
                <TabList
                  onChange={handleNewsChange}
                  className={classes.root}
                  scrollButtons="auto"
                  TabIndicatorProps={{ style: { minWidth: "auto" } }}
                >
                  <Tab label={`Latest Market News`} value="1" />
                  <Tab label={`Watchlist`} value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab">
                  <CryptoNewsCom />
                </div>

                {/* <TradesTable smallScreen={false} /> */}
              </TabPanel>
              <TabPanel value="1">
                {/* <TradesTable smallScreen={false} /> */}
              </TabPanel>
            </TabContext>
          </div>
        </Col>
      </Row>
    </>
  );
};

const RenderSmall = ({ screenWidth }: { screenWidth: any }) => {
  const { classes: commonClasses } = useCommonStyles();
  const [chartValue, setChartValue] = useState("1");
  const [oderValue, setOrderValue] = useState("1");
  const [nftTab, setNftTab] = useState("1");
  const [statsTab, setStatsTab] = useState("1");
  const [trendingSwapView, setTrendingSawpView] = useState("1");
  const [newsTabs, setNewsTab] = useState("1");
  const { volumeByPairs, topBuys, topSells } = useJupStat();
  const history = useRouter();
  const handleNewsChange = (event: any, newValue: string) => {
    setNewsTab(newValue);
  };
  const handleTrendingChange = (event: any, newValue: string) => {
    setTrendingSawpView(newValue);
  };
  const handleNftChange = (event: any, newValue: string) => {
    setNftTab(newValue);
  };
  const handleStatChange = (event: any, newValue: string) => {
    setStatsTab(newValue);
  };
  const handleOrderChange = (event: any, newValue: string) => {
    if (newValue === "2") {
      history.push("/market/8BnEgHoWFysVcuFFX7QztDmzuH8r5ZFvyP3sYwn1XTh6");
    } else {
      setOrderValue(newValue);
    }
  };
  const handleChartChange = (event: any, newValue: string) => {
    setChartValue(newValue);
  };
  const classes = useStyles();
  return (
    <Row
      style={{
        minHeight: "400px",
        flexWrap: "nowrap",
      }}
    >
      <Col flex="auto">
        <Row
          style={{ marginTop: "20px", marginLeft: "5px", marginRight: "5px" }}
        >
          <Col flex={"auto"}>
            <div className="data-card-container">
              <TabContext value={oderValue}>
                <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                  <TabList
                    onChange={handleOrderChange}
                    className={classes.root}
                    scrollButtons="auto"
                    TabIndicatorProps={{ style: { minWidth: "auto" } }}
                  >
                    <Tab label={`Smart Swap`} value="1" />

                    <Tab label={`Openbook →`} value="2" />
                  </TabList>
                </Box>

                <TabPanel value="1">
                  <JupiterForm />
                </TabPanel>
                <TabPanel value="2"></TabPanel>
                {/* <TabPanel value="3"></TabPanel> */}
              </TabContext>
            </div>
          </Col>
        </Row>
        <Row
          style={{ marginTop: "20px", marginLeft: "5px", marginRight: "5px" }}
        >
          <Col flex={"auto"}>
            <div className="data-card-container">
              <TabContext value={chartValue}>
                <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                  <TabList
                    onChange={handleChartChange}
                    className={classes.root}
                    scrollButtons="auto"
                    TabIndicatorProps={{ style: { minWidth: "auto" } }}
                  >
                    <Tab label={`Market Pulse`} value="1" />
                    <Tab label={`Solana TVL Tracker`} value="2" />
                  </TabList>
                </Box>

                <TabPanel value="1">
                  <MarketPulseChart />
                </TabPanel>
                <TabPanel value="2">
                  {" "}
                  <AnalyticsChart />
                </TabPanel>
              </TabContext>
            </div>
          </Col>
        </Row>

        <Row
          style={{ marginTop: "20px", marginLeft: "5px", marginRight: "5px" }}
        >
          <Col flex={"auto"}>
            <div className="data-card-container">
              {" "}
              <TabContext value={trendingSwapView}>
                <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                  <TabList
                    onChange={handleTrendingChange}
                    aria-label="Token History Chart"
                    className={classes.root}
                  >
                    <Tab label={`Trending Swaps`} value="1" />
                    <Tab label={`Top Buys`} value="2" />
                    <Tab label={`Top Sells`} value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className="inner-tab" style={{ padding: "0.7em" }}>
                    {volumeByPairs.slice(0, 10).map((elm, ind) => (
                      <TrendingSwapItem
                        sellTokenSymbol={elm.name.split("/")[0]}
                        buyTokenSymbol={elm.name.split("/")[1]}
                        key={ind.toString()}
                        volume={elm.value}
                      />
                    ))}
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  {" "}
                  <div className="inner-tab" style={{ padding: "0.7em" }}>
                    {topBuys.slice(0, 10).map((elm, ind) => (
                      <SellBuyItem
                        key={ind.toString()}
                        tokenSymbol={elm.symbol}
                        volume={elm.amount}
                        side={"buy"}
                      />
                    ))}
                  </div>
                </TabPanel>
                <TabPanel value="3">
                  {" "}
                  <div className="inner-tab" style={{ padding: "0.7em" }}>
                    {topSells.slice(0, 10).map((elm, ind) => (
                      <SellBuyItem
                        key={ind.toString()}
                        tokenSymbol={elm.symbol}
                        volume={elm.amount}
                        side={"sell"}
                      />
                    ))}
                  </div>
                </TabPanel>
              </TabContext>
              <button className={commonClasses.viewSwapButton}>
                View Smart Swap - Powered By Jupiter
              </button>
            </div>
          </Col>
        </Row>
        <Row
          style={{ marginTop: "20px", marginLeft: "5px", marginRight: "5px" }}
        >
          <Col flex={"auto"}>
            <div className="data-card-container">
              <TabContext value={nftTab}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "#132235",
                    height: "30px",
                  }}
                >
                  <TabList
                    onChange={handleNftChange}
                    className={classes.root}
                    scrollButtons="auto"
                    TabIndicatorProps={{ style: { minWidth: "auto" } }}
                  >
                    <Tab label={`Top NFT Collections`} value="1" />
                    {/* <Tab label={`New NFT Collections`} value="2" /> */}
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className="inner-tab">
                    <TopNFTCollection />
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  {/* <Orderbook
                  smallScreen={false}
                  onPrice={onPrice}
                  onSize={onSize}
                /> */}
                </TabPanel>
              </TabContext>
              <button
                className={commonClasses.viewSwapButton}
                onClick={() => {
                  window.open(`https://hyperspace.xyz/`, "_blank");
                }}
              >
                Open Hyperspace NFT Marketplace
              </button>
            </div>
          </Col>
        </Row>
        <Row
          style={{ marginTop: "20px", marginLeft: "5px", marginRight: "5px" }}
        >
          <Col flex={"auto"}>
            <div className="data-card-container">
              <TabContext value={statsTab}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "#132235",
                    height: "30px",
                  }}
                >
                  <TabList
                    onChange={handleStatChange}
                    className={classes.root}
                    scrollButtons="auto"
                    TabIndicatorProps={{ style: { minWidth: "auto" } }}
                  >
                    <Tab label={`Top TVL Rankings`} value="1" />
                    <Tab label={`Yield Statistics`} value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className="inner-tab">
                    <TopTVLComp />
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div className="inner-tab">
                    <TopLendingYields />
                  </div>
                  {/* <TradesTable smallScreen={false} /> */}
                </TabPanel>
              </TabContext>
              <button
                className={commonClasses.viewSwapButton}
                onClick={() => {
                  history.push("/analytics");
                }}
              >
                View DeFi Statistics - Powered By DefiLlama
              </button>
            </div>
          </Col>
        </Row>
        <Row
          style={{ marginTop: "20px", marginLeft: "5px", marginRight: "5px" }}
        >
          <Col flex={"auto"}>
            <div className="news-card-container">
              <TabContext value={newsTabs}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "#132235",
                    height: "30px",
                  }}
                >
                  <TabList
                    onChange={handleNewsChange}
                    className={classes.root}
                    scrollButtons="auto"
                    TabIndicatorProps={{ style: { minWidth: "auto" } }}
                  >
                    <Tab label={`Latest Market News`} value="1" />
                    <Tab label={`Watchlist`} value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className="inner-tab">
                    <CryptoNewsCom />
                  </div>

                  {/* <TradesTable smallScreen={false} /> */}
                </TabPanel>
                <TabPanel value="1">
                  {/* <TradesTable smallScreen={false} /> */}
                </TabPanel>
              </TabContext>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
