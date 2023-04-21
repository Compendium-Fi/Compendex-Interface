import { Box, makeStyles, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import pricingIcon from "../../assets/img/pricing.png";
import AnalyticsChart from "../../components/AnalyticsChart";
import CustomTicker from "../../components/CustomTicker";
import OpenBookMarkets from "../../components/OpenBookMarkets";
import PoolYields from "../../components/PoolYields";
import StableCoins from "../../components/StableCoins";
import TickerItem from "../../components/TickerItem";
import TopLendingYields from "../../components/TopLendingYields";
import TopTVLComp from "../../components/TopTVLComp";
import FloatingNavBar from "../../components/layout/FloatingNavbar";
import { getTokenTickers } from "../../utils/tokenApi";
//import PoolItem from "../../components/PoolItem";
// import "../home.css";

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
export default function AnalyticsMain() {
  return <TradePageInner />;
}

function TradePageInner() {
  const [tokenTickers, setTokenTickers] = useState([]);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const initTickers = async () => {
    let tickers = await getTokenTickers();
    setTokenTickers(tickers);
  };
  useEffect(() => {
    initTickers();
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const width = dimensions?.width;

  const component = (() => {
    if (width < 1000) {
      return <RenderSmall screenWidth={width} />;
    } else if (width < 1420) {
      return <RenderMedium screenWidth={width} />;
    } else {
      return <RenderNormal screenWidth={width} />;
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
                      <div className="parent-container">
                        <CustomTicker>
                          {tokenTickers.map((elm: any) => (
                            <TickerItem elm={elm} />
                          ))}
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
                    <Col flex={"200px"}>
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
                    <Col span={24}>
                      <div className="parent-container">
                        <CustomTicker>
                          {tokenTickers.map((elm: any) => (
                            <TickerItem elm={elm} />
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

const RenderNormal = ({ screenWidth }) => {
  const [chartValue, setChartValue] = useState("1");
  const [oderValue, setOrderValue] = useState("1");
  const [nftTab, setNftTab] = useState("1");
  const [statsTab, setStatsTab] = useState("1");
  const [trendingSwapView, setTrendingSawpView] = useState("1");
  const [newsTabs, setNewsTab] = useState("1");
  const handleNewsChange = (event, newValue) => {
    setNewsTab(newValue);
  };
  const handleTrendingChange = (event, newValue) => {
    setTrendingSawpView(newValue);
  };
  const handleNftChange = (event, newValue) => {
    setNftTab(newValue);
  };
  const handleStatChange = (event, newValue) => {
    setStatsTab(newValue);
  };
  const handleOrderChange = (event, newValue) => {
    setOrderValue(newValue);
  };
  const handleChartChange = (event, newValue) => {
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
          gap: "20px",
        }}
      >
        <Col flex={"360px"}>
          <div className="data-card-container">
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
                  <Tab label={`Top DEX Volumes`} value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab">
                  <TopTVLComp />
                </div>
              </TabPanel>
              <TabPanel value="1">
                {/* <TradesTable smallScreen={false} /> */}
              </TabPanel>
            </TabContext>
            <span className="card-label">
              TVL = Total Volume Locked In Protocol
            </span>
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
                  <Tab label={`Solana TVL Tracker`} value="1" />
                </TabList>
              </Box>

              <TabPanel value="1">
                <AnalyticsChart />
              </TabPanel>
            </TabContext>
          </div>
        </Col>

        <Col flex={"360px"}>
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
                  <Tab label={`Solana Stablecoins`} value="1" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab">
                  <StableCoins />
                </div>
              </TabPanel>
              <TabPanel value="2"></TabPanel>
            </TabContext>
            <span className="card-label">
              Stablecoins ranked by total market capitalization
            </span>
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
                  <Tab label={`Liquidity Pool Yields`} value="1" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab">
                  <PoolYields />
                </div>
              </TabPanel>
              <TabPanel value="2"></TabPanel>
            </TabContext>
            <span className="card-label">
              Displaying yields from non-lending sources{" "}
            </span>
          </div>
        </Col>
        <Col flex={"436px"}>
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
                  <Tab label={`Top Lending Yields`} value="1" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab">
                  <TopLendingYields />
                </div>
              </TabPanel>
              <TabPanel value="2"></TabPanel>
            </TabContext>
            <span className="card-label">
              Displaying yields from non-lending sources{" "}
            </span>
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
                  <Tab label={`Top Openbook Markets`} value="1" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab">
                  <OpenBookMarkets />

                  {/* <div className="news-item">
                    <div className="left-item">
                      <div className="trending-swap-icons">
                        <img src={solIcon} alt="" />
                        <img src={solIcon} alt="" />
                      </div>
                      <div className="news-info">
                        <span id="news-title">SOL/USDC</span>
                        <span id="news-description">
                          $5,781,023 (24H Volume)
                        </span>
                      </div>
                    </div>
                    <button className="trade-btn">Trade</button>
                  </div>

                  <div className="news-item">
                    <div className="left-item">
                      <div className="trending-swap-icons">
                        <img src={solIcon} alt="" />
                        <img src={solIcon} alt="" />
                      </div>
                      <div className="news-info">
                        <span id="news-title">SOL/USDC</span>
                        <span id="news-description">
                          $5,781,023 (24H Volume)
                        </span>
                      </div>
                    </div>
                    <button className="trade-btn">Trade</button>
                  </div>

                  <div className="news-item">
                    <div className="left-item">
                      <div className="trending-swap-icons">
                        <img src={solIcon} alt="" />
                        <img src={solIcon} alt="" />
                      </div>
                      <div className="news-info">
                        <span id="news-title">SOL/USDC</span>
                        <span id="news-description">
                          $5,781,023 (24H Volume)
                        </span>
                      </div>
                    </div>
                    <button className="trade-btn">Trade</button>
                  </div>

                  <div className="news-item">
                    <div className="left-item">
                      <div className="trending-swap-icons">
                        <img src={solIcon} alt="" />
                        <img src={solIcon} alt="" />
                      </div>
                      <div className="news-info">
                        <span id="news-title">SOL/USDC</span>
                        <span id="news-description">
                          $5,781,023 (24H Volume)
                        </span>
                      </div>
                    </div>
                    <button className="trade-btn">Trade</button>
                  </div>

                  <div className="news-item">
                    <div className="left-item">
                      <div className="trending-swap-icons">
                        <img src={solIcon} alt="" />
                        <img src={solIcon} alt="" />
                      </div>
                      <div className="news-info">
                        <span id="news-title">SOL/USDC</span>
                        <span id="news-description">
                          $5,781,023 (24H Volume)
                        </span>
                      </div>
                    </div>
                    <button className="trade-btn">Trade</button>
                  </div>

                  <div className="news-item">
                    <div className="left-item">
                      <div className="trending-swap-icons">
                        <img src={solIcon} alt="" />
                        <img src={solIcon} alt="" />
                      </div>
                      <div className="news-info">
                        <span id="news-title">SOL/USDC</span>
                        <span id="news-description">
                          $5,781,023 (24H Volume)
                        </span>
                      </div>
                    </div>
                    <button className="trade-btn">Trade</button>
                  </div>

                  <div className="news-item">
                    <div className="left-item">
                      <div className="trending-swap-icons">
                        <img src={solIcon} alt="" />
                        <img src={solIcon} alt="" />
                      </div>
                      <div className="news-info">
                        <span id="news-title">SOL/USDC</span>
                        <span id="news-description">
                          $5,781,023 (24H Volume)
                        </span>
                      </div>
                    </div>
                    <button className="trade-btn">Trade</button>
                  </div> */}
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
const RenderMedium = ({ screenWidth }) => {
  const [chartValue, setChartValue] = useState("1");
  const [oderValue, setOrderValue] = useState("1");
  const [nftTab, setNftTab] = useState("1");
  const [statsTab, setStatsTab] = useState("1");
  const [trendingSwapView, setTrendingSawpView] = useState("1");
  const [newsTabs, setNewsTab] = useState("1");
  const handleNewsChange = (event, newValue) => {
    setNewsTab(newValue);
  };
  const handleTrendingChange = (event, newValue) => {
    setTrendingSawpView(newValue);
  };
  const handleNftChange = (event, newValue) => {
    setNftTab(newValue);
  };
  const handleStatChange = (event, newValue) => {
    setStatsTab(newValue);
  };
  const handleOrderChange = (event, newValue) => {
    setOrderValue(newValue);
  };
  const handleChartChange = (event, newValue) => {
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
          <div className="data-card-container">
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
                  <Tab label={`Top DEX Volumes`} value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab">
                  <TopTVLComp />
                </div>
              </TabPanel>
              <TabPanel value="1"></TabPanel>
            </TabContext>
            <span className="card-label">
              TVL = Total Volume Locked In Protocol
            </span>
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
                  <Tab label={`Solana TVL Tracker`} value="1" />
                </TabList>
              </Box>

              <TabPanel value="1">
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
                  <Tab label={`Solana Stablecoins`} value="1" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab">
                  <StableCoins />
                </div>
              </TabPanel>
              <TabPanel value="2"></TabPanel>
            </TabContext>
            <span className="card-label">
              Stablecoins ranked by total market capitalization
            </span>
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
                  <Tab label={`Liquidity Pool Yields`} value="1" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab">
                  <PoolYields />
                </div>
              </TabPanel>
              <TabPanel value="2"></TabPanel>
            </TabContext>
            <span className="card-label">
              Displaying yields from non-lending sources{" "}
            </span>
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
                  <Tab label={`Top Lending Yields`} value="1" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab">
                  <TopLendingYields />
                </div>
              </TabPanel>
              <TabPanel value="2"></TabPanel>
            </TabContext>
            <span className="card-label">
              Displaying yields from non-lending sources{" "}
            </span>
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
                  <Tab label={`Top Openbook Markets`} value="1" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="inner-tab">
                  <OpenBookMarkets />
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

const RenderSmall = ({ screenWidth }) => {
  const [chartValue, setChartValue] = useState("1");
  const [oderValue, setOrderValue] = useState("1");
  const [nftTab, setNftTab] = useState("1");
  const [statsTab, setStatsTab] = useState("1");
  const [trendingSwapView, setTrendingSawpView] = useState("1");
  const [newsTabs, setNewsTab] = useState("1");
  const handleNewsChange = (event, newValue) => {
    setNewsTab(newValue);
  };
  const handleTrendingChange = (event, newValue) => {
    setTrendingSawpView(newValue);
  };
  const handleNftChange = (event, newValue) => {
    setNftTab(newValue);
  };
  const handleStatChange = (event, newValue) => {
    setStatsTab(newValue);
  };
  const handleOrderChange = (event, newValue) => {
    setOrderValue(newValue);
  };
  const handleChartChange = (event, newValue) => {
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
                    <Tab label={`Top DEX Volumes`} value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className="inner-tab">
                    <TopTVLComp />
                  </div>
                </TabPanel>
                <TabPanel value="1"></TabPanel>
              </TabContext>
              <span className="card-label">
                TVL = Total Volume Locked In Protocol
              </span>
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
                    <Tab label={`Solana TVL Tracker`} value="1" />
                  </TabList>
                </Box>

                <TabPanel value="1">
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
                    <Tab label={`Solana Stablecoins`} value="1" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className="inner-tab">
                    <StableCoins />
                  </div>
                </TabPanel>
                <TabPanel value="2"></TabPanel>
              </TabContext>
              <span className="card-label">
                Stablecoins ranked by total market capitalization
              </span>
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
                    <Tab label={`Liquidity Pool Yields`} value="1" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className="inner-tab">
                    <PoolYields />
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
              <span className="card-label">
                Displaying yields from non-lending sources{" "}
              </span>
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
                    <Tab label={`Top Lending Yields`} value="1" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className="inner-tab">
                    <TopLendingYields />
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
              <span className="card-label">
                Displaying yields from non-lending sources{" "}
              </span>
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
                    <Tab label={`Top Openbook Markets`} value="1" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className="inner-tab">
                    <OpenBookMarkets />
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
