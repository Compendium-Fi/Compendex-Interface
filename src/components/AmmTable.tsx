import axios from "axios";
import numeral from "numeral";
import { useEffect, useState } from "react";
const AmmTable = () => {
  const [ammData, setAmmData] = useState([]);
  const initAmmData = async () => {
    try {
      let result = await axios.get("https://api.solscan.io/amm/all");
      setAmmData(result.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    initAmmData();
  }, []);
  return (
    <div className="table-responsive table-width">
      <table className="table ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Liquidity</th>
            <th>24H Volume</th>
            <th>24H Volume Change %</th>
          </tr>
        </thead>
        <tbody>
          {ammData
            .sort((a: any, b: any) => {
              if (a.totalLiquidity > b.totalLiquidity) {
                return -1;
              } else {
                return 1;
              }
            })
            .map((elm: any) => (
              <tr>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <img src={elm.icon} id="amm_icon" />{" "}
                  {elm && elm.source.toUpperCase()}
                </td>
                <td>
                  $
                  {elm &&
                    elm.totalLiquidity &&
                    numeral(elm.totalLiquidity).format("0,0.000")}
                </td>
                <td>
                  $
                  {elm &&
                    elm.totalVolume24h &&
                    numeral(elm.totalVolume24h).format("0,0.000")}
                </td>
                <td
                  className={` ${
                    Number(
                      elm.totalVolume24hChangePercentage24h
                        ? elm.totalVolume24hChangePercentage24h
                        : 0
                    ) > 1
                      ? "positive"
                      : "negative"
                  }`}
                >
                  {elm &&
                    elm.totalVolume24hChangePercentage24h &&
                    elm.totalVolume24hChangePercentage24h.toFixed(2)}
                  %
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AmmTable;
