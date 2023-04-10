import { useTokenList } from "@/context/tokenList";
import { useRouter } from "next/router";
import numeral from "numeral";

const SellBuyItem = ({ tokenSymbol, volume, side }) => {
  const { splTokenList } = useTokenList();
  const findTokenIconBySymbol = (symbol) => {
    let token = splTokenList.find((elm) => elm.symbol === symbol);

    return token ? token.logoURI : "";
  };
  const history = useRouter();
  const handleSwap = () => {
    if (tokenSymbol !== "USDC" && tokenSymbol !== "USDT") {
      if (side === "buy") {
        history.push(`/swap?tokens=USDC-${tokenSymbol}`);
      } else {
        history.push(`/swap?tokens=${tokenSymbol}-USDC`);
      }
    } else {
      if (tokenSymbol === "USDT") {
        if (side === "buy") {
          history.push(`/swap?tokens=USDC-${tokenSymbol}`);
        } else {
          history.push(`/swap?tokens=${tokenSymbol}-USDC`);
        }
      } else {
        if (side === "buy") {
          history.push(`/swap?tokens=USDT-${tokenSymbol}`);
        } else {
          history.push(`/swap?tokens=${tokenSymbol}-USDT`);
        }
      }
    }
  };
  return (
    <div className="sell-item">
      <div className="left-item">
        <img src={findTokenIconBySymbol(tokenSymbol)} alt="" className="icon" />

        <div className="token-pricing">
          <span className="name">{tokenSymbol}</span>
          <span className="price">${numeral(volume).format("0,0.000")}</span>
        </div>
      </div>
      <button className="trade-btn" onClick={handleSwap}>
        Trade
      </button>
    </div>
  );
};

export default SellBuyItem;
