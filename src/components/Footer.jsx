import { mdiDiscord, mdiTwitter, mdiWeb } from "@mdi/js";
import Icon from "@mdi/react";
import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
const useWindowSize = () => {
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
};
const Footer = () => {
  const [width] = useWindowSize();
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        alignSelf: "center",
        flexWrap: "wrap",

        minWidth: width > 1200 ? "1200px" : "100px",
        flexDirection: "column",
        marginTop: "-2.5em",
        margin: "1.2em",
      }}
    >
      <div
        className=" mb-2 "
        style={{
          flexWrap: "wrap",
          flexWrap: "nowrap",
          display: "flex",

          paddingBottom: "10px",
          marginBottom: "10px",
        }}
      >
        <div className="col-auto" style={{ marginLeft: "-15px" }}>
          <Link
            to={{ pathname: "https://twitter.com/CompendiumFi" }}
            target="_blank"
            className="nav-link p-0 text-muted"
          >
            <Icon path={mdiTwitter} size={0.8} style={{ marginRight: "2px" }} />
            <span> Twitter</span>
          </Link>
        </div>
        <div className="col-auto">
          <Link
            to={{ pathname: "https://discord.gg/xSm2MNqd" }}
            target="_blank"
            className="nav-link p-0 text-muted"
          >
            <Icon path={mdiDiscord} size={0.8} style={{ marginRight: "2px" }} />
            <span> Discord</span>
          </Link>
        </div>
        <div className="col-auto">
          <Link
            to={{ pathname: "https://compendium.finance/" }}
            target="_blank"
            className="nav-link p-0 text-muted"
          >
            <Icon path={mdiWeb} size={0.8} style={{ marginRight: "2px" }} />
            <span> Website</span>
          </Link>
        </div>
      </div>

      <div
        style={{
          flexWrap: "wrap",
          justifyContent: "space-between",
          display: "flex",
          flex: 1,
          minWidth: "100%",
        }}
      >
        <div className=" mb-2">
          <h5 style={{ color: "gray" }}>Trade On Solana</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to={"/serum"} className="nav-link p-0 text-muted">
                Spot Markets
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link p-0 text-muted" to={"/swap"}>
                Smart Swap
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-2">
          <h5 style={{ color: "gray" }}>NFT/Metaverse</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to={"/nft"} className="nav-link p-0 text-muted">
                Metaverse Markets
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-2">
          <h5 style={{ color: "gray" }}>Data & Analytics</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to={"/balance"} className="nav-link p-0 text-muted">
                Balance Tracker
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to={"/analytics"} className="nav-link p-0 text-muted">
                Defi Analytics
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to={"/explorer"} className="nav-link p-0 text-muted">
                Network Explorer
              </Link>
            </li>
          </ul>
        </div>
        <div className=" mb-2">
          <h5 style={{ color: "gray" }}>Helpful Tools</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to={"/toolbox"} className="nav-link p-0 text-muted">
                Tool Box
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to={"/vesting"} className="nav-link p-0 text-muted">
                Deprecated Vesting
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 ">
        <p>
          © 2022 Compendium.Fi - All rights reserved. These products are offered
          without warranty. Please use at your own risk.
        </p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width={24} height={24}>
                <use xlinkHref="#twitter" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width={24} height={24}>
                <use xlinkHref="#instagram" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width={24} height={24}>
                <use xlinkHref="#facebook" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
