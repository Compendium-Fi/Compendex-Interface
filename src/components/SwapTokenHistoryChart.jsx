import { useLayoutEffect, useMemo, useState } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

import numeral from "numeral";
import { convert, isScientificNotation } from "@/utils/tokens-utils";

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
const SwapTokenHistoryChart = ({ tokenHistory }) => {
  const [selection, setSelection] = useState("1D");
  useMemo(() => { console.log("History", tokenHistory) }, [])

  const [width] = useWindowSize();
  const setChartType = (dataType) => {
    setSelection(dataType);
  };
  const [options, setOptions] = useState({
    chart: {
      type: "area",
      height: 500,
      foreColor: "#8C87C2",
      fontFamily: "Rubik, sans-serif",
      stacked: true,
      dropShadow: {
        enabled: true,
        enabledSeries: [0],
        top: -2,
        left: 2,
        blur: 5,
        opacity: 0.06,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#7B6FFF", "#1652F0"],
    stroke: {
      curve: "smooth",
      width: 3,
    },
    dataLabels: {
      enabled: false,
    },

    markers: {
      size: 0,
      strokeColor: "#fff",
      strokeWidth: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      hover: {
        size: 6,
      },
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 6,
      max: 6,
      labels: {
        offsetX: -10,
        offsetY: 0,
        formatter: function (value) {
          console.log("Value", value)
          return isScientificNotation(value) ? convert(value.toFixed(10)) : numeral(value).format("0,0.0000");
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    grid: {
      show: false,
      padding: {
        left: -5,
        right: 5,
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 100, 100],
      },
    },
  });
  const minMax = (prices) => {
    let filtredPrices = prices.map((elm) => elm[1]);
    let maxNumber = Math.max.apply(Math, filtredPrices);
    let minNumber = Math.min.apply(Math, filtredPrices);
    return {
      chart: {
        type: "area",
        height: 650,
        foreColor: "#8C87C2",
        fontFamily: "Rubik, sans-serif",
        stacked: true,
        dropShadow: {
          enabled: true,
          enabledSeries: [0],
          top: -2,
          left: 2,
          blur: 5,
          opacity: 0.06,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#7B6FFF", "#1652F0"],
      stroke: {
        curve: "smooth",
        width: 3,
      },
      dataLabels: {
        enabled: false,
      },

      markers: {
        size: 0,
        strokeColor: "#fff",
        strokeWidth: 3,
        strokeOpacity: 1,
        fillOpacity: 1,
        hover: {
          size: 6,
        },
      },
      annotations: {
        yaxis: [
          {
            y: filtredPrices[filtredPrices.length - 1],
            borderColor: "#355dff",
            label: {
              // borderColor: "#355dff",
              // style: {
              //   color: "#fff",
              //   background: "#355dff",
              // },
              text: filtredPrices[filtredPrices.length - 1].toFixed(4),
            },
          },
        ],
      },
      xaxis: {
        type: "datetime",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        min: minNumber,
        max: maxNumber,
        labels: {
          offsetX: -10,
          offsetY: 0,
          formatter: function (value) {
            console.log("Value", value)
            return isScientificNotation(value) ? convert(value.toFixed(10)) : numeral(value).format("0,0.0000");
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      grid: {
        show: false,
        padding: {
          left: -5,
          right: 5,
        },
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy",
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 100, 100],
        },
      },
    };
  };

  return (
    <>
      <div className="duration-option text-right" id="chart-btns">
        <button
          id="one_month"
          className={`swap-chart-btn ${selection === "1D" ? "active-chart" : ""
            }`}
          onClick={() => setChartType("1D")}
        >
          <span>1D</span>
        </button>
        &nbsp;
        <button
          id="six_months"
          className={`swap-chart-btn ${selection === "1W" ? "active-chart" : ""
            }`}
          onClick={() => setChartType("1W")}
        >
          <span>1W</span>
        </button>
        &nbsp;
        <button
          id="one_year"
          className={`swap-chart-btn ${selection === "1M" ? "active-chart" : ""
            }`}
          onClick={() => setChartType("1M")}
        >
          <span>1M</span>
        </button>
        &nbsp;
        <button
          id="ytd"
          className={`swap-chart-btn ${selection === "1Y" ? "active-chart" : ""
            }`}
          onClick={() => setChartType("1Y")}
        >
          <span>1Y</span>
        </button>
        <img src="/assets/img/coingecko.webp" alt="" className="coingecko" />
        {/* <span style={{ marginLeft: "10px" }}>
          {firstToken
            ? fromTokenData
              ? fromTokenData.tokenInfo.symbol
              : "NA"
            : toTokenData
            ? toTokenData.tokenInfo.symbol
            : "NA"}
        </span> */}
      </div>

      {tokenHistory && tokenHistory.length !== 0 ? (
        <div id="chart-timeline">
          <ReactApexChart
            options={
              (tokenHistory && tokenHistory.length) !== 0
                ? minMax(tokenHistory)
                : options
            }
            series={[
              {
                name: "",
                data: tokenHistory,
              },
            ]}
            type="area"
            height={550}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SwapTokenHistoryChart;
