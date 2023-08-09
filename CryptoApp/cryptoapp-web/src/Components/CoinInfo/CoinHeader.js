import React from "react";

const CoinHeader = ({ coinData }) => {
  return (
    <div className="coin-header">
      <img
        className="coin-image"
        src={coinData.image.large}
        alt={coinData.name}
      />
      <div className="coin-name">{coinData.name}</div>
      <div className="coin-symbol">{coinData.symbol}</div>
    </div>
  );
};

export default CoinHeader;
