import React, { useContext } from "react";

import numeral from "numeral";

import { useTokenList } from "@/context/tokenList";
import { useRouter } from "next/router";
const TrendingSwapItem = ({ sellTokenSymbol, buyTokenSymbol, volume }) => {
  const { splTokenList } = useTokenList();
  const findTokenIconBySymbol = (symbol) => {
    let token = splTokenList.find((elm) => elm.symbol === symbol);

    return token ? token.logoURI : "";
  };
  const history = useRouter();
  return (
    <div className="sell-item">
      <div className="left-item">
        <img
          src={findTokenIconBySymbol(sellTokenSymbol)}
          alt=""
          className="icon"
        />
        <img
          src={findTokenIconBySymbol(buyTokenSymbol)}
          alt=""
          className="icon"
        />
        <div className="token-pricing">
          <span className="name">
            {sellTokenSymbol}/{buyTokenSymbol}
          </span>
          <span className="price">${numeral(volume).format("0,0.000")}</span>
        </div>
      </div>
      <button
        className="trade-btn"
        onClick={() => {
          history.push(`/swap?tokens=${sellTokenSymbol}-${buyTokenSymbol}`);
        }}
      >
        Trade
      </button>
    </div>
  );
};

export default TrendingSwapItem;
