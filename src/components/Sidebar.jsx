import {
  mdiSwapHorizontalVariant,
  mdiToolboxOutline,
  mdiViewDashboard
} from "@mdi/js";
import Icon from "@mdi/react";
import CandlestickChart from "@mui/icons-material/CandlestickChart";
import CloseIcon from "@mui/icons-material/Close";
import { Tooltip } from "antd";
import { v4 as uuidv4 } from "uuid";
import DataObjectIcon from "@mui/icons-material/DataObject";
import { mdiPalette } from "@mdi/js";
import { useSideBar } from '../context/SideBar';
import Link from "next/link";
const Sidebar = () => {
  const { isOpen, openSidebar, closeSidebar } = useSideBar();

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
          <Tooltip placement="rightTop" title="Dashboard" color={"geekblue"}>
            <Link
              className={`sidebar__item ${location.pathname === "/" ? "active" : ""
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
          <Tooltip placement="rightTop" title="Swap" color={"geekblue"}>
            <Link
              href="/swap"
              className={`sidebar__item ${location.pathname === "/swap" ? "active" : ""
                }`}
            >
              <div className="sidebar__icon">
                <Icon path={mdiSwapHorizontalVariant} size={1} color="#FFF" />
              </div>
              <div className="sidebar__text">Swap</div>
            </Link>
          </Tooltip>

          <Tooltip placement="rightTop" title="Trade" color={"geekblue"}>
            <Link
              className={`sidebar__item ${location.pathname.includes("/serum") ? "active" : ""
                }`}
              href="/market/8BnEgHoWFysVcuFFX7QztDmzuH8r5ZFvyP3sYwn1XTh6"
            >
              <div className="sidebar__icon">
                <CandlestickChart color="#FFF" style={{ fill: "#FFF" }} />
              </div>
              <div className="sidebar__text">Trade</div>
            </Link>
          </Tooltip>

          <span className="side_bar_hint sidebar__item">Nft / Metaverse</span>
          <Tooltip
            placement="rightTop"
            title="NFT / Metaverse"
            color={"geekblue"}
          >
            <Link
              className={`sidebar__item ${location.pathname.includes("/nft") ? "active" : ""
                }`}
              href="/nft"
            >
              <div className="sidebar__icon ">
                <Icon path={mdiPalette} size={1} color="#FFF" />
              </div>
              <div className="sidebar__text">NFT</div>
            </Link>
          </Tooltip>

          <span className="side_bar_hint sidebar__item">DATA</span>
          <Tooltip
            placement="rightTop"
            title="All Solana Protcols"
            color={"geekblue"}
          >
            <Link
              className={`sidebar__item ${location.pathname === "/analytics" ? "active" : ""
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
              className={`sidebar__item ${location.pathname === "/tools" ? "active" : ""
                }`}
            >
              <div className="sidebar__icon">
                <Icon path={mdiToolboxOutline} size={1} color="#FFF" />
              </div>
              <div className="sidebar__text">Tools</div>
            </Link>
          </Tooltip>
        </nav>
      </div>
    </div >
  );
};

export default Sidebar;
