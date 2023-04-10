import { abbreviateNumber } from "js-abbreviation-number";
import numeral from "numeral";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ProtocolAnalytics = ({ data }) => {
  
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
              style: {
                background: "#355dff",
                color: "#FFF",
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

  const initChartData = () => {
    try {
      //   let { data } = await axios.get("https://api.llama.fi/charts/Solana");
      let mappedData = data.map((elm) => {
        return [Number(elm.date) * 1000, elm.tokens.solana];
      });

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
  };
  useEffect(() => {
    initChartData();
  }, []);

  return (
    <>
      <div className="duration-option text-right">
        {/* <Link
          id="one_month"
          onClick={() => updateData("one_month")}
          className={selection === "one_month" ? "active" : ""}
        >
          1M
        </Link>
        &nbsp;
        <Link
          id="six_months"
          onClick={() => updateData("six_months")}
          className={selection === "six_months" ? "active" : ""}
        >
          6M
        </Link>
        &nbsp;
        <Link
          id="one_year"
          onClick={() => updateData("one_year")}
          className={selection === "one_year" ? "active" : ""}
        >
          1Y
        </Link>
        &nbsp;
        <Link
          id="ytd"
          onClick={() => updateData("ytd")}
          className={selection === "ytd" ? "active" : ""}
        >
          YTD
        </Link>
        &nbsp;
        <Link
          id="all"
          onClick={() => updateData("all")}
          className={selection === "all" ? "active" : ""}
        >
          ALL
        </Link> */}
      </div>

      <div id="chart-timeline">
        <ReactApexChart
          options={options}
          series={tokenInfo}
          type="area"
          height={350}
        />
      </div>
    </>
  );
};

export default ProtocolAnalytics;
