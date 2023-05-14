import {
  mdiSwapHorizontalVariant,
  mdiToolboxOutline,
  mdiViewDashboard
} from "@mdi/js";
import Icon from "@mdi/react";
import CandlestickChart from "@mui/icons-material/CandlestickChart";
import CloseIcon from "@mui/icons-material/Close";

import { Tooltip } from '@mantine/core';
import { HelpOutline } from "@material-ui/icons";
import DataObjectIcon from "@mui/icons-material/DataObject";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { useSideBar } from '../context/SideBar';
import { useRouter } from "next/router";
const Sidebar = () => {
  const { isOpen, openSidebar, closeSidebar } = useSideBar();
  const router = useRouter();

  const toggleSideBar = () => {
    if (isOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };
  const linkTarget = {
    pathname: "/",
    key: uuidv4(), // we could use Math.random, but that's not guaranteed unique.
    state: {
      applied: true
    }
  };
  return (
    <div className={`sidebar sidebar_color ${isOpen ? "active" : ""} `} style={{
      backgroundColor: "#080f19!important",
      borderColor: "#132235!important",
      zIndex: 99999
    }}>
      <div className="sidebar__head">
        <Link className="sidebar__logo" href="/">
          <img
            alt=""
            className="sidebar__pic sidebar__pic_light"
            src={"/assets/img/compendex2.png"}
            style={{ height: 50, width: 50 }}
          />
          <img
            alt=""
            className="sidebar__pic sidebar__pic_dark"
            src={"/assets/img/compendex2.png"}
            style={{ height: 50, width: 50 }}
          />
        </Link>
        <button className="sidebar__toggle" onClick={toggleSideBar}>
          toggle
        </button>

        <button
          className="sidebar__close"
          onClick={() => {
            closeSidebar();
          }}
        >
          {/* <svg className="icon icon-close">
            <use xlinkHref="img/sprite.svg#icon-close" />
          </svg> */}
          <CloseIcon style={{ color: "#FFF" }} />
        </button>
      </div>
      <div className="sidebar__body">
        <nav className="sidebar__nav">
          <Tooltip placement="rightTop" title="Dashboard" color="dark">
            <Link
              className={`sidebar__item ${router.pathname === "/" ? "active" : ""
                }`}
              href={linkTarget}
            >
              <div className="sidebar__icon">
                <Icon path={mdiViewDashboard} size={1} color="#FFF" />
              </div>

              <div className="sidebar__text">Overview</div>
            </Link>
          </Tooltip>
          <span className="side_bar_hint sidebar__item">TRADING TOOLS</span>
          <Tooltip placement="rightTop" title="Swap" color="dark">
            <Link
              href="/swap"
              className={`sidebar__item ${router.pathname === "/swap" ? "active" : ""
                }`}
            >
              <div className="sidebar__icon">
                <Icon path={mdiSwapHorizontalVariant} size={1} color="#FFF" />
              </div>
              <div className="sidebar__text">Swap</div>
            </Link>
          </Tooltip>

          <Tooltip placement="rightTop" title="Trade" color="dark">
            <Link
              className={`sidebar__item ${router.pathname.includes("/serum") ? "active" : ""
                }`}
              href="/market/8BnEgHoWFysVcuFFX7QztDmzuH8r5ZFvyP3sYwn1XTh6"
            >
              <div className="sidebar__icon">
                <CandlestickChart color="#FFF" style={{ fill: "#FFF" }} />
              </div>
              <div className="sidebar__text">Trade</div>
            </Link>
          </Tooltip>

          {/* <span className="side_bar_hint sidebar__item">Nft / Metaverse</span> */}


          <span className="side_bar_hint sidebar__item">DATA</span>
          <Tooltip
            placement="rightTop"
            title="All Solana Protcols"
            color="dark"
          >
            <Link
              className={`sidebar__item ${router.pathname === "/analytics" ? "active" : ""
                }`}
              href="/analytics"
            >
              <div className="sidebar__icon">
                <DataObjectIcon color="#FFF" style={{ color: "#FFF" }} />
              </div>

              <div className="sidebar__text">Data</div>
            </Link>
          </Tooltip>

          <span className="side_bar_hint sidebar__item">Tools</span>

          <Tooltip
            placement="rightTop"
            title="Useful Platform"
            color={"geekblue"}
          >
            <Link
              href="/tools"
              className={`sidebar__item ${router.pathname === "/tools" ? "active" : ""
                }`}
            >
              <div className="sidebar__icon">
                <Icon path={mdiToolboxOutline} size={1} color="#FFF" />
              </div>
              <div className="sidebar__text">Tools</div>
            </Link>
          </Tooltip>
          <Tooltip color="dark">
            <a
              className={`sidebar__item ${router.pathname.includes("/nft") ? "active" : ""
                }`}
              href="https://sdocs.compendex.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="sidebar__icon ">
                <HelpOutline color="#FFFF" style={{ color: "#FFF" }} />
              </div>
              <div className="sidebar__text">Docs</div>
            </a>
          </Tooltip>
        </nav>
      </div>
    </div >
  );
};

export default Sidebar;
