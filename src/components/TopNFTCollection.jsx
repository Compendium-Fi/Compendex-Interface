import { HyperspaceClient } from "hyperspace-client-js";
import { useCallback, useEffect, useMemo, useState } from "react";

import numeral from "numeral";
import { useNftStyles, usePopOverStyles } from "./styles";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Popover } from '@mantine/core'
import Link from "next/link";
const NftItem = ({ elm }) => {
  const [open, setOpen] = useState(false);
  const { classes: popoverClasses } = usePopOverStyles();
  const { classes } = useNftStyles();

  return (
    <>
      <Popover width={500} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <div
            className={classes.homeNftItem}
            style={{ padding: "0.7em" }}
            key={elm.project_id}
            onClick={() => setOpen(!open)}
          >
            <div className={classes.nftInfo}>
              <img
                src={elm.project.img_url}
                alt=""
                className={classes.nftIcon}
              />

              <div className={classes.nftName}>
                <span id="nft-name">{elm.project.display_name}</span>
                <span id="nft-price">Floor: {elm.floor_price} SOL</span>
              </div>
            </div>
            <div className={classes.nftPricing}>
              <span id="usd-price">
                ${numeral(elm.market_cap).format("0,0")}
              </span>
              <span id="volume">Marketcap</span>
            </div>
          </div>
        </Popover.Target>
        <Popover.Dropdown
          style={{
            backgroundColor: "rgb(3, 10, 19)",
            borderStyle: "solid",
            borderWidth: "2px",
            borderColor: "rgb(19, 34, 53)",
            borderRadius: "3px",
          }}
        >
          <div className={popoverClasses.popoverContentInfo}>
            <div className={popoverClasses.popupHeader}>
              <div className={popoverClasses.leftPart}>
                <img src={elm.project.img_url} alt="" className={popoverClasses.poolIcon} />
                <div className={popoverClasses.poolName}>
                  <span className={popoverClasses.poolInfoName}>{elm.project.display_name}</span>
                  <span className={popoverClasses.poolPrice}>{elm.floor_price}</span>
                </div>
              </div>
              <div className={popoverClasses.poolPricingLinkButton}>
                <a
                  className={popoverClasses.linkButton}
                  href={elm.wesbite?  elm.wesbite :""}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website
                </a>
              </div>
            </div>
            <div className={popoverClasses.popoverContentBody}>
              <ul className={popoverClasses.popoverDataList}>
                <li className={popoverClasses.popoverDataListItem}>
                  <span className={popoverClasses.popoverDataListItemTitle}>Floor Price:</span>
                  <span className={popoverClasses.popoverDataListItemValue}>{elm.floor_price} SOL</span>
                </li>
                <li>
                  <span className={popoverClasses.popoverDataListItemTitle}>Average Price:</span>
                  <span className={popoverClasses.popoverDataListItemValue}>{elm.average_price} SOL</span>
                </li>
                <li>
                  <span className={popoverClasses.popoverDataListItemTitle}>1D Floor price Change %:</span>
                  <span className={popoverClasses.popoverDataListItemValue}>{elm.floor_price_1day_change}</span>
                </li>
                <li>
                  <span className={popoverClasses.popoverDataListItemTitle}>1D avegrage price change %:</span>
                  <span className={popoverClasses.popoverDataListItemValue}>{elm.average_price_1day_change}</span>
                </li>
                <li>
                  <span className={popoverClasses.popoverDataListItemTitle}>Holders :</span>
                  <span className={popoverClasses.popoverDataListItemValue}>{elm.num_of_token_holders}</span>
                </li>
                <li>
                  <span className={popoverClasses.popoverDataListItemTitle}>Listed :</span>
                  <span className={popoverClasses.popoverDataListItemValue}>{elm.num_of_token_listed}</span>
                </li>
              </ul>
            </div>
          </div>
        </Popover.Dropdown>
      </Popover>
    </>
  );
};
const TopNFTCollection = () => {
  const [topCollections, setTopCollections] = useState([]);
  const hsClient = useMemo(
    () =>
      new HyperspaceClient(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJDb21wZW5kaXVtIiwibmFtZSI6Ikh5cGVyc3BhY2UiLCJpYXQiOjE1MTYyMzkwMjJ9.0wGMPCzZqg0qUY9nlH9Es9F-sZBsiLiWqEl1k6EtAlU"
      ),
    []
  );
  const getTopNftCollections = useCallback(async () => {
    try {
      const { getProjectStats } = await hsClient.getProjects({
        orderBy: {
          field_name: "market_cap",
          sort_order: "DESC",
        },
      });

      if (getProjectStats && getProjectStats.project_stats) {
        setTopCollections(getProjectStats.project_stats);
      }
    } catch (error) {
      console.error(error);
    }
  }, [hsClient]);

  useEffect(() => {
    getTopNftCollections();
  }, [getTopNftCollections]);
  return (
    <>
      {topCollections.map((elm, ind) => (
        <NftItem elm={elm} key={ind.toString()} />
      ))}
    </>
  );
};

export default TopNFTCollection;
