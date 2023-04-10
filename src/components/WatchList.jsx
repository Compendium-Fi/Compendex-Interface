import React, { useEffect, useState, useContext } from "react";

//import { useWallet } from "../Serum/utils/wallet";
import useLocalStorageState from "use-local-storage-state";
import { fetchTokenPrice } from "../utils/tokenApi";
import numeral from "numeral";

import { useWallet } from "@solana/wallet-adapter-react";
import { useTokenList } from "@/context/tokenList";
import { useRouter } from "next/router";
const WatchList = () => {
  const { splTokenList } = useTokenList();
  const [watchList, setWatchList, { isPersistent }] = useLocalStorageState(
    "watchList",
    {
      defaultValue: null,
      storageSync: true
    }
  );
  const [favList, setFavList] = useState([]);
  const { connected, wallet, publicKey } = useWallet();
  const history = useRouter();
  const findTokenIconBySymbol = (symbol) => {
    let token = splTokenList.find((elm) => elm.symbol === symbol);

    return token ? token.logoURI : "";
  };
  const initFavList = async () => {
    const list = localStorage.getItem("watchList");
    const parsedList = JSON.parse(list);
    if (parsedList && connected) {
      const userList = parsedList[`${publicKey.toBase58()}`];
      if (userList) {
        const result = userList.map(async (tkn) => {
          let { marketData } = await fetchTokenPrice(
            tkn.extensions.coingeckoId
          );
          return { ...tkn, currentBalance: marketData.current_price.usd };
        });
        const mappedList = await Promise.all(result);

        setFavList(mappedList);
      }
    }
  };
  useEffect(() => {
    initFavList();
  }, [connected, watchList]);
  return (
    <div className="inner-tab-container" style={{ padding: "0.7em" }}>
      {favList.map((elm) => (
        <div className="sell-item">
          <div className="left-item">
            <img
              src={findTokenIconBySymbol(elm.symbol)}
              alt=""
              className="icon"
            />

            <div className="token-pricing">
              <span className="name">
                {elm.name}({elm.symbol})
              </span>
              <span className="price">
                $
                {`
                          ${numeral(Number(elm.currentBalance)).format(
                  "0,0.000"
                )}
                           `}
              </span>
            </div>
          </div>
          <button
            className="trade-btn"
            onClick={() => {
              history.push(`/swap?tokens=USDC-${elm.symbol}`);
            }}
          >
            Swap
          </button>
        </div>
      ))}
    </div>
  );
};

export default WatchList;
