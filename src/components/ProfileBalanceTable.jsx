import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { Table } from "antd";
import numeral from "numeral";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//import "./margin.css";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { useSelector } from "react-redux";
import TokenListContext from "../context/context/tokenListContext";
import { useConnection } from "../Serum/utils/connection";
//import { useWallet } from "../Serum/utils/wallet";
import { getUserTokenInfoCoinGecko } from "../utils/tokenApi";
import { useWallet } from "@solana/wallet-adapter-react";
const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const toFixed = (x) => {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split("e-")[1]);
    if (e) {
      x *= Math.pow(10, e - 1);
      x = "0." + new Array(e).join("0") + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split("+")[1]);
    if (e > 20) {
      e -= 20;
      x /= Math.pow(10, e);
      x += new Array(e + 1).join("0");
    }
  }
  return x;
};
const ProfileBalanceTable = () => {
  const { wallet, connected, publicKey } = useWallet();
  const [userBalance, setUserBalance] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [totalSolBalance, setTotalSolBalance] = useState(0);
  const [mainSolBalance, setSolBalance] = useState(0);
  const connection = useConnection();
  const { splTokenList } = useContext(TokenListContext);
  const { list } = useSelector((state) => state.tokenPrice);
  const query = useQuery();

  // const getPercentage = (amount, totalBalance) => {
  //   let percentage = (amount / totalBalance) * 100;

  //   if (isNaN(percentage)) {
  //     return 0;
  //   } else {
  //     return percentage;
  //   }
  // };
  // const expandable = {
  //   expandedRowRender: (record) => {
  //     return (
  //       <Progress
  //         style={{ maxWidth: "93%", marginLeft: "3.2em" }}
  //         strokeLinecap="square"
  //         percent={getPercentage(
  //           Number(record.tokenAmount) * Number(record.tokenUSDPrice),
  //           totalBalance
  //         ).toFixed(2)}
  //       />
  //     );
  //   },
  //   defaultExpandAllRows: true,
  // };
  const getUserTokenInfo = async (pubkey) => {
    if (splTokenList.length != 0) {
      const accounts = await connection.getParsedProgramAccounts(
        TOKEN_PROGRAM_ID,
        {
          filters: [
            {
              dataSize: 165
            },
            {
              memcmp: {
                offset: 32,
                bytes: pubkey.toBase58()
              }
            }
          ]
        }
      );

      let userTokens = accounts.map((account) => {
        let selectedToken = splTokenList.find(
          (token) =>
            token.address == account.account.data["parsed"]["info"]["mint"]
        );
        if (selectedToken) {
          return {
            userAddress: account.pubkey.toString(),
            mintAddress: account.account.data["parsed"]["info"]["mint"],
            tokenAmount:
              account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"],
            tokenSymbol: selectedToken.symbol,
            tokenName: selectedToken.name,
            tokenDecimals: selectedToken.decimals,
            tokenImage: selectedToken.logoURI,
            extensions: selectedToken.extensions
          };
        } else {
          return null;
        }
      });
      let solInfo = splTokenList.find((elm) => elm.symbol == "SOL");

      let balance = await connection.getBalance(pubkey);
      let solBalance = balance / LAMPORTS_PER_SOL;
      setSolBalance(solBalance);
      let userSol = {
        userAddress: pubkey.toBase58(),
        mintAddress: solInfo.address,
        tokenAmount: solBalance,
        tokenSymbol: solInfo.symbol,
        tokenName: solInfo.name,
        tokenDecimals: solInfo.decimals,
        tokenImage: solInfo.logoURI,
        extensions: solInfo.extensions
      };
      let finalUserTokens = [...userTokens, userSol];
      let finalTokens = finalUserTokens.filter((elm) => elm != null);
      let coingeckoIds = finalTokens
        .map((elm) =>
          elm.extensions && elm.extensions
            ? elm.extensions.coingeckoId
            : undefined
        )
        .filter((elm) => elm != undefined);

      let priceList = await getUserTokenInfoCoinGecko(coingeckoIds);
      if (priceList) {
        let finalPrice = finalTokens.map((elm) => {
          let tokenInfo;
          if (elm.extensions && elm.extensions.coingeckoId) {
            tokenInfo = priceList.find(
              (tkn) => tkn.id == elm.extensions.coingeckoId
            );
          }

          if (tokenInfo) {
            return {
              ...elm,
              tokenUSDPrice: tokenInfo.market_data.current_price.usd,
              priceChange: tokenInfo.market_data.price_change_24h
            };
          } else {
            return {
              ...elm,
              tokenUSDPrice: null,
              priceChange: null
            };
          }
        });

        let total = 0;
        finalPrice.forEach((elm) => {
          if (Number(elm.tokenAmount) * Number(elm.tokenUSDPrice) > 0) {
            total = Number(elm.tokenAmount) * Number(elm.tokenUSDPrice) + total;
          }
        });
        if (list.length != 0) {
          let solPrice = list.find((elm) => elm.symbol == "SOL").value;

          setTotalSolBalance(total / solPrice);
        }

        setTotalBalance(total);
        setUserBalance(
          finalPrice.sort((a, b) => {
            if (
              Number(a.tokenAmount) * Number(a.tokenUSDPrice) >
              Number(b.tokenAmount) * Number(b.tokenUSDPrice)
            ) {
              return -1;
            } else {
              return 1;
            }
          })
        );
      }
    }
  };
  useEffect(() => {
    let adr = query.get("address");
    if (adr) {
      getUserTokenInfo(new PublicKey(adr));
    } else if (connected && !adr) {
      getUserTokenInfo(publicKey);
    }
  }, [connected, query, splTokenList, list]);

  const columns = [
    {
      title: "ASSET",
      dataIndex: "tokenName",
      width: 250,

      render: (text, record) => {
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start"
            }}
          >
            <img
              src={record.tokenImage}
              style={{
                width: 30,
                height: 30,
                objectFit: "contain",
                marginRight: "1em"
              }}
            />
            <a
              href={`https://solscan.io/account/${record.userAddress}`}
              target="_blank"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column"
              }}
            >
              <span
                style={{
                  color: "12px"
                }}
              >
                {text}
              </span>
              <span
                style={{
                  color: "12px"
                }}
              >
                {`${record.userAddress.slice(
                  0,
                  4
                )}...${record.userAddress.slice(-4)}`}
              </span>
            </a>
          </div>
        );
      }
    },
    {
      title: "SYMBOL",
      dataIndex: "tokenSymbol",

      render: (text, record) => {
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start"
            }}
          >
            {/* <img
              src={record.tokenImage}
              style={{
                width: 30,
                height: 30,
                objectFit: "contain",
                marginRight: "1em",
              }}
            /> */}
            <span>{text}</span>
          </div>
        );
      }
    },

    {
      title: "QUANTITY",
      dataIndex: "tokenAmount",
      render: (text) => {
        if (Number(text) < 0) {
          return <span>N/A</span>;
        } else {
          return (
            <span>
              {!isNaN(Number(text))
                ? numeral(Number(text).toFixed(3)).format("0,0.00")
                : 0}
            </span>
          );
        }
      },
      sorter: (a, b) => Number(a.tokenAmount) - Number(b.tokenAmount)
    },

    {
      title: "PRICE",
      dataIndex: "tokenUSDPrice",
      defaultSortOrder: "descend",

      render: (text) => {
        if (Number(text) < 0) {
          return <span>N/A</span>;
        } else {
          return (
            <span>
              ${" "}
              {!isNaN(Number(text))
                ? numeral(Number(text).toFixed(3)).format("0,0.00")
                : 0}
            </span>
          );
        }
      },
      sorter: (a, b) => Number(a.Liquidity) - Number(b.Liquidity)
    },
    {
      title: "CHANGE",
      dataIndex: "priceChange",
      defaultSortOrder: "descend",

      render: (text) => {
        if (text == null || text == undefined) {
          return <span>N/A</span>;
        } else {
          return (
            <span
              style={{
                color: Number(text) < 0 ? "red" : "green",
                alignSelf: "flex-start"
              }}
            >
              {Number(text) < 0 ? "↓" : "↑"}
              {!isNaN(Number(text))
                ? numeral(Number(text).toFixed(6))
                    .format("0,0.00")
                    .replace("-", "")
                : 0}
              %
            </span>
          );
        }
      },
      sorter: (a, b) => Number(a.Liquidity) - Number(b.Liquidity)
    },
    {
      title: "VALUE",
      dataIndex: "tokenAmount",
      defaultSortOrder: "descend",

      // width: 100,
      sorter: (a, b) => {
        if (
          Number(a.tokenAmount) * Number(a.tokenUSDPrice) >
          Number(b.tokenAmount) * Number(b.tokenUSDPrice)
        ) {
          return 1;
        } else {
          return -1;
        }
      },
      render: (text, record) => {
        let value = Number(record.tokenAmount) * Number(record.tokenUSDPrice);
        // console.log(`Value for ${record.tokenSymbol}`, value.toFixed(2));
        if (value > 0) {
          return (
            <span>${numeral(Number(value.toFixed(3))).format("0,0.00")}</span>
          );
        } else {
          return <span>N/A</span>;
        }
      }
    }
  ];

  if (userBalance.length == 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          <span
            style={{
              alignSelf: "flex-end",
              fontSize: 17,
              marginTop: "0.3em",
              color: "rgba(241,241,241,0.5)"
            }}
          >
            SOL Balance: {mainSolBalance} ◎
          </span>
        </div>
        <div
          style={{
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            gap: "30px",
            display: "flex",
            marginTop: "10px",
            flexWrap: "wrap"
          }}
        >
          <div className="balance-div">
            <span id="title">Networth ($USD Value)</span>
            <span id="balance_price">
              ${numeral(totalBalance).format("0,0.000")}
            </span>
          </div>
          <div className="balance-div">
            <span id="title">Networth (◎SOL Value)</span>
            <span id="balance_price">◎ {totalSolBalance}</span>
          </div>
        </div>

        <Table
          // tableLayout="fixed"
          columns={columns}
          loading
          className="list-item-anayltics data-table"
          style={{ paddingBottom: "0px !important" }}
        />
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <span
            style={{ alignSelf: "flex-end", fontSize: 17, marginTop: "0.3em" }}
          >
            SOL Balance: {mainSolBalance} ◎
          </span>
        </div>
        <div
          style={{
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            gap: "30px",
            display: "flex",
            marginTop: "10px"
          }}
        >
          <div className="balance-div">
            <span id="title">Networth ($USD Value)</span>
            <span id="balance_price">
              ${numeral(totalBalance).format("0,0.000")}
            </span>
          </div>
          <div className="balance-div">
            <span id="title">Networth (◎SOL Value)</span>
            <span id="balance_price">
              ◎ {numeral(totalSolBalance).format("0,0.000")}
            </span>
          </div>
        </div>
        <Table
          // expandable={expandable}
          columns={columns}
          dataSource={userBalance}
          className="list-item-anayltics data-table "
          style={{ paddingBottom: "0px !important" }}
          // defaultExpandAllRows={true}
          key="loading-done"
          scroll={{ y: 400, x: false }}
          size="large"
        />
      </div>
    );
  }
};

export default ProfileBalanceTable;
