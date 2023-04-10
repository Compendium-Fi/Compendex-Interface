import { useTokenList } from "@/context/tokenList";
import axios from "axios";
import { useRouter } from "next/router";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { useNewsStyles } from "./styles";

const OpenBookMarkets = () => {
  const history = useRouter();

  const [topMarkets, setTopMarkets] = useState([]);
  const { splTokenList } = useTokenList();
  const { classes } = useNewsStyles();
  const getTokenUri = (token) => {
    let tokenInfo = splTokenList.find((elm) => elm.symbol === token);
    if (tokenInfo) {
      return tokenInfo.logoURI;
    } else {
      return null;
    }
  };
  const marketInfo = async () => {
    try {
      let { data } = await axios.get(
        `https://api.allorigins.win/get?url=https://openserum.io/api/serum/gainers?_=${Date.now()}`
      );
      if (data) {
        console.log("Data", JSON.parse(data.contents));
        setTopMarkets(JSON.parse(data.contents));
      }
    } catch (error) { }
  };
  useEffect(() => {
    marketInfo();
  }, [splTokenList]);
  return (
    <div>
      {" "}
      {topMarkets
        .sort((a, b) => b.volume24Hour - a.volume24Hour)
        .map((elm) => (
          <div className={classes.newsItem}>
            <div className={classes.leftItem}>
              <div className={classes.trendingSwapIcons}>
                {elm.name.split("-").map((tkn) => (
                  <img src={getTokenUri(tkn)} alt="" className={classes.trendingSwapIconsImg} />
                ))}
                {/* 
            <img src={solIcon} alt="" /> */}
              </div>
              <div className={classes.newsInfo}>
                <span id="news-title">{elm.name}</span>
                <span id="news-description">
                  ${numeral(elm.volume24Hour).format("0,0.000")}(24H Volume)
                </span>
              </div>
            </div>
            <button
              className={classes.tradeBtn}
              onClick={() => {

                history.push(`/market/${elm.id}`);
              }}
            >
              Trade
            </button>
          </div>
        ))}
    </div>
  );
};

export default OpenBookMarkets;
