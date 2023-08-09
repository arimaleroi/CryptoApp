import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "chart.js/auto";
import CoinChart from "../Components/CoinInfo/CoinChart";
import CoinDetails from "../Components/CoinInfo/CoinDetails";
import CoinHeader from "../Components/CoinInfo/CoinHeader";
import TabContent from "../Components/CoinInfo/TabContent";
import TimeRangeSelector from "../Components/CoinInfo/TimeRangeSelector";
import "../Components/Styles/CoinInfo.css";

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

  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
  };

  if (!coinData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <CoinHeader coinData={coinData} />
      <CoinDetails coinData={coinData} />
      <div className="time-range-selector">
        <TimeRangeSelector
          timeRange={timeRange}
          handleTimeRangeChange={handleTimeRangeChange}
        />
      </div>
      <div className="coin-chart">
        <CoinChart coinId={id} timeRange={timeRange} />
      </div>
      <div className="tabs">
        <TabContent coinData={coinData} />
      </div>
    </div>
  );
};

export default CoinInfo;
