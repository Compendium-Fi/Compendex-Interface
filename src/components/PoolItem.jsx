import React, { useState } from "react";
// import piggy from "../assets/img/analytics/raydium.png";
import numeral from "numeral";
import { Popover } from "@mantine/core";
import { usePopOverStyles, useStableTokenStyles } from "./styles";
const PoolItem = ({ poolInfo }) => {
  const [open, setOpen] = useState(false);
  const { classes } = useStableTokenStyles();
  const { classes: popoverClasses } = usePopOverStyles();
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <>
      {/* <Popover
        content={PopOverContent}
        placement="bottom"
        open={open}
        onOpenChange={handleOpenChange}
        trigger="click"
      /> */}
      <Popover width={500}>
        <Popover.Target>
          <div
            className={classes.poolItem}
            style={{ padding: "0.7em" }}
            onClick={() => setOpen(!open)}
          >
            <div className={classes.poolInfo} style={{ position: "relative" }}>
              <img
                src={poolInfo && poolInfo.poolInfo ? poolInfo.poolInfo.logo : piggy}
                alt=""
                className={classes.poolIcon}
              />

              <div className={classes.poolName}>
                <span id="pool-info-name">{poolInfo.symbol}</span>
                <span id="pool-price">{poolInfo.project}</span>
              </div>
            </div>
            <div className={classes.poolPricing}>
              <span id="usd-price">
                {poolInfo && numeral(poolInfo.apy).format("0,0.00")}%
              </span>
              <span id="volume">APY</span>
            </div>
          </div>
        </Popover.Target>
        <Popover.Dropdown style={{
          backgroundColor: "rgb(3, 10, 19)",
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "rgb(19, 34, 53)",
          borderRadius: "3px",
        }}>
          <div className={popoverClasses.popoverContentInfo}>
            <div className={popoverClasses.popupHeader}>
              <div className={popoverClasses.leftPart}>
                <img
                  src={
                    poolInfo && poolInfo.poolInfo ? poolInfo.poolInfo.logo : piggy
                  }
                  alt=""
                  className={popoverClasses.poolIcon}
                />
                <div className={popoverClasses.poolName}>
                  <span className={popoverClasses.poolInfoName}>{poolInfo.symbol}</span>
                  <span className={popoverClasses.poolPrice}>{poolInfo.project}</span>
                </div>
              </div>
              <div className={popoverClasses.pricing}>
                <a
                  className={popoverClasses.poolPricingLinkButton}
                  href={poolInfo.poolInfo.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website
                </a>
                <span className={popoverClasses.poolPricingAnalyticsItem}>Via DefiLama</span>
              </div>
            </div>
            <div className={popoverClasses.popoverContentBody}>
              <ul className={popoverClasses.popoverDataList}>
                <li className={popoverClasses.popoverDataListItem}>
                  <span className={popoverClasses.popoverDataListItemTitle}>Current TVL:</span>
                  <span className={popoverClasses.popoverDataListItemValue}>
                    ${numeral(poolInfo.tvlUsd).format("0,0.000")}
                  </span>
                </li>
                <li className={popoverClasses.popoverDataListItem}>
                  <span className={popoverClasses.popoverDataListItemTitle}>Current APY%:</span>
                  <span className={popoverClasses.popoverDataListItemValue}>{poolInfo.apy}</span>
                </li>
                <li className={popoverClasses.popoverDataListItem}>
                  <span className={popoverClasses.popoverDataListItemTitle}>Historical 1D APY%:</span>
                  <span className={popoverClasses.popoverDataListItemValue}>{poolInfo.apyPct1D}</span>
                </li>
                <li className={popoverClasses.popoverDataListItem}>
                  <span className={popoverClasses.popoverDataListItemTitle}>Historical 7D APY%:</span>
                  <span className={popoverClasses.popoverDataListItemValue}>{poolInfo.apyPct7D}</span>
                </li>
                <li className={popoverClasses.popoverDataListItem}>
                  <span className={popoverClasses.popoverDataListItemTitle}>Historical 30D APY%:</span>
                  <span className={popoverClasses.popoverDataListItemValue}>{poolInfo.apyPct30D}</span>
                </li>
                <li className={popoverClasses.popoverDataListItem}>
                  <span className={popoverClasses.popoverDataListItemTitle}>Impremenant Loss Risk:</span>
                  <span className={popoverClasses.popoverDataListItemValue}>{poolInfo.ilRisk}</span>
                </li>
              </ul>
            </div>
          </div>
        </Popover.Dropdown>

      </Popover>
    </>
  );
};

export default PoolItem;
