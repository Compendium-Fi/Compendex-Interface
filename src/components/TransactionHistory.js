import React, { useEffect, useState } from "react";
import {
  useAccountHistory,
  useFetchAccountHistory
} from "../explorer/providers/accounts/history";
//import { getTransactionRows } from "../explorer/components/account/HistoryCardComponents";
import { useWallet } from "../Serum/utils/wallet";
import yesIcon from "../assets/img/yes.png";
import noIcon from "../assets/img/no.png";
import Moment from "react-moment";
import {Link} from 'react-router-dom'
const TransactionHistory = ({ address }) => {
  const fetchHistory = useFetchAccountHistory();
  const history = useAccountHistory(address.toBase58());
  useEffect(() => {
    fetchHistory(address, true);
  }, [address]);
  const transactionRows = React.useMemo(() => {
    if (history?.data?.fetched) {
      return getTransactionRows(history.data.fetched);
    }
    return [];
  }, [history]);

  return (
    <div
      className="card_activities"
      style={{
        border: "none",
        backgroundColor: "transparent"
      }}
    >
      <div className="card__head">
        <div
          className="card__title h6"
          style={{
            fontSize: "18px",
            lineHeight: "1.33333"
          }}
        >
          Latest Activities
        </div>
        <div className="dropdown">
          <button className="dropdown__head">
            <svg className="icon icon-dots">
              <use xlinkHref="img/sprite.svg#icon-dots" />
            </svg>
          </button>
          <div className="dropdown__body">
            <a className="dropdown__link selected" href="#">
              Latest Activities
            </a>
            <a className="dropdown__link" href="#">
              New Activities
            </a>
            <a className="dropdown__link" href="#">
              Old Activities
            </a>
            <a className="dropdown__link" href="#">
              All Activities
            </a>
          </div>
        </div>
      </div>
      <div className="card__list">
        {transactionRows.slice(0, 5).map((elm, ind) => (
          <div className="card__item" key={ind.toString()}>
            <div
              className={`card__icon  ${
                elm.statusText.toUpperCase() == "Success".toUpperCase()
                  ? "bg-green"
                  : "bg-red"
              } `}
            >
              {elm.statusText.toUpperCase() == "Success".toUpperCase() ? (
                <img src={yesIcon} style={{ height: "30px", width: "30px" }} />
              ) : (
                <img src={noIcon} style={{ height: "30px", width: "30px" }} />
              )}
            </div>
            <div className="card__details">
              <div className="card__line">
                <div className="card__category">Transaction</div>
                <div className="card__date">
                  <Moment date={elm.signatureInfo.blockTime * 1000} fromNow />
                </div>
              </div>
              <div
                className={`card__status ${
                  elm.statusText.toUpperCase() == "Success".toUpperCase()
                    ? "color-green"
                    : "color-red"
                }`}
              >
                {elm.statusText}
              </div>
              <div className="card__price">{`${elm.signature.substring(
                0,
                10
              )}...`}</div>
            </div>
          </div>
        ))}
      </div>
      <Link
        className="card__view"
        to={`/explorer/address/${address.toBase58()}`}
      >
        <div className="card__arrow">
          <svg className="icon icon-arrow-right">
            <use xlinkHref="img/sprite.svg#icon-arrow-right" />
          </svg>
        </div>
        View on Explorer
      </Link>
    </div>
  );
};

export default TransactionHistory;
