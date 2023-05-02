import React, { useState } from "react";
import numeral from "numeral";
import { Popover } from "@mantine/core";
import { usePopOverStyles, useTvlStyles } from "./styles";

const TVLItem = ({ elm }) => {
  const { classes } = useTvlStyles();
  const { classes: popoverClasses } = usePopOverStyles();
  const relDiff = (final, init) => {
    return ((final - init) / init) * 100;
  };
  const [open, setOpen] = useState(false);

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
            className={classes.homeTvlItem}
            style={{ padding: "0.7em" }}
            onClick={() => setOpen(true)}
          >
            <div className={classes.tvlInfo}>
              <img src={elm.logo} alt="" className={classes.tvlIcon} />

              <div className={classes.tvlName}>
                <span id="tvl-name">{elm.name}</span>
                <span id="tvl-price">{elm.category}</span>
              </div>
            </div>
            <div className={classes.tvlPricing}>
              <span id="usd-price">
                ${numeral(elm.chainTvls.Solana.tvl).format("0,0.000")}
              </span>
              <span
                id="volume"
                className={`${relDiff(
                  elm.chainTvls.Solana.tvl,
                  elm.chainTvls.Solana.tvlPrevWeek
                ) > 0
                  ? ""
                  : 'volume-decrease'
                  }`}
              >
                {relDiff(
                  elm.chainTvls.Solana.tvl,
                  elm.chainTvls.Solana.tvlPrevWeek
                ) > 0
                  ? "+"
                  : ""}
                {relDiff(
                  elm.chainTvls.Solana.tvl,
                  elm.chainTvls.Solana.tvlPrevWeek
                ).toFixed(3)}
                % 1W
              </span>
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
                <img src={elm.logo} alt="" className={popoverClasses.poolIcon} />
                <div className={popoverClasses.poolName}>
                  <span id={popoverClasses.poolInfoName}>{elm.name}</span>
                  <span id={popoverClasses.poolPrice}>{elm.symbol}</span>
                </div>
              </div>
              <div className={popoverClasses.pricing}>
                <a
                  className={popoverClasses.poolPricingLinkButton}
                  href={elm.referralUrl}
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
                  <span className={popoverClasses.popoverDataListItemTitle}>Category:</span>
                  <span className={popoverClasses.popoverDataListItemValue} >{elm.category}</span>
                </li>
                <li className={popoverClasses.popoverDataListItem}>
                  <span className={popoverClasses.popoverDataListItemTitle}>Current TVL:</span>
                  <span className={popoverClasses.popoverDataListItemValue}>
                    ${numeral(elm.chainTvls.Solana.tvl).format("0,0.000")}
                  </span>
                </li>
                <li className={popoverClasses.popoverDataListItem}>
                  <span className={popoverClasses.popoverDataListItemTitle}>Prev Day TVL:</span>
                  <span className={popoverClasses.popoverDataListItemValue}>
                    ${numeral(elm.chainTvls.Solana.tvlPrevDay).format("0,0.000")}
                  </span>
                </li>
                <li className={popoverClasses.popoverDataListItem}>
                  <span className={popoverClasses.popoverDataListItemTitle}>Prev Week TVL:</span>
                  <span className={popoverClasses.popoverDataListItemValue}>
                    ${numeral(elm.chainTvls.Solana.tvlPrevWeek).format("0,0.000")}
                  </span>
                </li>
                <li className={popoverClasses.popoverDataListItem}>
                  <span className={popoverClasses.popoverDataListItemTitle}>Prev Month TVL:</span>
                  <span className={popoverClasses.popoverDataListItemValue}>
                    ${numeral(elm.chainTvls.Solana.tvlPrevMonth).format("0,0.000")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Popover.Dropdown>
      </Popover>

    </>
  );
};

export default TVLItem;
