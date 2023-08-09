import React from "react";

const ExchangesComponent = ({ tickers }) => {
  return (
    <div className="exchanges">
      {tickers.map((ticker, index) => (
        <div key={index}>
          <p>{ticker.market.name}</p>
          <p>Last: {ticker.last}</p>
        </div>
      ))}
    </div>
  );
};

export default ExchangesComponent;
