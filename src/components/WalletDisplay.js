import { useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import ApexCharts from "apexcharts";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import walletIcon from "../assets/img/Compendium_Finance_Wallet_Overview_Image.png";
import TokenListContext from "../context/context/tokenListContext";
import WalletConnect from "../Serum/components/WalletConnect";
//import { useWallet } from "../Serum/utils/wallet";
import { fetchTokenPrice } from "../utils/tokenApi";
const WalletDisplay = () => {
  const { splTokenList } = useContext(TokenListContext);
  const [currentBalance, setCurrentBalance] = useState([]);
  const { wallet, connected, publicKey } = useWallet();
  useEffect(() => {
    if (connected && publicKey) {
      getTotalWalletBalance(publicKey.toBase58());
    } else {
      setCurrentBalance([]);
    }
  }, [connected]);

  const getTotalWalletBalance = async (address) => {
    try {
      const result = await axios.get(
        `https://api.solanabeach.io/v1/account/${address}/tokens`,
        {
          headers: {
            Authorization: "Bearer 262439f4-f901-422b-b248-b45c08577071"
          }
        }
      );
      let totalBalance = result.data;

      let displayedResult = totalBalance.map(async (elm) => {
        let token = splTokenList.find((tkn) => {
          return tkn.address == elm.mint.address;
        });
        if (token && token.extensions.coingeckoId) {
          let tokenPrice = await fetchTokenPrice(token.extensions.coingeckoId);
          let blc = elm.amount / Math.pow(10, token.decimals);

          let currentPrice = tokenPrice.marketData.current_price.usd * blc;
          return {
            image: tokenPrice.image,
            symbol: tokenPrice.symbol,
            name: tokenPrice.name,
            id: tokenPrice.id,
            balance: blc,
            balanceUsd: currentPrice
          };
        } else {
          return null;
        }
      });
      let finalResult = await Promise.all(displayedResult);
      let filtredResult = finalResult.filter((elm) => elm != null);
      let totalSol = await totalSolBalance(address);
      // console.log("TOTAL SOL", totalSol);
      let total = [...filtredResult, totalSol];
      setCurrentBalance(total);
    } catch (error) {
      console.log("ERROR", error.message);
    }
  };

  const totalSolBalance = async (address) => {
    try {
      const result = await axios.get(
        `https://api.solanabeach.io/v1/account/${address}`,
        {
          headers: {
            Authorization: "Bearer 262439f4-f901-422b-b248-b45c08577071"
          }
        }
      );
      if (result.data) {
        let solBalance = result.data.value.base.balance / LAMPORTS_PER_SOL;
        let tokenPrice = await fetchTokenPrice("solana");
        let currentPrice = tokenPrice.marketData.current_price.usd * solBalance;
        return {
          image: tokenPrice.image,
          symbol: tokenPrice.symbol,
          name: tokenPrice.name,
          id: tokenPrice.id,
          balance: solBalance,
          balanceUsd: currentPrice
        };
      } else {
        return {
          image: "",
          symbol: "",
          name: "",
          id: "",
          balance: "",
          balanceUsd: ""
        };
      }
    } catch (error) {}
  };

  const renderTotalChart = () => {
    var options = {
      series:
        currentBalance.length != 0
          ? currentBalance
              .sort((a, b) => a.balanceUsd > b.balanceUsd)
              .map((elm) => {
                return Number(elm.balanceUsd.toFixed(2));
              })
          : [],
      chart: {
        height: "100%",
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px"
            },
            value: {
              fontSize: "20px",
              formatter: function (val, opts) {
                // console.log("OPTS", opts);
                return `$${val}`;
              }
            },
            total: {
              show: false
            }
          }
        }
      },
      colors: currentBalance.map(
        (elm) =>
          "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
      ),
      labels:
        currentBalance.length != 0
          ? currentBalance
              .sort((a, b) => a.balanceUsd > b.balanceUsd)
              .map((elm) => {
                return elm.symbol.toUpperCase();
              })
          : []
    };

    var chart = document.querySelector("#chart-total-balance");
    if (chart != null) {
      while (chart.firstChild) {
        chart.firstChild.remove();
      }

      new ApexCharts(chart, options).render();
    }
  };
  // useMemo(() => {
  //   renderTotalChart();
  // }, [currentBalance]);
  const calculteTotalBalance = () => {
    let sum = 0;
    currentBalance.forEach((elm) => {
      if (elm) {
        sum = elm.balanceUsd + sum;
      }
    });
    return sum;
  };
  return (
    <div
      className="card card_widget text-center new-background"
      style={{
        padding: "32px",
        borderRadius: "24px"
      }}
    >
      <div className="card__next"></div>
      <div className="card__chart card__chart_total-balance">
        <div>
          <img src={walletIcon} />
        </div>
      </div>
      <div className="card__inner">
        <div
          className="card__title h6"
          style={{
            fontSize: "18px",
            lineHeight: "1.33333",
            fontFamily: "Poppins",
            fontWeight: "500"
          }}
        >
          Connected Balance
        </div>
        <div className="card__currency">
          {connected
            ? `${publicKey.toBase58().substr(0, 4)}...${publicKey
                .toBase58()
                .substr(publicKey.toBase58().length - 4, 4)}`
            : ""}
        </div>
        <div
          className="card__number h4"
          style={{
            fontSize: "32px",
            lineHeight: 1.25,
            letterSpacing: "-.5px",
            fontWeight: 500
          }}
        >
          ${calculteTotalBalance().toFixed(3)}
        </div>
        <div
          className="card__price h6 color-green"
          style={{
            fontSize: "18px",
            lineHeight: 1.33333,
            fontWeight: 500
          }}
        >
          0 CMFI
        </div>
        {connected ? (
          <Link
            to={`/explorer/address/${publicKey.toBase58()}`}
            className="card__btn btn btn_blue_connect"
            style={{ fontSize: "12px !important" }}
          >
            View On Network Explorer
          </Link>
        ) : (
          <WalletConnect />
        )}
      </div>
    </div>
  );
};

export default WalletDisplay;
