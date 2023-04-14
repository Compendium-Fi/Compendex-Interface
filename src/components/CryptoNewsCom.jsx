import { Button } from "@material-ui/core";
import { NewspaperSharp } from "@mui/icons-material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import axios from "axios";
import parse from "html-react-parser";
import { useCallback, useEffect, useState } from "react";
const CryptoNewsCom = () => {
  const [feed, setFeed] = useState(null);
  // "https://cors-anywhere.herokuapp.com/"
  const fetchFeed = useCallback(() => {
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https://www.coindesk.com/arc/outboundfeeds/rss/`
      )
      .then((response) => {
        setFeed(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setFeed]);
  useEffect(() => {
    fetchFeed();
  }, [fetchFeed]);
  return (
    <>
      {" "}
      {feed &&
        feed.map((elm, ind) => {
          console.log("Elm", elm)
          // let item = parse(elm["description"]);
          // let textToDisplay = item[3]["props"]["children"];
          return (
            <div className="news-item" key={ind.toString()}>
              <div className="left-item">
                <NewspaperSharp style={{ color: "rgb(119, 145, 224)" }} />
                <div className="news-info">
                  <span id="news-title">{elm["title"]}</span>

                  <span id="news-description">{elm['content']}</span>
                </div>
              </div>
              <Button
                onClick={() => {
                  window.open(elm.link, "_blank");
                }}
              >
                <ExitToAppIcon style={{ color: "#FFFF" }} />
              </Button>
            </div>
          );
        })}
    </>
  );
};

export default CryptoNewsCom;
