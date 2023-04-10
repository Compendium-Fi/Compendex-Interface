import { Table } from "antd";
import axios from "axios";
import numeral from "numeral";
import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
// import { Link } from "react-router-dom";
//import "../pages/analytics.css";
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
const TVLRankingComp = () => {
  const [width] = useWindowSize();
  const [protocolList, setProtocolList] = useState([]);
  const pullData = useCallback(async () => {
    try {
      let { data } = await axios.get("https://api.llama.fi/lite/protocols2");
      setProtocolList(
        data.protocols.filter((elm) => elm.chains.includes("Solana"))
      );
    } catch (error) {}
  }, []);
  const relDiff = (final, init) => {
    return ((final - init) / init) * 100;
  };
  useEffect(() => {
    pullData();
  }, [pullData]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,

      render: (text, record) => {
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <img
              alt=""
              src={record.logo}
              style={{
                width: 30,
                height: 30,
                objectFit: "contain",
                marginRight: "1em",
                borderRadius: 30,
              }}
            />
            <Link
              to={`/analytics/protocol/${record.name
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              {text}
            </Link>
          </div>
        );
      },
    },
    {
      title: "Category",
      dataIndex: "category",
      sorter: true,
    },

    {
      title: "1D Change",
      dataIndex: "tvlPrevDay",
      sorter: true,
      render: (text, record) => {
        return (
          <span
            style={{
              color:
                Number(
                  relDiff(
                    record.chainTvls.Solana.tvl,
                    record.chainTvls.Solana.tvlPrevDay
                  )
                ) < 0
                  ? "rgb(221, 80, 151)"
                  : "rgb(50, 205, 153)",
            }}
          >
            {Number(
              relDiff(
                record.chainTvls.Solana.tvl,
                record.chainTvls.Solana.tvlPrevDay
              )
            ) < 0
              ? "↓"
              : "↑"}
            {numeral(
              relDiff(
                record.chainTvls.Solana.tvl,
                record.chainTvls.Solana.tvlPrevDay
              )
            )
              .format("0,0.000")
              .replace("-", "")}
          </span>
        );
      },
    },
    {
      title: "1W Change",
      dataIndex: "tvlPrevWeek",

      sorter: true,
      render: (text, record) => {
        return (
          <span
            style={{
              color:
                Number(
                  relDiff(
                    record.chainTvls.Solana.tvl,
                    record.chainTvls.Solana.tvlPrevWeek
                  )
                ) < 0
                  ? "rgb(221, 80, 151)"
                  : "rgb(50, 205, 153)",
            }}
          >
            {Number(
              relDiff(
                record.chainTvls.Solana.tvl,
                record.chainTvls.Solana.tvlPrevWeek
              )
            ) < 0
              ? "↓"
              : "↑"}
            {numeral(
              relDiff(
                record.chainTvls.Solana.tvl,
                record.chainTvls.Solana.tvlPrevWeek
              )
            )
              .format("0,0.000")
              .replace("-", "")}
          </span>
        );
      },
    },
    {
      title: "1M Change",
      dataIndex: "tvlPrevMonth",

      sorter: true,
      render: (text, record) => {
        return (
          <span
            style={{
              color:
                Number(
                  relDiff(
                    record.chainTvls.Solana.tvl,
                    record.chainTvls.Solana.tvlPrevMonth
                  )
                ) < 0
                  ? "rgb(221, 80, 151)"
                  : "rgb(50, 205, 153)",
            }}
          >
            {Number(
              relDiff(
                record.chainTvls.Solana.tvl,
                record.chainTvls.Solana.tvlPrevMonth
              )
            ) < 0
              ? "↓"
              : "↑"}
            {!isNaN(
              relDiff(
                record.chainTvls.Solana.tvl,
                record.chainTvls.Solana.tvlPrevMonth
              )
            )
              ? numeral(
                  relDiff(
                    record.chainTvls.Solana.tvl,
                    record.chainTvls.Solana.tvlPrevMonth
                  )
                )
                  .format("0,0.000")
                  .replace("-", "")
              : "0"}
          </span>
        );
      },
    },

    {
      title: "TVL",
      dataIndex: "tvl",

      sorter: true,
      render: (text) => {
        return <span>${numeral(text).format("0,0.000")}</span>;
      },
    },
    {
      title: "MCAP/TVL",
      dataIndex: "mcap",
      sorter: true,
      render: (text, record) => {
        return (
          <span>
            {record.mcap
              ? numeral(
                  Number(text) / Number(record.chainTvls.Solana.tvl)
                ).format("0,0.000")
              : "N/A"}
          </span>
        );
      },
    },
  ];
  const smallColumns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
      responsive: ["xs"],
      render: (text, record) => {
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <img
              alt=""
              src={record.logo}
              style={{
                width: 30,
                height: 30,
                objectFit: "contain",
                marginRight: "1em",
                borderRadius: 30,
              }}
            />
            <Link
              to={`/analytics/protocol/${record.name
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              {text}
            </Link>
          </div>
        );
      },
    },
    {
      title: "TVL",
      dataIndex: "tvl",
      responsive: ["xs"],
      sorter: true,
      render: (text) => {
        return <span>${numeral(text).format("0,0.000")}</span>;
      },
    },
  ];
  return (
    <div className="card-body analytics_table">
      {width > 910 ? (
        <Table columns={columns} dataSource={protocolList} />
      ) : (
        <Table columns={smallColumns} dataSource={protocolList} />
      )}
    </div>
  );
};

export default TVLRankingComp;
