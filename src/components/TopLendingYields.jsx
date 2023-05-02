import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Skeleton } from '@mantine/core'

import PoolItem from "./PoolItem";
const TopLendingYields = () => {
  const [protocolList, setProtocolList] = useState([]);
  const [poolList, setPoolList] = useState([]);
  const [editPoolList, setEditPoolList] = useState([]);
  const [yieldList, setYieldList] = useState([]);

  const pullData = useCallback(async () => {
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
  }, []);
  useEffect(() => {
    pullData();
  }, [pullData]);
  useMemo(() => {
    let mappedData = poolList
      .sort((a, b) => b.tvlUsd - a.tvlUsd)
      .slice(0, 9)
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
  }, [poolList, protocolList, yieldList]);
  // useEffect(() => {
  //   const pullData = async () => {
  //     const [pools, protocols, yields] = await Promise.allSettled([
  //       axios.get("https://yields.llama.fi/pools"),
  //       axios.get("https://api.llama.fi/lite/protocols2"),
  //       axios.get("https://api.llama.fi/config/yields?a=1"),
  //     ]);
  //     const fulfilled = (promise) => promise.status === "fulfilled";
  //     setProtocolList(
  //       protocols.value.data.protocols.filter((protocol) =>
  //         protocol.chains.includes("Solana")
  //       )
  //     );
  //     setPoolList(
  //       pools.value.data.data.filter(
  //         (pool) => pool.chain.toUpperCase() === "SOLANA"
  //       )
  //     );
  //     setYieldList(yields.value.data.protocols);
  //     const errors = [pools, protocols, yields].filter(
  //       (promise) => !fulfilled(promise)
  //     );
  //     console.log("Yields", yields);
  //     errors.forEach((error) => console.error("Error:", error.reason));
  //   };
  //   pullData();
  // }, []);
  return (
    <div>
      {editPoolList.length !== 0 ? (
        editPoolList
          .sort((a, b) => b.apy - a.apy)
          .map((elm) => <PoolItem poolInfo={elm} />)
      ) : (
        <Skeleton sx={{
          "&::before": { background: "#0f172a" },
          "&::after": { background: "#17264a" },
        }}></Skeleton>
      )}
    </div>
  );
};

export default TopLendingYields;
