import React from "react";
import { Link } from "react-router-dom";
import SmallSearchBar from "./SmallSearch";
import { SmallTpsCard } from "./SmallTpsCard";
import "./styles.css";
const SmallExplorer = () => {
  return (
    <div className="small-explorer">
      <span className="explorer-title">Statistics And Explorer</span>
      <SmallSearchBar />
      <SmallTpsCard />
    </div>
  );
};

export default SmallExplorer;
