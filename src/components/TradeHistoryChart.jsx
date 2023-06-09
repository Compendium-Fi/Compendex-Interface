import axios from "axios";
import numeral from "numeral";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import dynamic from 'next/dynamic'
import { convert, isScientificNotation } from "@/utils/tokens-utils";

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
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
const TradeHistoryChart = ({ coingeckoId, coinName }) => {
  const [width] = useWindowSize();
  const [tokenInfo, setTokenInfo] = useState([
    {
      name: "",
      data: [],
    },
  ]);
  const [options, setOptions] = useState({
    plotOptions: {
      scatter: {
        markers: {
          states: {
            hover: {
              fillColors: ['#00bfff'], // Set background color on hover
            },
            normal: {
              fillColors: ['#ff0000'], // Set background color
            }
          },
        },
      },
    },
    chart: {
      type: "area",
      height: 500,
      // width: 600,
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
    responsive: [
      {
        breakpoint: 1000,
        options: {
          width: 400,
        },
      },
      {
        breakpoint: 600,
        options: {
          width: 300,
        },
      },
    ],
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
          console.log("Value",value)
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
      color: "#000"
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
      plotOptions: {
        scatter: {
          markers: {
            states: {
              hover: {
                fillColors: ['#00bfff'], // Set background color on hover
              },
              normal: {
                fillColors: ['#ff0000'], // Set background color
              }
            },
          },
        },
      },
      chart: {
        type: "area",
        height: 300,
        width: 700,
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
                color: "#fff",
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
            console.log("Value",value)
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
        horizontalAlign: "left", color: "#000"
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
      let result = await axios.get(
        `https://pro-api.coingecko.com/api/v3/coins/${coingeckoId}/market_chart?vs_currency=USD&days=7`,
        {
          headers: { "X-Cg-Pro-Api-Key": process.env.NEXT_PUBLIC_COINGECKO_PRO_KEY },
        }
      );

      setTokenInfo([
        {
          name: "",
          data: result.data.prices,
        },
      ]);
      minMax(result.data.prices);
    } catch (error) {
      console.log("Error", error.message);
    }
  }, [coingeckoId]);
  useEffect(() => {
    if (coingeckoId !== undefined) {
      initChartData(coingeckoId);
    }
  }, [initChartData, coingeckoId]);
  return (
    <>
      <div className="duration-option text-right"></div>

      {
        typeof window !== 'undefined' ? <ReactApexChart
          options={options}
          series={tokenInfo}
          type="area"
          height={500}
        /> : <div></div>
      }
    </>
  );
};
// TradeHistoryChart.ssr = false;
export default TradeHistoryChart;
