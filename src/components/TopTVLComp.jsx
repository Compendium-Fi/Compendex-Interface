import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Skeleton } from '@mantine/core'
import TVLItem from "./TVLItem";
const TopTVLComp = () => {
  const [protocolList, setProtocolList] = useState([]);
  const pullData = useCallback(async () => {
    try {
      let { data } = await axios.get("https://api.llama.fi/lite/protocols2");
      setProtocolList(
        data.protocols.filter((elm) => elm.chains.includes("Solana"))
      );
    } catch (error) { }
  }, []);

  useEffect(() => {
    pullData();
  }, [pullData]);
  return (
    <div>
      {" "}
      {protocolList.length !== 0 ? (
        protocolList.slice(0, 9).map((elm, ind) => {
          //console.log("Elm", elm);
          return <TVLItem elm={elm} key={ind.toString()} />;
        })
      ) : (

        <Skeleton
          style={{
            height: "680px",
            minWidth: "100%",
          }}
        />

      )}
    </div>
  );
};

export default TopTVLComp;
