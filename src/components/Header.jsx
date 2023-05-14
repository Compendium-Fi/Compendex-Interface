import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import WalletConnect from "./WalletConnect";
import { useSideBar } from "@/context/SideBar";
import { useRouter } from "next/router";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
const MainHeader = () => {
  const [width] = useWindowSize();
  const router = useRouter();
  const [tokenPrice, setTokenPrice] = useState(null);
  const { isOpen, openSidebar, closeSidebar } = useSideBar();
  const toggleSideBar = () => {
    if (isOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }


  const getTokenPrice = async () => {
    try {
      let result = await axios.get(
        "https://coins.llama.fi/prices/current/solana:5Wsd311hY8NXQhkt9cWHwTnqafk7BGEbLu8Py3DSnPAr"
      );
      if (result.data) {
        setTokenPrice(
          result.data.coins[
            "solana:5Wsd311hY8NXQhkt9cWHwTnqafk7BGEbLu8Py3DSnPAr"
          ].price
        );
      }
    } catch (error) { }
  };

  useEffect(() => {
    getTokenPrice();
  }, []);

  return (
    <div className="header-container">
      <div className="header smallHeader">
        <div className="header-content">
          <button
            className="header__logo"
            style={width > 910 ? {} : { marginRight: "0em", marginLeft: "1em" }}
          >
            <img src={"/assets/img/compendex2.png"} alt="" />
            <span
              id="compendex_name"
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 600,
                color: "rgb(255, 255, 255)",
                marginLeft: "0.6em"
              }}
            >
              Compendex
            </span>
          </button>
          <div className="navbar-menu">
            <Link
              className={`${router.pathname === "/"
                ? "header-link-btn-selected"
                : "header-link-btn"
                } `}
              href={"/"}
            >
              <span>Overview</span>
            </Link>
            <Link
              className={`${router.pathname.includes("/swap")
                ? "header-link-btn-selected"
                : "header-link-btn"
                } `}
              href={"/swap"}
            >
              <span>Swap</span>
            </Link>
            <Link
              className={`${router.pathname.includes("/serum")
                ? "header-link-btn-selected"
                : "header-link-btn"
                } `}
              href={"/market/8BnEgHoWFysVcuFFX7QztDmzuH8r5ZFvyP3sYwn1XTh6"}
            >
              <span>Trade</span>
            </Link>


            <Link
              className={`${router.pathname.includes("/analytics")
                ? "header-link-btn-selected"
                : "header-link-btn"
                } `}
              href={"/analytics"}
            >
              <div
                className="dropbtn"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <span>Data</span>
              </div>
            </Link>
            <Link
              href={"/toolbox"}
              className={`${router.pathname.includes("/toolbox")
                ? "header-link-btn-selected"
                : "header-link-btn"
                } `}
            >
              <div className="tools-dropdown">
                <div
                  className="tools-dropbtn"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px"
                  }}
                >
                  <span>Tools</span>
                </div>
              </div>
            </Link>
            <a

              className="header-link-btn"
              href="https://docs.compendex.xyz"
              target="_blank"
              rel="noopener noreferrer"
             
            >
              <span>Docs</span>
            </a>
          </div>
        </div>
        <div className="header-content-mobile">
          <button
            className="header__logo"
            onClick={() => {
              if (width > 910) {
                history.push("/");
              } else {
                toggleSideBar();
              }
            }}
            style={width > 910 ? {} : { marginRight: "0em", marginLeft: "1em" }}
          >
            <img src={"assets/img/compendex2.png"} alt="" />
            <span
              id="compendex_name"
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 600,
                color: "rgb(255, 255, 255)",
                marginLeft: "0.6em"
              }}
            >
              Compendex
            </span>
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "10px"
          }}
        >
          <div
            className="header_adr"
            style={{
              justifyContent: "space-evenly",
              alignItems: "center",

              minWidth: 110,
              display: "flex"
            }}
          >
            <div className="sol_place_holder">
              <img src={"/assets/img/sol.png"} alt="" />
              <span>SOL</span>
            </div>
          </div>
          <div className="header_place_holder">
            <img src={"/assets/img/cmfi_ticker.png"} alt="" />
            <span>${tokenPrice && tokenPrice.toFixed(4)}</span>
          </div>
          <button
            className="header__logo menu-icon"
            style={{ marginRight: "-10px" }}
          ></button>
          <a className="header__user wallet-btn">
            <WalletConnect />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
