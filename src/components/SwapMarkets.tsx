import { PublicKey } from "@solana/web3.js";
import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import GlobalSwapContext from "../context/context/globalSwapContext";
import TokenListContext from "../context/context/tokenListContext";
import "./styles.css";
const SwapMarkets = () => {
  const { setGlobalFromMint, setGlobalToMint } = useContext(GlobalSwapContext);
  const { splTokenList } = useContext(TokenListContext);
  const locations = useLocation();
  useEffect(() => {
    // console.log("Location", locations);
  }, []);
  const setTokenMints = (fromTokenSymbol, toTokenSymbol) => {
    if (locations.pathname == "/swap") {
      let fromToken = splTokenList.find(
        (token) => token.symbol == fromTokenSymbol
      );

      let toToken = splTokenList.find((token) => token.symbol == toTokenSymbol);
      // console.log("From Token", fromToken);
      // console.log("To Token", toToken);
      if (toToken && fromToken) {
        // console.log("Found them");
        setGlobalFromMint(new PublicKey(fromToken.address));
        setGlobalToMint(new PublicKey(toToken.address));
      }
    }
  };
  return (
    <div className="swap-markets">
      <span className="swap-markets-title">Most Popular Swaps & Markets</span>
      <ul>
        <li>
          <span className="market-name">(Swap) USDC {"->"} CMFI</span>{" "}
          <Link
            to={"/swap?tokens=USDC-CMFI"}
            onClick={() => {
              setTokenMints("USDC", "CMFI");
            }}
          >
            Swap Now
          </Link>
        </li>
        <li>
          <span className="market-name">(Swap) USDC {"->"} SOL</span>{" "}
          <Link
            to={"/swap?tokens=USDC-SOL"}
            onClick={() => {
              setTokenMints("USDC", "SOL");
            }}
          >
            Swap Now
          </Link>
        </li>
        <li>
          <span className="market-name">(Swap) USDC {"->"} USDT</span>{" "}
          <Link
            to={"/swap?tokens=USDC-USDT"}
            onClick={() => {
              setTokenMints("USDC", "USDT");
            }}
          >
            Swap Now
          </Link>
        </li>
        <li>
          <span className="market-name">(Swap) USDC {"->"} UST</span>{" "}
          <Link
            to={"/swap?tokens=USDC-UST"}
            onClick={() => {
              setTokenMints("USDC", "UST");
            }}
          >
            Swap Now
          </Link>
        </li>
        <li>
          <span className="market-name">(Trade) SOL/USDC</span>{" "}
          <Link
            to={"/serum/market/9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT"}
          >
            Trade Now
          </Link>
        </li>

        <li>
          <span className="market-name">(Trade) SRM/USDC</span>{" "}
          <Link
            to={"/serum/market/ByRys5tuUWDgL73G8JBAEfkdFf8JWBzPBDHsBVQ5vbQA"}
          >
            Trade Now
          </Link>
        </li>
        <li id="last">
          <span className="market-name">(Trade) RAY/USDC</span>{" "}
          <Link
            to={"/serum/market/2xiv8A5xrJ7RnGdxXB42uFEkYHJjszEhaJyKKt4WaLep"}
          >
            Trade Now
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SwapMarkets;
