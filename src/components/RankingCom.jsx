import { ArrowRightAltSharp } from "@material-ui/icons";
import { PublicKey } from "@solana/web3.js";
import { Col, Row } from "antd";
import moment from "moment";
import numeral from "numeral";
import { useContext, useState } from "react";
import styled, { css } from "styled-components";
import GlobalSwapContext from "../context/context/globalSwapContext";
import TokenListContext from "../context/context/tokenListContext";
import TokenRankingContext from "../context/context/tokenRankingContext";
import FloatingElementBlock from "../Serum/components/layout/FloatingElementBlock";

import { useSwapContext } from "../swap-ui";
const Title = styled.div`
  color: rgba(255, 255, 255, 1);
  margin-bottom: 1.2em;
`;

const SizeTitle = styled(Row)`
  /* padding: 0px 0 14px; */
  color: #acacad;
`;

const MarkPriceTitle = styled(Row)`
  padding: 8px 0 14px;
  font-weight: 700;
  border-top: 1px solid #acacad;
  border-bottom: 1px solid #acacad;
`;

const Line = styled.div`
  text-align: left;
  float: left;
  height: 100%;
  ${(props) =>
    props["data-width"] &&
    css`
      width: ${props["data-width"]};
    `}
  ${(props) =>
    props["data-bgcolor"] &&
    css`
      background-color: ${props["data-bgcolor"]};
    `}
`;

const Price = styled.div`
  position: absolute;
  right: 5px;
  color: white;
  top: 5px;
`;

const RankingComponent = ({ smallScreen }) => {
  const [prices, setPrices] = useState([]);

  const { list } = useContext(TokenRankingContext);
  const { splTokenList } = useContext(TokenListContext);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const getTokenImageBySymbol = (symbol) => {
    let token = splTokenList.find((elm) => elm.symbol == symbol);
    // console.log("Token", token);
    if (token) {
      return token.logoURI;
    } else {
      return null;
    }
  };
  // const getTransactionHistory = async () => {
  //   try {
  //     if (connected) {
  //       let { data } = await axios.get(
  //         `https://stats.jup.ag/transactions?publicKey=${publicKey.toBase58()}`
  //       );
  //       console.log("Data", data);
  //     }
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };
  // useEffect(() => {
  //   getTransactionHistory();
  // }, [connected]);

  return (
    <FloatingElementBlock
      className="order_book new-background"
      style={
        smallScreen
          ? {
              flex: 1,

              padding: "0 !important",
              borderRadius: "5px !important",
              boxShadow: "rgba(15, 23, 42, 0.3) 0px 4px 16px 2px",
              backgroundColor: "#0f172a !important",
              borderWidth: "2px",
              border: "solid 2px rgba(51, 66, 87, 0.6)",
              height: "560px",
              width: "100%"

              // border: "2px solid rgba(170, 170, 170, 0.2)",
              // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            }
          : {
              overflow: "hidden",

              boxSizing: "border-box",
              // background:"linear-gradient(180deg, rgba(45, 45, 50, 0.1) 0%, rgba(27, 27, 31, 0.6) 100%)",
              // border: "2px solid rgba(228, 228, 228, 0.1)",
              borderRadius: "5px !important",
              boxShadow: "rgba(15, 23, 42, 0.3) 0px 4px 16px 2px",
              backgroundColor: "#0f172a !important",
              borderWidth: "2px",
              border: "solid 2px rgba(51, 66, 87, 0.6)",
              width: "100%",
              // maxWidth:"40px",
              height: "560px",
              borderRadius: "10px"
            }
      }
    >
      <SizeTitle
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // gap: "40px",
          paddingRight: "1.5em",
          paddingLeft: "1.3em"
        }}
      >
        <Col
          style={{
            fontFamily: "Poppins",
            fontSize: "15px",
            lineHeight: "24px",
            marginTop: "0.3em",
            letterSpacing: "1px",

            color: "rgba(226, 232, 240, 0.51)"
          }}
        >
          Swap History
        </Col>
      </SizeTitle>
      <div style={{ width: "100%", height: "100%", overflowY: "auto" }}>
        {list &&
          list
            .sort((a, b) => {
              if (
                new Date(a.timestamp).getTime() >
                new Date(b.timestamp).getTime()
              ) {
                return 1;
              } else {
                return -1;
              }
            })
            .slice(0, 20)
            .map((elm) => (
              <div
                style={{
                  borderStyle: "solid",
                  borderWidth: "2px",
                  borderColor: "rgba(51, 66, 87, 0.6)",
                  borderRadius: "5px",
                  boxShadow: "rgb(15 23 42 / 30%) 0px 4px 16px 2px",
                  backgroundColor: "rgba(51, 65, 85, 0.3)",
                  height: "100px",
                  width: "90%",
                  margin: "20px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "10px",
                  flexDirection: "column"
                }}
              >
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "12px",
                    lineHeight: "32px",
                    display: "flex",
                    alignItems: "center",
                    color: "rgba(226, 232, 240, 0.51)",
                    alignSelf: "flex-end",
                    marginRight: "0.4em"
                  }}
                >
                  {moment(elm.timestamp).fromNow()}{" "}
                </span>
                <div style={{ display: "flex", alignSelf: "center" }}>
                  <span>
                    {getTokenImageBySymbol(elm.inSymbol) && (
                      <img
                        src={getTokenImageBySymbol(elm.inSymbol)}
                        style={{
                          width: "30px",
                          height: "30px",
                          objectFit: "contain",
                          marginRight: "0.3em"
                        }}
                      />
                    )}
                    {numeral(elm.inAmountInDecimal).format("0,0.000")}{" "}
                    {elm.inSymbol}
                  </span>
                  <ArrowRightAltSharp />
                  <span>
                    {getTokenImageBySymbol(elm.outSymbol) && (
                      <img
                        src={getTokenImageBySymbol(elm.outSymbol)}
                        style={{
                          width: "30px",
                          height: "30px",
                          objectFit: "contain",
                          marginRight: "0.3em"
                        }}
                      />
                    )}
                    {numeral(elm.outSymbol).format("0,0.000")} {elm.outSymbol}
                  </span>
                </div>
              </div>
            ))}
      </div>
    </FloatingElementBlock>
  );
};
{
  /* <DisplayRow
key={elm.todayRank.toString()}
rank={elm.todayRank}
ticker={elm.symbol}
price={elm.price.live}
/> */
}
const DisplayRow = ({ price, ticker, rank }) => {
  const { splTokenList } = useContext(TokenListContext);
  const { setGlobalFromMint } = useContext(GlobalSwapContext);
  const { fromMint, setFromMint, setToMint, toMint } = useSwapContext();
  const setTicker = (ticker) => {
    let token = splTokenList.find((elm) => elm.symbol == ticker);
    if (token) {
      setGlobalFromMint(new PublicKey(token.address));
      setFromMint(new PublicKey(token.address));
    }
  };
  return (
    <Row
      // ref={element}
      style={{
        marginBottom: 1,
        paddingLeft: "0.2em",
        paddingRight: "0.2em",
        height: "31px"
      }}
      // onClick={onSizeClick}
    >
      <Col
        span={8}
        style={{
          textAlign: "left",
          alignItems: "flex-start"
        }}
      >
        <Price
          style={{
            left: 20,
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "16px"
          }}
        >
          {rank}
        </Price>
      </Col>
      <Col
        span={8}
        style={{
          textAlign: "center",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "16px",
          marginTop: "10px"
        }}
      >
        <button
          className="btn_ticker"
          onClick={() => {
            setTicker(ticker);
          }}
        >
          {ticker}
        </button>
      </Col>
      <Col
        span={8}
        style={{
          textAlign: "center",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "16px",
          marginTop: "10px"
        }}
      >
        ${numeral(Number(price)).format("0,0.0000")}
      </Col>
    </Row>
  );
};

export default RankingComponent;
