import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, makeStyles, Tab } from "@material-ui/core";
import solIcon from "../assets/img/icons/SOL.png";
import React from "react";
import { useJupStat } from "../context/jupStat";
import SellBuyItem from "./SellBuyItem";
const useStyles = makeStyles({
  root: {
    "& .Mui-selected": {
      backgroundColor: "#132235",
      color: "#E2E8F0",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "11px",
      lineHeight: "12px",
      textTransform: "capitalize",
      border: "1px solid #132235",
      borderTopRadius: "5px",
      borderBottom: "none"
    },
    "& .MuiTab-root": {
      color: "#E2E8F0",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "11px",
      lineHeight: "12px",
      textTransform: "capitalize",

      maxHeight: "30px",
      borderBottom: "none",
      minHeight: "30px",
      minWidth: "125px"
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "transparent"
    },
    "& .MuiTabs-flexContainer": {
      borderBottom: "1px solid #132235"
    },
    "& .cYQnJc": {
      backgroundColor: "red"
    }
  }
});
const BuySellCard = () => {
  //@ts-ignore
  const classes = useStyles();

  const [value, setValue] = React.useState("1");
  const { volumeByPairs, topBuys, topSells } = useJupStat();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="home-card-container">
      {" "}
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "#132235" }}>
          <TabList
            onChange={handleChange}
            aria-label="Token History Chart"
            className={classes.root}
          >
            <Tab label={`Top Buys`} value="1" />
            <Tab label={`Top Sells`} value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="inner-tab" style={{ padding: "0.7em" }}>
            {topBuys.slice(0, 10).map((elm, ind) => (
              <SellBuyItem
                key={ind.toString()}
                tokenSymbol={elm.symbol}
                volume={elm.amount}
                side={"buy"}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="inner-tab" style={{ padding: "0.7em" }}>
            {topSells.slice(0, 10).map((elm, ind) => (
              <SellBuyItem
                key={ind.toString()}
                tokenSymbol={elm.symbol}
                volume={elm.amount}
                side={"sell"}
              />
            ))}
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default BuySellCard;
