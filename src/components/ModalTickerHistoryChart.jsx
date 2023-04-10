import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

import numeral from "numeral";
// import coingeckoIcon from "../assets/img/coingecko.webp";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import { Skeleton, } from '@mantine/core';
import { initTokenChartData } from "@/utils/tokenApi";
//import { initTokenChartData } from "../redux/actions/swap.actions";
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
const ModalTickerHistoryChart = ({ tokenId }) => {
  const [tokenHistory, setTokenHistory] = useState([]);
  const [selection, setSelection] = useState("1D");
  const setHistoryData = useCallback(async () => {
    const result = await initTokenChartData(tokenId);
    if (result) {
      setTokenHistory(result);
    }
    console.log("Result", result);
  }, [tokenId]);
  useEffect(() => {
    setHistoryData();
  }, [setHistoryData]);

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
        opacity: 0.06
      },
      toolbar: {
        show: false
      }
    },
    colors: ["#7B6FFF", "#1652F0"],
    stroke: {
      curve: "smooth",
      width: 3
    },
    dataLabels: {
      enabled: false
    },

    markers: {
      size: 0,
      strokeColor: "#fff",
      strokeWidth: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      hover: {
        size: 6
      }
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      min: 6,
      max: 6,
      labels: {
        offsetX: -10,
        offsetY: 0,
        formatter: function (value) {
          return numeral(value).format("0,0.0000");
        }
      },
      tooltip: {
        enabled: true
      }
    },
    grid: {
      show: false,
      padding: {
        left: -5,
        right: 5
      }
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy"
      }
    },
    legend: {
      position: "top",
      horizontalAlign: "left"
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 100, 100]
      }
    }
  });
  const minMax = (prices) => {
    let filtredPrices = prices.map((elm) => elm[1]);
    let maxNumber = Math.max.apply(Math, filtredPrices);
    let minNumber = Math.min.apply(Math, filtredPrices);
    return {
      chart: {
        type: "area",
        height: 650,
        width: 600,
        foreColor: "#8C87C2",
        fontFamily: "Rubik, sans-serif",
        stacked: true,
        dropShadow: {
          enabled: true,
          enabledSeries: [0],
          top: -2,
          left: 2,
          blur: 5,
          opacity: 0.06
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#7B6FFF", "#1652F0"],
      stroke: {
        curve: "smooth",
        width: 3
      },
      dataLabels: {
        enabled: false
      },

      markers: {
        size: 0,
        strokeColor: "#fff",
        strokeWidth: 3,
        strokeOpacity: 1,
        fillOpacity: 1,
        hover: {
          size: 6
        }
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
              text: filtredPrices[filtredPrices.length - 1].toFixed(4)
            }
          }
        ]
      },
      xaxis: {
        type: "datetime",
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        min: minNumber,
        max: maxNumber,
        labels: {
          offsetX: -10,
          offsetY: 0,
          formatter: function (value) {
            return numeral(value).format("0,0.0000");
          }
        },
        tooltip: {
          enabled: true
        }
      },
      grid: {
        show: false,
        padding: {
          left: -5,
          right: 5
        }
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy"
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "left"
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 100, 100]
        }
      }
    };
  };

  return (
    <>
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
                data: tokenHistory
              }
            ]}
            type="area"
            height={400}
          />
        </div>
      ) : (
        <Skeleton visible={true}>
        </Skeleton>
      )}
    </>
  );
};

export default ModalTickerHistoryChart;
