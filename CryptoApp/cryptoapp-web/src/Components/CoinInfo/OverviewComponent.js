import React from "react";

const OverviewComponent = ({ description, coinName }) => {
  return (
    <div className="overview">
      <h1 className="coin-name-header">About {coinName}</h1>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
};

export default OverviewComponent;
