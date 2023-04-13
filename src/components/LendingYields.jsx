import { Skeleton } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import PoolItem from "./PoolItem";

const TopLendingYields = () => {
  const [protocolList, setProtocolList] = useState([]);
  const [poolList, setPoolList] = useState([]);
  const [editPoolList, setEditPoolList] = useState([]);

  const [yieldList, setYieldList] = useState([]);
 

  const pullData = async () => {
    try {
      let result = await axios.all([
        axios.get("https://yields.llama.fi/pools"),
        axios.get("https://api.llama.fi/lite/protocols2"),
        axios.get("https://api.llama.fi/config/yields?a=1"),
      ]);
      //   console.log("Data", result);
      setProtocolList(
        result[1].data.protocols.filter((elm) => elm.chains.includes("Solana"))
      );
      setPoolList(
        result[0].data.data.filter(
          (elm) => elm.chain.toUpperCase() === "SOLANA"
        )
      );

      setYieldList(result[2].data.protocols);
    } catch (error) {
      console.log("err", error.message);
    }
  };
  useEffect(() => {
    pullData();
  }, []);
  useMemo(() => {
    let mappedData = poolList
      .sort((a, b) => b.tvlUsd - a.tvlUsd)
      .map((elm) => {
        let selectedPool;
        let selectedYield = yieldList[elm.project];
        //console.log("selected Yield", selectedYield);
        if (selectedYield) {
          selectedPool = protocolList.find(
            (elm) => elm.name.toUpperCase() === selectedYield.name.toUpperCase()
          );
        }
        return { ...elm, poolInfo: selectedPool };
      });

    setEditPoolList(mappedData);
  }, [poolList, yieldList]);
  return (
    <div>
      {editPoolList.length !== 0 ? (
        editPoolList
          .filter((elm) => {

            return (
              elm.poolInfo !== null &&
              elm.poolInfo !== undefined &&
              elm.poolInfo.category === "Lending"
            );
          })
          .sort((a, b) => a.poolInfo.tvl - b.poolInfo.tvl)

          .map((elm) => <PoolItem poolInfo={elm} />)
      ) : (

        <Skeleton
          style={{
            height: "680px",
            minWidth: "100%",
          }}
          sx={{
            "&::before": { background: "#0f172a" },
            "&::after": { background: "#17264a" },
          }}
        />

      )}
    </div>
  );
};

export default TopLendingYields;
