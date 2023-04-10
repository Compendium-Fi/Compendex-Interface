import React, { useState } from "react";
// import { Popover } from "antd";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNftStyles, usePopOverStyles } from "./styles";
import { Popover, Text, Button } from '@mantine/core';
const ToolBoxItem = ({ elm }) => {
  const [open, setOpen] = useState(false);
  const { classes } = useNftStyles();
  const { classes: popoverClasses } = usePopOverStyles();
  const handleOpenChange = (newOpen) => {
    console.log("Opened")
    setOpen(newOpen);
  };

  return (
    <>
      <Popover width={500} position="bottom" withArrow shadow="md" >
        <Popover.Target>
          <div
            className={classes.homeNftItem}
            style={{ padding: "0.7em" }}
            onClick={() => {

              setOpen(!open);
              console.log("App", open);
            }}
          >
            <div className={classes.nftInfo}>
              <img src={elm.icon} alt="" className={classes.nftIcon} />

              <div className={classes.nftName}>
                <span id="nft-name">{elm.name}</span>
                <span id="nft-price">{elm.website}</span>
              </div>
            </div>
            <div className={classes.nftPricing}>
              <span id="usd-price">
                <ExitToAppIcon />
              </span>
            </div>
          </div>
        </Popover.Target>
        <Popover.Dropdown style={{
          backgroundColor: "rgb(3, 10, 19)",
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "rgb(19, 34, 53)",
          borderRadius: "3px"
        }}>
          <div className={popoverClasses.popoverContentInfo}>
            <div className={popoverClasses.popupHeader}>
              <div className={popoverClasses.leftPart}>
                <img src={elm.icon} alt="" className={popoverClasses.poolIcon} />
                <div className={popoverClasses.poolName}>
                  <span className={popoverClasses.poolInfoName}>{elm.name}</span>
                  {/* <span id="pool-price">{elm.floor_price}</span> */}
                </div>
              </div>
              <div className={popoverClasses.poolPrice}>
                <a
                  className={popoverClasses.poolPricingLinkButton}
                  href={elm.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website
                </a>
                {/* <span id="analytics-item">Via DefiLama</span> */}
              </div>
            </div>
            <div className={popoverClasses.popoverContentBody}>
              <ul className={popoverClasses.popoverDataList}>
                <li className={popoverClasses.popoverDataListItem}>
                  <span className={popoverClasses.popoverDataListItemTitle}>description:</span>
                  <span className={popoverClasses.popoverDataListItemValue}>{elm.description} </span>
                </li>
                <li  className={popoverClasses.popoverDataListItem}>
                  <span className={popoverClasses.popoverDataListItemTitle}> Website:</span>
                  <a
                    className={popoverClasses.popoverDataListItemValue}
                    href={elm.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {elm.website}{" "}
                  </a>
                </li>
                <li  className={popoverClasses.popoverDataListItem}>
                  <span className={popoverClasses.popoverDataListItemTitle}> Twitter:</span>
                  <a
                    className={popoverClasses.popoverDataListItemValue}
                    href={elm.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {elm.twitter}{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Popover.Dropdown>
      </Popover>

      {/* <Popover
        content={PopOverContent}
        placement="bottom"
        open={open}
        onOpenChange={handleOpenChange}
        trigger="click"
      /> */}
    </>
  );
};

export default ToolBoxItem;
