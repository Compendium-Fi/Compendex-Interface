import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import axios from "axios";
import moment from "moment";
import { Link, useHistory } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const HomeTokenCard = ({
  token,
  image,
  symbol,
  strokeColor,
  tokenSymbol,
  tokenAdr,
  swapSymbol,
  marketAdr,
}) => {
  const [isFirstBtnHovered, setIsFirstBtnHovered] = useState(false);
  const [isSecondBtnHovered, setIsSecondBtnHovered] = useState(false);
  // useEffect(() => {}, [isFirstBtnHovered, isSecondBtnHovered]);
  const [series, setSeries] = useState([
    {
      name: "Desktops",
      data: [
        10, 41, 35, 51, 49, 62, 69, 91, 80, 10, 41, 35, 51, 49, 62, 69, 91, 80,
      ],
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      height: 130,
      type: "line",
      zoom: {
        enabled: false,
      },

      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: [strokeColor],
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
      x: {
        format: "dd MMM yyyy",
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
      axisBorder: {
        show: false,
      },

      labels: {
        show: false,
        style: {
          cssClass: "apexcharts-xaxis-label",
        },
      },
      axisTicks: {
        show: false,
        borderType: "solid",
        color: "#78909C",
        height: 6,
        offsetX: 0,
        offsetY: 0,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  });
  const [tokenInfo, setTokenInfo] = useState(null);
  const history = useHistory();
  const initTokenInfo = async () => {
    try {
      let result = await axios.get(
        `https://pro-api.coingecko.com/api/v3/coins/${symbol}`,
        {
          headers: { "X-Cg-Pro-Api-Key": "CG-eyLBTfUJaAWUd1URUWNZ2vtc" },
        }
      );

      setTokenInfo(result.data);
    } catch (error) {}
  };
  const initTokenPrice = async () => {
    try {
      let result = await axios.get(
        `https://pro-api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=USD&days=1`,
        {
          headers: { "X-Cg-Pro-Api-Key": "CG-eyLBTfUJaAWUd1URUWNZ2vtc" },
        }
      );

      let values = result.data.prices.map((elm) => {
        return elm[1];
      });
      let labels = result.data.prices.map((elm) => {
        let item = moment(new Date(elm[0])).format("MM-DD-YYYY");

        return item;
      });

      setOptions({
        ...options,
        xaxis: {
          ...options.xaxis,
          categories: labels,
        },
      });
      setSeries([
        {
          name: "Desktops",
          data: values,
        },
      ]);
    } catch (error) {}
  };
  useEffect(() => {
    initTokenInfo();
    initTokenPrice();
  }, [symbol]);

  return (
    <div className="card main-token-card">
      <div className="card-header">
        <div className="d-flex align-items-center">
          <span>
            <img
              alt=""
              src={image}
              className="home-token-icon"
              style={{ margin: "0.7em", marginLeft: "-0.5em" }}
            />
          </span>
          <div className="flex-grow-1">{token}</div>
        </div>
        <Link className="mb-0" to={`/analytics/token?input=${tokenAdr}`}>
          <OpenInNewIcon />
        </Link>
      </div>
      <div className="card-body">
        <h3>USD {tokenInfo && tokenInfo.market_data.current_price.usd}</h3>
        <span
          className={
            tokenInfo &&
            tokenInfo.market_data.price_change_percentage_24h_in_currency > 0
              ? "status positive"
              : "status negative"
          }
        >
          {tokenInfo &&
            tokenInfo.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
              2
            )}
          %
        </span>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={100}
        />
        {/* <span style={{ opacity: 0.5 }}>
          Click here to trade {tokenSymbol} ➝
        </span> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <button
            onClick={() => {
              history.push(`/swap?tokens=${swapSymbol}-USDC`);
            }}
            className="small-btn"
            onMouseEnter={() => {
              setIsFirstBtnHovered(true);
            }}
            onMouseLeave={() => {
              setIsFirstBtnHovered(false);
            }}
          >
            {isFirstBtnHovered
              ? `Launch simple swap`
              : `Instantly Swap For ${token}`}
          </button>
          <button
            className="small-btn"
            onClick={() => {
              history.push(`/serum/market/${marketAdr}`);
            }}
            onMouseEnter={() => {
              setIsSecondBtnHovered(true);
              // console.log("Entreeeed", isSecondBtnHovered);
            }}
            onMouseLeave={() => {
              setIsSecondBtnHovered(false);
            }}
          >
            {isSecondBtnHovered
              ? `Launch The Compendium.Fi DEX`
              : `Trade ${token} On Serum `}
            {/* {isSecondBtnHovered && <span>Launch The Compendium.Fi DEX</span>}
            {!isSecondBtnHovered && <span>Trade {token} On Serum</span>} */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeTokenCard;
