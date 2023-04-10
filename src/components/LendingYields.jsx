import React, { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import TokenListContext from "../context/context/tokenListContext";
import PoolItem from "./PoolItem";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const TopLendingYields = () => {
  const [protocolList, setProtocolList] = useState([]);
  const [poolList, setPoolList] = useState([]);
  const [editPoolList, setEditPoolList] = useState([]);

  const [yieldList, setYieldList] = useState([]);
  const { splTokenList } = useContext(TokenListContext);

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
        <SkeletonTheme baseColor="#0f172a" highlightColor="#17264a">
          <Skeleton
            style={{
              height: "680px",
              minWidth: "100%",
            }}
          />
        </SkeletonTheme>
      )}
    </div>
  );
};

export default TopLendingYields;
