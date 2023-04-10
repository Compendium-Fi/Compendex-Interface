import { Modal, ScrollArea } from "@mantine/core";
import numeral from "numeral";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import ModalTickerHistoryChart from "./ModalTickerHistoryChart";

import { useTokenList } from "@/context/tokenList";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCommonStyles, usePopStyles } from "./styles";
const TickerItem = ({ elm }) => {
  const [open, setOpen] = useState(false);
  const [favTokenList, setFavTokenList] = useState([]);
  const { connected, publicKey } = useWallet();
  const { splTokenList } = useTokenList();
  const { classes } = useCommonStyles();
  const { classes: popClasses } = usePopStyles();
  const [watchList, setWatchList, { isPersistent }] = useLocalStorageState(
    "watchList",
    {
      defaultValue: null,
      storageSync: true,
    }
  );

  const addTokenToWatchList = (elm) => {
    const token = splTokenList.find(
      (tkn) => tkn.symbol.toUpperCase() == elm.symbol.toUpperCase()
    );

    if (token) {
      const exist = favTokenList.find((elm) => elm.symbol == token.symbol);
      if (exist) {
        const filterList = favTokenList.filter(
          (elm) => elm.symbol !== token.symbol
        );
        setFavTokenList(filterList);
      } else {
        setFavTokenList([...favTokenList, token]);
      }
    }

    // let list = localStorage.getItem("watchList");
    if (connected && publicKey) {
      if (watchList && watchList[`${publicKey.toBase58()}`]) {
        let parsedList = watchList;
        const exist = watchList[`${publicKey.toBase58()}`].find(
          (elm) => elm.symbol == token.symbol
        );
        if (exist) {
          parsedList[`${publicKey.toBase58()}`] = watchList[
            `${publicKey.toBase58()}`
          ].filter((elm) => elm.symbol !== token.symbol);
        } else {
          parsedList[`${publicKey.toBase58()}`] = [
            ...watchList[`${publicKey.toBase58()}`],
            token,
          ];
        }

        setWatchList(parsedList);
      } else {
        let newList = {};
        newList[`${publicKey.toBase58()}`] = [token];
        setWatchList(newList);
      }
    }
  };
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal yOffset={20}
        centered
        withCloseButton={false}
        title={false}
        opened={open}
        onClose={() => setOpen(false)}
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        scrollAreaComponent={ScrollArea.Autosize}
        styles={{
          root: { marginTop: "30", marginBottom: "-150px", zIndex: 99999 },
          content: {
            backgroundColor: "rgb(3, 10, 19)",
            borderStyle: "solid",
            borderWidth: "2px",
            borderColor: "rgb(19, 34, 53)",
            borderRadius: "3px",
            width: "calc(100%-20px)",
            maxWidth: "600px",
            minWidth: "320px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
            marginTop: "2em",
            maxHeight:"700px"
          },

        }}
        size="lg"
      >
        <div className={popClasses.tokenPopHeader}>
          <div className={popClasses.tokenItem}>
            <img src={elm.image} alt="" className={popClasses.tokenImg} />
            <div className={popClasses.tokenName}>
              <span className={popClasses.tokenNameText}>{elm.name}</span>
              <span className={popClasses.tokenSymbolText}>
                ({elm.symbol.toUpperCase()})
              </span>
            </div>
          </div>
          <div className={popClasses.pricing}>
            <span className={popClasses.usdPrice}>${elm.current_price}</span>
            <span
              className={
                elm.market_cap_change_percentage_24h > 0
                  ? classes.percentagePlus
                  : classes.percentageMinus
              }
            >
              {elm.market_cap_change_percentage_24h > 0 ? "+" : ""}
              {elm.market_cap_change_percentage_24h.toFixed(3)}%
            </span>
          </div>
        </div>
        <button
          className={popClasses.addWatchlistButton}
          onClick={() => addTokenToWatchList(elm)}
        >
          Add {elm.name} to Watchlist
        </button>
        <p className={popClasses.tokenDescription}>
          Today's {elm.name} price is $
          {numeral(elm.current_price).format("0,0.000")} representing a{" "}
          {elm.market_cap_change_percentage_24h.toFixed(3)}% over the last 24
          hours. {elm.name}'s market cap is currently $
          {numeral(elm.market_cap).format("0,0.000")}. It has a current market
          cap ranking of {elm.market_cap_rank} with a circulating supply of
          {` ${numeral(elm.circulating_supply).format("0,0")}`}{" "}
          {elm.symbol.toUpperCase()}.
        </p>
        <ModalTickerHistoryChart tokenId={elm.id} />
        <div className="token-item-details">
          <div className="elm-row">
            <div className="elm">
              <span className="elm-title">Market Cap $USD</span>
              <span className="value">
                ${numeral(elm.market_cap).format("0,0")}
              </span>
            </div>
            <div className="elm">
              <span className="elm-title">Fully Diluted Market Cap</span>
              <span className="value">
                ${numeral(elm.fully_diluted_valuation).format("0,0")}
              </span>
            </div>
          </div>
          <div className="elm-row">
            <div className="elm">
              <span className="elm-title">Volume (24H)</span>
              <span className="value">
                ${numeral(elm.total_volume).format("0,0")}
              </span>
            </div>
            <div className="elm">
              <span className="elm-title">Circulating Supply</span>
              <span className="value">
                {numeral(elm.circulating_supply).format("0,0")}{" "}
                {elm.symbol.toUpperCase()}
              </span>
            </div>
          </div>
          <div className="elm-row">
            <div className="elm">
              <span className="elm-title">Total Supply</span>
              <span className="value">
                {" "}
                {numeral(elm.total_supply).format("0,0")}{" "}
                {elm.symbol.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
        <div className={popClasses.modalTokenFooter}>
          <button
            className={popClasses.addWatchlistButton}
            onClick={() => {
              window.open(
                `https://compendium.finance/coin-price-chart?coin=${elm.id}`,
                "_blank"
              );
            }}
          >
            View {elm.name} On Compendium
          </button>
          <button
            className={popClasses.viewCoingeckoButton}
            onClick={() => {
              window.open(
                `https://www.coingecko.com/en/coins/${elm.id}`,
                "_blank"
              );
            }}
          >
            View {elm.name} On CoinGecko
          </button>
          <button
            className={popClasses.viewCompendiumButton}
            onClick={() => {
              setOpen(false);
            }}
          >
            Close This Window
          </button>
        </div>
      </Modal>
      <div
        className="sol-price-card"
        key={elm.id}
        onClick={() => {
          setOpen(true);
        }}
      >
        <span id="token">{elm.symbol.toUpperCase()}</span>
        <span id="usd-price">{elm.current_price}</span>
        <span
          id="percentage"
          className={
            elm.market_cap_change_percentage_24h > 0
              ? classes.percentagePlus
              : classes.percentageMinus
          }
        >
          {elm.market_cap_change_percentage_24h > 0 ? "+" : ""}
          {elm.market_cap_change_percentage_24h.toFixed(3)}%
        </span>
      </div>
    </>
  );
};

export default TickerItem;
