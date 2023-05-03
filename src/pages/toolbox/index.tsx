import { Box, makeStyles, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Col, Row } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";

import styled from "styled-components";


import { useViewport } from "@/context/viewPort";
import axios from "axios";
import { useRouter } from "next/router";
import FloatingNavBar from "../../components/layout/FloatingNavbar";
import ToolBoxItem from "../../components/ToolBoxItem";
import { getTokenTickers } from "../../utils/tokenApi";
const instance = axios.create({
    maxRedirects: 10, // Set the maximum number of redirects to follow
    validateStatus: function (status) {
        return status >= 200 && status < 300; // Only resolve if the status code is in the 2xx range
    }
});
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
            minWith: "auto",
            minWidth: "125px"
        },
        "& .MuiTabs-indicator": {
            backgroundColor: "transparent"
        },
        "& .MuiTabs-flexContainer": {
            borderBottom: "1px solid #132235"
        },
        "& .iuIFQc": {
            minHeight: "10px !important"
        }
    }
});
export default function ToolPage() {
    return <TradePageInner />;
}

function TradePageInner() {
    const [handleDeprecated, setHandleDeprecated] = useState(false);
    const [tokenTickers, setTokenTickers] = useState([]);


    const initTickers = async () => {
        let tickers = await getTokenTickers();
        setTokenTickers(tickers);
    };
    const changeOrderRef = useRef();

    useEffect(() => {
        initTickers();

    }, []);

    const { width } = useViewport();

    const componentProps = {
        onChangeOrderRef: (ref:any) => (changeOrderRef.current = ref),
        onPrice: useCallback(
            //@ts-ignore
            (price) => changeOrderRef.current && changeOrderRef.current({ price }),
            []
        ),
        onSize: useCallback(
            //@ts-ignore
            (size) => changeOrderRef.current && changeOrderRef.current({ size }),
            []
        )
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
                        alignItems: "center"
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
                                            backgroundColor: "#080f19"
                                        }}
                                    >
                                        <Col
                                            flex={"auto"}
                                            style={{
                                                display: "flex",
                                                justifyContent: "flex-start",
                                                alignItems: "center",
                                                marginLeft: "20px",
                                                marginTop: "10px"
                                            }}
                                        >
                                            <p
                                                style={{
                                                    whiteSpace: "pre-wrap",
                                                    overflow: "visible",
                                                    fontFamily: "Poppins",
                                                    fontSize: "12px",
                                                    fontWeight: 400,
                                                    color: "rgb(181, 181, 181)",
                                                    textAlign: "center",
                                                    lineHeight: 1
                                                }}
                                            >
                                                Notice: Compendex holds no official relationship with
                                                the following entities listed on our tooling page.
                                                Please do your own research and utilize any tools at
                                                your own risk.
                                            </p>
                                        </Col>
                                    </Row>
                                </FloatingNavBar>
                            ) : (
                                <FloatingNavBar>
                                    <Row
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            flexWrap: "wrap",
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
                                            backgroundColor: "#080f19"
                                        }}
                                    >
                                        <Col
                                            flex={"auto"}
                                            style={{
                                                display: "flex",
                                                justifyContent: "flex-start",
                                                alignItems: "center",
                                                marginLeft: "20px",
                                                marginTop: "10px"
                                            }}
                                        >
                                            <p
                                                style={{
                                                    whiteSpace: "pre-wrap",
                                                    overflow: "visible",
                                                    fontFamily: "Poppins",
                                                    fontSize: "12px",
                                                    fontWeight: 400,
                                                    color: "rgb(181, 181, 181)",
                                                    textAlign: "center",
                                                    lineHeight: 1
                                                }}
                                            >
                                                Notice: Compendex holds no official relationship with
                                                the following entities listed on our tooling page.
                                                Please do your own research and utilize any tools at
                                                your own risk.
                                            </p>
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

const DeprecatedMarketsPage = ({ switchToLiveMarkets }) => {
    return (
        <>
            <Row>
                <Col flex="auto"></Col>
            </Row>
        </>
    );
};

const RenderNormal = ({ onChangeOrderRef, onPrice, onSize, screenWidth }) => {
    const [oderValue, setOrderValue] = useState("1");
    const [nftTab, setNftTab] = useState("1");
    const [statsTab, setStatsTab] = useState("1");
    const [solanaTools, setSolanaTools] = useState<any>(null);

    const history = useRouter();

    const handleNftChange = (event, newValue) => {
        setNftTab(newValue);
    };
    const handleStatChange = (event, newValue) => {
        setStatsTab(newValue);
    };
    const handleOrderChange = (event, newValue) => {
        if (newValue === "2") {
           history.push("/market/8BnEgHoWFysVcuFFX7QztDmzuH8r5ZFvyP3sYwn1XTh6");
        } else {
            setOrderValue(newValue);
        }
    };
    const fetchTools = useCallback(async () => {
        try {
            let { data } = await instance.get(
                `https://tradingview.compendex.xyz/registry/`
            );

            if (data) {
                setSolanaTools(data.output.chains.solana);
            }
        } catch (error) { }
    }, []);

    useEffect(() => {
        fetchTools();
    }, [fetchTools]);
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
                    gap: "20px"
                }}
            >
                <Col flex={"auto"}>
                    <div className="tools-card-container">
                        <TabContext value={oderValue}>
                            <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                                <TabList
                                    onChange={handleOrderChange}
                                    className={classes.root}
                                    scrollButtons="auto"
                                    TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                >
                                    <Tab label={`Liquid Staking`} value="1" />
                                </TabList>
                            </Box>

                            <TabPanel value="1">
                                {" "}
                                <div className="inner-tab">
                                    {solanaTools &&
                                        solanaTools.liqudityStaking &&
                                        solanaTools.liqudityStaking.map((elm, ind) => {
                                            return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                        })}
                                </div>
                            </TabPanel>
                            <TabPanel value="2"></TabPanel>
                            {/* <TabPanel value="3"></TabPanel> */}
                        </TabContext>
                    </div>
                </Col>
                <Col flex={"auto"}>
                    <div className="tools-card-container">
                        <TabContext value={oderValue}>
                            <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                                <TabList
                                    onChange={handleOrderChange}
                                    className={classes.root}
                                    scrollButtons="auto"
                                    TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                >
                                    <Tab label={`Lending`} value="1" />
                                </TabList>
                            </Box>

                            <TabPanel value="1">
                                <div className="inner-tab">
                                    {solanaTools &&
                                        solanaTools.lending &&
                                        solanaTools.lending.map((elm, ind) => {
                                            return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                        })}
                                </div>
                            </TabPanel>
                            <TabPanel value="2"></TabPanel>
                        </TabContext>
                    </div>
                </Col>
                <Col flex={"auto"}>
                    <div className="tools-card-container">
                        <TabContext value={oderValue}>
                            <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                                <TabList
                                    onChange={handleOrderChange}
                                    className={classes.root}
                                    scrollButtons="auto"
                                    TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                >
                                    <Tab label={`Liquidity Pool`} value="1" />
                                </TabList>
                            </Box>

                            <TabPanel value="1">
                                <div className="inner-tab">
                                    {solanaTools &&
                                        solanaTools.liquidityPool &&
                                        solanaTools.liquidityPool.map((elm, ind) => {
                                            return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                        })}
                                </div>
                            </TabPanel>
                            <TabPanel value="2"></TabPanel>
                            {/* <TabPanel value="3"></TabPanel> */}
                        </TabContext>
                    </div>
                </Col>
                <Col flex={"auto"}>
                    <div className="tools-card-container">
                        <TabContext value={oderValue}>
                            <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                                <TabList
                                    onChange={handleOrderChange}
                                    className={classes.root}
                                    scrollButtons="auto"
                                    TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                >
                                    <Tab label={`NFT Marketplace`} value="1" />
                                </TabList>
                            </Box>

                            <TabPanel value="1">
                                <div className="inner-tab">
                                    {solanaTools &&
                                        solanaTools.nftMarketplace &&
                                        solanaTools.nftMarketplace.map((elm, ind) => {
                                            return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                        })}
                                </div>
                            </TabPanel>
                            <TabPanel value="2"></TabPanel>
                            {/* <TabPanel value="3"></TabPanel> */}
                        </TabContext>
                    </div>
                </Col>
                <Col flex={"auto"}>
                    <div className="tools-card-container">
                        <TabContext value={oderValue}>
                            <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                                <TabList
                                    onChange={handleOrderChange}
                                    className={classes.root}
                                    scrollButtons="auto"
                                    TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                >
                                    <Tab label={`Data Explorer`} value="1" />
                                </TabList>
                            </Box>

                            <TabPanel value="1">
                                {" "}
                                <div className="inner-tab">
                                    {solanaTools &&
                                        solanaTools.dataExplorer &&
                                        solanaTools.dataExplorer.map((elm, ind) => {
                                            return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                        })}
                                </div>
                            </TabPanel>
                            <TabPanel value="2"></TabPanel>
                            {/* <TabPanel value="3"></TabPanel> */}
                        </TabContext>
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
                    gap: "20px"
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
                                    <Tab label={`DAO Tooling`} value="1" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <div className="inner-tab">
                                    {solanaTools &&
                                        solanaTools.daoTooling &&
                                        solanaTools.daoTooling.map((elm, ind) => {
                                            return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                        })}
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
                    </div>
                </Col>
                <Col flex={"auto"}>
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
                                    <Tab label={`Infastructure`} value="1" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                {" "}
                                <div className="inner-tab">
                                    {solanaTools &&
                                        solanaTools.infastructure &&
                                        solanaTools.infastructure.map((elm, ind) => {
                                            return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                        })}
                                </div>
                            </TabPanel>
                            <TabPanel value="2"></TabPanel>
                        </TabContext>
                    </div>
                </Col>

                <Col flex={"auto"}>
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
                                    <Tab label={`Miscellaneous `} value="1" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                {" "}
                                <div className="inner-tab">
                                    {solanaTools &&
                                        solanaTools.miscellaneous &&
                                        solanaTools.miscellaneous.map((elm, ind) => {
                                            return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                        })}
                                </div>
                            </TabPanel>
                            <TabPanel value="2"></TabPanel>
                        </TabContext>
                    </div>
                </Col>
            </Row>
        </>
    );
};
const RenderMedium = ({ onChangeOrderRef, onPrice, onSize, screenWidth }) => {
    const [chartValue, setChartValue] = useState("1");

    const [trendingSwapView, setTrendingSawpView] = useState("1");
    const [newsTabs, setNewsTab] = useState("1");


    const handleNewsChange = (event, newValue) => {
        setNewsTab(newValue);
    };
    const handleTrendingChange = (event, newValue) => {
        setTrendingSawpView(newValue);
    };

    const handleChartChange = (event, newValue) => {
        setChartValue(newValue);
    };
    const [oderValue, setOrderValue] = useState("1");
    const [nftTab, setNftTab] = useState("1");
    const [statsTab, setStatsTab] = useState("1");
    const [solanaTools, setSolanaTools] = useState<any>(null);

    const history = useRouter();

    const handleNftChange = (event, newValue) => {
        setNftTab(newValue);
    };
    const handleStatChange = (event, newValue) => {
        setStatsTab(newValue);
    };
    const handleOrderChange = (event, newValue) => {
        if (newValue === "2") {
           history.push("/market/8BnEgHoWFysVcuFFX7QztDmzuH8r5ZFvyP3sYwn1XTh6");
        } else {
            setOrderValue(newValue);
        }
    };
    const fetchTools = useCallback(async () => {
        try {
            let { data } = await instance.get(
                `https://tradingview.compendex.xyz/registry/`
            );

            if (data) {
                setSolanaTools(data.output.chains.solana);
            }
        } catch (error) { }
    }, []);

    useEffect(() => {
        fetchTools();
    }, [fetchTools]);
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
                    gap: "20px"
                }}
            >
                <Col flex={"auto"}>
                    <div className="tools-card-container">
                        <TabContext value={oderValue}>
                            <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                                <TabList
                                    onChange={handleOrderChange}
                                    className={classes.root}
                                    scrollButtons="auto"
                                    TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                >
                                    <Tab label={`Liquid Staking`} value="1" />
                                </TabList>
                            </Box>

                            <TabPanel value="1">
                                {" "}
                                <div className="inner-tab">
                                    {solanaTools &&
                                        solanaTools.liqudityStaking &&
                                        solanaTools.liqudityStaking.map((elm, ind) => {
                                            return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                        })}
                                </div>
                            </TabPanel>
                            <TabPanel value="2"></TabPanel>
                            {/* <TabPanel value="3"></TabPanel> */}
                        </TabContext>
                    </div>
                </Col>
                <Col flex={"auto"}>
                    <div className="tools-card-container">
                        <TabContext value={oderValue}>
                            <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                                <TabList
                                    onChange={handleOrderChange}
                                    className={classes.root}
                                    scrollButtons="auto"
                                    TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                >
                                    <Tab label={`Lending`} value="1" />
                                </TabList>
                            </Box>

                            <TabPanel value="1">
                                {" "}
                                <div className="inner-tab">
                                    {solanaTools &&
                                        solanaTools.lending &&
                                        solanaTools.lending.map((elm, ind) => {
                                            return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                        })}
                                </div>
                            </TabPanel>
                            <TabPanel value="2"></TabPanel>
                            {/* <TabPanel value="3"></TabPanel> */}
                        </TabContext>
                    </div>
                </Col>
                <Col flex={"auto"}>
                    <div className="tools-card-container">
                        <TabContext value={oderValue}>
                            <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                                <TabList
                                    onChange={handleOrderChange}
                                    className={classes.root}
                                    scrollButtons="auto"
                                    TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                >
                                    <Tab label={`Liquidity Pool`} value="1" />
                                </TabList>
                            </Box>

                            <TabPanel value="1">
                                <div className="inner-tab">
                                    {solanaTools &&
                                        solanaTools.liquidityPool &&
                                        solanaTools.liquidityPool.map((elm, ind) => {
                                            return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                        })}
                                </div>
                            </TabPanel>
                            <TabPanel value="2"></TabPanel>
                            {/* <TabPanel value="3"></TabPanel> */}
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
                    gap: "20px"
                }}
            >
                <Col flex={"auto"}>
                    <div className="tools-card-container">
                        <TabContext value={oderValue}>
                            <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                                <TabList
                                    onChange={handleOrderChange}
                                    className={classes.root}
                                    scrollButtons="auto"
                                    TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                >
                                    <Tab label={`NFT Marketplace`} value="1" />
                                </TabList>
                            </Box>

                            <TabPanel value="1">
                                <div className="inner-tab">
                                    {solanaTools &&
                                        solanaTools.nftMarketplace &&
                                        solanaTools.nftMarketplace.map((elm, ind) => {
                                            return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                        })}
                                </div>
                            </TabPanel>
                            <TabPanel value="2"></TabPanel>
                            {/* <TabPanel value="3"></TabPanel> */}
                        </TabContext>
                    </div>
                </Col>
                <Col flex={"auto"}>
                    <div className="tools-card-container">
                        <TabContext value={oderValue}>
                            <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                                <TabList
                                    onChange={handleOrderChange}
                                    className={classes.root}
                                    scrollButtons="auto"
                                    TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                >
                                    <Tab label={`Data Explorer`} value="1" />
                                </TabList>
                            </Box>

                            <TabPanel value="1">
                                {" "}
                                <div className="inner-tab">
                                    {solanaTools &&
                                        solanaTools.dataExplorer &&
                                        solanaTools.dataExplorer.map((elm, ind) => {
                                            return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                        })}
                                </div>
                            </TabPanel>
                            <TabPanel value="2"></TabPanel>
                            {/* <TabPanel value="3"></TabPanel> */}
                        </TabContext>
                    </div>
                </Col>
                <Col flex={"auto"}>
                    <div className="tools-card-container">
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
                                    <Tab label={`DAO Tooling`} value="1" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <div className="inner-tab">
                                    {solanaTools &&
                                        solanaTools.daoTooling &&
                                        solanaTools.daoTooling.map((elm, ind) => {
                                            return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                        })}
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
                    gap: "20px"
                }}
            >
                <Col flex={"auto"}>
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
                                    <Tab label={`Infastructure`} value="1" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                {" "}
                                <div className="inner-tab">
                                    {solanaTools &&
                                        solanaTools.infastructure &&
                                        solanaTools.infastructure.map((elm, ind) => {
                                            return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                        })}
                                </div>
                            </TabPanel>
                            <TabPanel value="2"></TabPanel>
                        </TabContext>
                    </div>
                </Col>

                <Col flex={"auto"}>
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
                                    <Tab label={`Miscellaneous `} value="1" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                {" "}
                                <div className="inner-tab">
                                    {solanaTools &&
                                        solanaTools.miscellaneous &&
                                        solanaTools.miscellaneous.map((elm, ind) => {
                                            return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                        })}
                                </div>
                            </TabPanel>
                            <TabPanel value="2"></TabPanel>
                        </TabContext>
                    </div>
                </Col>
            </Row>
        </>
    );
};

const RenderSmall = ({ screenWidth }) => {
    const [oderValue, setOrderValue] = useState("1");
    const [nftTab, setNftTab] = useState("1");
    const [statsTab, setStatsTab] = useState("1");
    const [solanaTools, setSolanaTools] = useState<any>(null);

    const history = useRouter();

    const handleNftChange = (event, newValue) => {
        setNftTab(newValue);
    };
    const handleStatChange = (event, newValue) => {
        setStatsTab(newValue);
    };
    const handleOrderChange = (event, newValue) => {
        if (newValue === "2") {
           history.push("/market/8BnEgHoWFysVcuFFX7QztDmzuH8r5ZFvyP3sYwn1XTh6");
        } else {
            setOrderValue(newValue);
        }
    };
    const fetchTools = useCallback(async () => {
        try {
            let { data } = await instance.get(
                `https://tradingview.compendex.xyz/registry/`
            );

            if (data) {
                setSolanaTools(data.output.chains.solana);
            }
        } catch (error) { }
    }, []);

    useEffect(() => {
        fetchTools();
    }, [fetchTools]);
    const classes = useStyles();
    return (
        <Row
            style={{
                minHeight: "400px",
                flexWrap: "nowrap"
            }}
        >
            <Col flex="auto">
                <Row
                    style={{ marginTop: "20px", marginLeft: "5px", marginRight: "5px" }}
                >
                    <Col flex={"auto"}>
                        <div className="tools-card-container">
                            <TabContext value={oderValue}>
                                <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                                    <TabList
                                        onChange={handleOrderChange}
                                        className={classes.root}
                                        scrollButtons="auto"
                                        TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                    >
                                        <Tab label={`Liquid Staking`} value="1" />
                                    </TabList>
                                </Box>

                                <TabPanel value="1">
                                    {" "}
                                    <div className="inner-tab">
                                        {solanaTools &&
                                            solanaTools.liqudityStaking &&
                                            solanaTools.liqudityStaking.map((elm, ind) => {
                                                return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                            })}
                                    </div>
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
                        <div className="tools-card-container">
                            <TabContext value={oderValue}>
                                <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                                    <TabList
                                        onChange={handleOrderChange}
                                        className={classes.root}
                                        scrollButtons="auto"
                                        TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                    >
                                        <Tab label={`Lending`} value="1" />
                                    </TabList>
                                </Box>

                                <TabPanel value="1">
                                    <div className="inner-tab">
                                        {solanaTools &&
                                            solanaTools.lending &&
                                            solanaTools.lending.map((elm, ind) => {
                                                return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                            })}
                                    </div>
                                </TabPanel>
                                <TabPanel value="2"></TabPanel>
                            </TabContext>
                        </div>
                    </Col>
                </Row>

                <Row
                    style={{ marginTop: "20px", marginLeft: "5px", marginRight: "5px" }}
                >
                    <Col flex={"auto"}>
                        <div className="tools-card-container">
                            <TabContext value={oderValue}>
                                <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                                    <TabList
                                        onChange={handleOrderChange}
                                        className={classes.root}
                                        scrollButtons="auto"
                                        TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                    >
                                        <Tab label={`Liquidity Pool`} value="1" />
                                    </TabList>
                                </Box>

                                <TabPanel value="1">
                                    <div className="inner-tab">
                                        {solanaTools &&
                                            solanaTools.liquidityPool &&
                                            solanaTools.liquidityPool.map((elm, ind) => {
                                                return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                            })}
                                    </div>
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
                        <div className="tools-card-container">
                            <TabContext value={oderValue}>
                                <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                                    <TabList
                                        onChange={handleOrderChange}
                                        className={classes.root}
                                        scrollButtons="auto"
                                        TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                    >
                                        <Tab label={`NFT Marketplace`} value="1" />
                                    </TabList>
                                </Box>

                                <TabPanel value="1">
                                    <div className="inner-tab">
                                        {solanaTools &&
                                            solanaTools.nftMarketplace &&
                                            solanaTools.nftMarketplace.map((elm, ind) => {
                                                return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                            })}
                                    </div>
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
                        <div className="tools-card-container">
                            <TabContext value={oderValue}>
                                <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
                                    <TabList
                                        onChange={handleOrderChange}
                                        className={classes.root}
                                        scrollButtons="auto"
                                        TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                    >
                                        <Tab label={`Data Explorer`} value="1" />
                                    </TabList>
                                </Box>

                                <TabPanel value="1">
                                    {" "}
                                    <div className="inner-tab">
                                        {solanaTools &&
                                            solanaTools.dataExplorer &&
                                            solanaTools.dataExplorer.map((elm, ind) => {
                                                return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                            })}
                                    </div>
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
                            <TabContext value={nftTab}>
                                <Box
                                    sx={{
                                        borderBottom: 1,
                                        borderColor: "#132235",
                                        height: "30px"
                                    }}
                                >
                                    <TabList
                                        onChange={handleNftChange}
                                        className={classes.root}
                                        scrollButtons="auto"
                                        TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                    >
                                        <Tab label={`DAO Tooling`} value="1" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <div className="inner-tab">
                                        {solanaTools &&
                                            solanaTools.daoTooling &&
                                            solanaTools.daoTooling.map((elm, ind) => {
                                                return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                            })}
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
                                        height: "30px"
                                    }}
                                >
                                    <TabList
                                        onChange={handleStatChange}
                                        className={classes.root}
                                        scrollButtons="auto"
                                        TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                    >
                                        <Tab label={`Infastructure`} value="1" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    {" "}
                                    <div className="inner-tab">
                                        {solanaTools &&
                                            solanaTools.infastructure &&
                                            solanaTools.infastructure.map((elm, ind) => {
                                                return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                            })}
                                    </div>
                                </TabPanel>
                                <TabPanel value="2"></TabPanel>
                            </TabContext>
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
                                        height: "30px"
                                    }}
                                >
                                    <TabList
                                        onChange={handleStatChange}
                                        className={classes.root}
                                        scrollButtons="auto"
                                        TabIndicatorProps={{ style: { minWidth: "auto" } }}
                                    >
                                        <Tab label={`Miscellaneous `} value="1" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    {" "}
                                    <div className="inner-tab">
                                        {solanaTools &&
                                            solanaTools.miscellaneous &&
                                            solanaTools.miscellaneous.map((elm, ind) => {
                                                return <ToolBoxItem key={ind.toString()} elm={elm} />;
                                            })}
                                    </div>
                                </TabPanel>
                                <TabPanel value="2"></TabPanel>
                            </TabContext>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
