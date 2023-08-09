import React from "react";
import { DownIcon, UpIcon } from "../Icons";

const CoinDetails = ({ coinData }) => {
  return (
    <div className="coin-details">
      <div className="detail-item">
        <div className="detail-label">Rank</div>
        <div className="detail-value">{coinData.market_cap_rank}</div>
      </div>
      <div className="detail-item">
        <div className="detail-label">Price</div>
        <div className="detail-value">
          $
          {coinData.market_data.current_price.usd.toLocaleString("en", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
      </div>
      <div className="coin-24h">
        <span
          style={{
            color:
              coinData.market_data.price_change_percentage_24h.toFixed(1) < 0
                ? "red"
                : "green",
          }}
        >
          {coinData.market_data.price_change_percentage_24h < 0 ? (
            <DownIcon />
          ) : (
            <UpIcon />
          )}
          {coinData.market_data.price_change_percentage_24h.toFixed(1)}%
        </span>
      </div>
      <div className="detail-item">
        <div className="detail-label">Volume 24h</div>
        <div className="detail-value">
          ${coinData.market_data.total_volume.usd.toLocaleString("en")}
        </div>
      </div>
      <div className="detail-item">
        <div className="detail-label">Market Cap</div>
        <div className="detail-value">
          ${coinData.market_data.market_cap.usd.toLocaleString("en")}
        </div>
        {/* ... остальной код деталей монеты ... */}
      </div>
    </div>
  );
};

export default CoinDetails;
