import axios from "axios";
import { abbreviateNumber } from "js-abbreviation-number";
import numeral from "numeral";
import dynamic from 'next/dynamic'
import { useCallback, useEffect, useState } from "react";
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
const AnalyticsChart = () => {
  const [selection, setSelection] = useState("1D");
  const [tokenInfo, setTokenInfo] = useState([
    {
      name: "",
      data: [],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      type: "area",
      height: 300,
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
          return numeral(value).format("0,0.0000");
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
        format: "dd MM yyyy",
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
    setOptions({
      chart: {
        type: "area",
        height: 300,
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
              borderColor: "#355dff",
              style: {
                color: "#FFF",
                background: "#355dff",
              },
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
            return `$${abbreviateNumber(value, 2, {
              symbols: ["", "k", "M", "B", "T", "P", "E"],
            })}`;
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
  };

  const initChartData = useCallback(async () => {
    try {
      let { data } = await axios.get("https://api.llama.fi/charts/Solana");
      let mappedData = data.map((elm) => {
        return [Number(elm.date) * 1000, elm.totalLiquidityUSD];
      });
      //console.log("Data", mappedData);
      setTokenInfo([
        {
          name: "",
          data: mappedData,
        },
      ]);
      minMax(mappedData);
    } catch (error) {
      console.log("Error", error.message);
    }
  }, []);
  useEffect(() => {
    initChartData();
  }, [initChartData]);

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <h1
          style={{
            color: "rgb(226, 232, 240)",
            fontSize: "24px",
            fontWeight: 400,
          }}
        >
          Historical Solana TVL
        </h1>
        {/* <div className="duration-option text-right" id="chart-btns">
          <button
            id="one_month"
            className={`swap-chart-btn ${
              selection === "1D" ? "active-chart" : ""
            }`}
            onClick={() => setChartType("1D")}
          >
            <span>1D</span>
          </button>
          &nbsp;
          <button
            id="six_months"
            className={`swap-chart-btn ${
              selection === "1W" ? "active-chart" : ""
            }`}
            onClick={() => setChartType("1W")}
          >
            <span>1W</span>
          </button>
          &nbsp;
          <button
            id="one_year"
            className={`swap-chart-btn ${
              selection === "1M" ? "active-chart" : ""
            }`}
            onClick={() => setChartType("1M")}
          >
            <span>1M</span>
          </button>
          &nbsp;
          <button
            id="ytd"
            className={`swap-chart-btn ${
              selection === "1Y" ? "active-chart" : ""
            }`}
            onClick={() => setChartType("1Y")}
          >
            <span>1Y</span>
          </button>
          <img src={coingeckoIcon} alt="" className="coingecko" />
         
        </div> */}
      </div>
      <div id="chart-timeline">
        <ReactApexChart
          options={options}
          series={tokenInfo}
          type="area"
          height={530}
          width={"100%"}
        />
      </div>
    </>
  );
};

export default AnalyticsChart;
