import React, { useState } from "react";
import ExchangesComponent from "./ExchangesComponent";
import SocialMediaComponent from "./SocialMediaComponent";
import OverviewComponent from "./OverviewComponent";

const TabContent = ({ coinData }) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab("overview")}>Overview</button>
        <button onClick={() => setActiveTab("exchanges")}>Exchanges</button>
        <button onClick={() => setActiveTab("socialMedia")}>
          Social Media
        </button>
      </div>
      {activeTab === "overview" && (
        <OverviewComponent description={coinData.description.en} />
      )}
      {activeTab === "exchanges" && (
        <ExchangesComponent tickers={coinData.tickers} />
      )}
      {activeTab === "socialMedia" && (
        <SocialMediaComponent links={coinData.links} />
      )}
    </div>
  );
};

export default TabContent;
