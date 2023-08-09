import React from "react";

const TimeRangeSelector = ({ timeRange, handleTimeRangeChange }) => {
  return (
    <div>
      <select value={timeRange} onChange={handleTimeRangeChange}>
        <option value="1">1 Day</option>
        <option value="7">7 Days</option>
        <option value="30">30 Days</option>
      </select>
    </div>
  );
};

export default TimeRangeSelector;
