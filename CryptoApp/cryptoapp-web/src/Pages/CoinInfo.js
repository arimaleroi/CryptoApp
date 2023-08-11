import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "chart.js/auto";
import CoinChart from "../Components/CoinInfo/CoinChart";
import CoinDetails from "../Components/CoinInfo/CoinDetails";
import TabContent from "../Components/CoinInfo/TabContent";
import TimeRangeSelector from "../Components/CoinInfo/TimeRangeSelector";
import "../Components/Styles/CoinInfo.css";
import ResponsiveAppBar from "../Components/App/ResponsiveAppBar";
import CoinFooter from "../Components/CoinInfo/CoinFooter";

const CoinInfo = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [timeRange, setTimeRange] = useState("7");

  useEffect(() => {
    getData(id);
  }, [id]);

  const getData = async (coinId) => {
    try {
      const response = await fetch(
        `https://localhost:44330/api/coincontroller/coin?id=${coinId}`,
        {
          method: "get",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setCoinData(data);
      } else {
        console.error("Error while fetching data");
      }
    } catch (error) {
      console.error("Error while fetching data", error);
    }
  };

  const handleTimeRangeChange = (newTimeRange) => {
    setTimeRange(newTimeRange);
  };

  if (!coinData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ResponsiveAppBar />
      <div className="grid">
        <div className="page-leftbar">
          <div className="content">
            <CoinDetails coinData={coinData} />
          </div>
        </div>
        <div className="page-main">
          <div className="coin-chart">
            <CoinChart coinId={id} timeRange={timeRange} />
          </div>
          <div className="time-range-selector">
            <TimeRangeSelector
              timeRange={timeRange}
              onTimeRangeChange={handleTimeRangeChange}
            />
          </div>
        </div>
        <div className="page-footer">
          <div className="tabs">
            <TabContent coinData={coinData} />
          </div>
        </div>
      </div>
      <CoinFooter />
    </div>
  );
};

export default CoinInfo;
