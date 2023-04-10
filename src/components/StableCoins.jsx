import axios from "axios";
import { useContext, useEffect, useState } from "react";

import numeral from "numeral";
import { useTokenList } from "@/context/tokenList";
import { useCommonStyles, useStableTokenStyles } from "./styles";
const StableCoins = () => {
  const [protocolList, setProtocolList] = useState([]);
  const { classes } = useStableTokenStyles();
  const { splTokenList } = useTokenList();
  const ICONS_CDN = "https://icons.llamao.fi/icons";

  function peggedAssetIconUrl(name) {
    return `${ICONS_CDN}/pegged/${encodeURIComponent(
      name.toLowerCase().split(" ").join("-")
    )}?w=24&h=24`;
  }
  const relDiff = (final, init) => {
    return ((final - init) / init) * 100;
  };
  const pullData = async () => {
    try {
      let { data } = await axios.get(
        "https://stablecoins.llama.fi/stablecoins?includePrices=true"
      );
      //   setProtocolList();

      let assetList = data.peggedAssets.filter((elm) =>
        elm.chains.includes("Solana")
      );
      //console.log("Asset list", assetList);
      let mappedData = assetList.map((elm) => {
        try {
          //   let { data } = await axios.get(
          //     `https://stablecoins.llama.fi/stablecoincharts/Solana?stablecoin=${elm.id}`
          //   );

          //   let tokenInfo = await fetchTokenPrice(elm.gecko_id);
          //   let marketInfo = await getTokenInfoCoinGecko(elm.gecko_id);
          //   let maxPriceList = marketInfo.prices.map((elm) => elm[1]);
          //   const max = Math.max(...maxPriceList);
          //console.log("Max Price", max);

          let splInfo = splTokenList.find(
            (tkn) => tkn.symbol.toUpperCase() === elm.symbol.toUpperCase()
          );

          if (splInfo) {
            return {
              ...elm,

              splInfo,
            };
          } else {
            return {
              ...elm,

              splInfo: null,
            };
          }
        } catch (error) {
          console.log("error", error.mesage);
        }
      });

      setProtocolList(mappedData);

      //   let totalData = await axios.get(
      //     `https://stablecoins.llama.fi/stablecoinchains`
      //   );
      //   let solanaData = totalData.data.find((elm) => elm.tokenSymbol === "SOL");

      //   setTotalMarketCap(solanaData.totalCirculatingUSD.peggedUSD);
    } catch (error) {
      console.log("Error", error.message);
    }
  };
  useEffect(() => {
    pullData();
  }, [splTokenList]);
  return (
    <div>
      {" "}
      {protocolList
        .sort(
          (a, b) =>
            b.chainCirculating.Solana.current.peggedUSD -
            a.chainCirculating.Solana.current.peggedUSD
        )
        .map((elm, ind) => {
          return (
            <div
              className={classes.stableCoinItem}
              style={{ padding: "0.7em" }}
              key={ind.toString()}
            >
              <div className={classes.stableCoinInfo}>
                {
                  <img
                    src={peggedAssetIconUrl(elm.name)}
                    alt=""
                    className={classes.stableCoinIcon}
                  />
                }
                <div className={classes.stableCoinName}>
                  <span id="stable-coin-name">
                    {elm.name} ({elm.symbol})
                  </span>
                  <div id="stable-coin-price">
                    Peg:{" "}
                    <span
                      className={`${relDiff(
                        elm.chainCirculating.Solana.current.peggedUSD,
                        elm.chainCirculating.Solana.circulatingPrevDay
                          .peggedUSD
                      ) > 0
                        ? "volume-increase"
                        : "volume-decrease"
                        }`}
                    >
                      {relDiff(
                        elm.chainCirculating.Solana.current.peggedUSD,
                        elm.chainCirculating.Solana.circulatingPrevDay.peggedUSD
                      ) > 0
                        ? "↑"
                        : "↓"}
                      {relDiff(
                        elm.chainCirculating.Solana.current.peggedUSD,
                        elm.chainCirculating.Solana.circulatingPrevDay.peggedUSD
                      ).toFixed(3)}
                      %
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className={classes.stableCoinPricing}>
                <span id="usd-price">
                  $
                  {numeral(
                    elm.chainCirculating.Solana.current.peggedUSD
                  ).format("0,0.000")}
                </span>
                <span id="volume">Total Marketcap</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default StableCoins;
