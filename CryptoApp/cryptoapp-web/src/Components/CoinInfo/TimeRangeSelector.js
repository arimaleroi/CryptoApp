import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import React from "react";

const TimeRangeSelector = ({ timeRange, onTimeRangeChange }) => {
  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          onClick={() => onTimeRangeChange("1")}
          variant={timeRange === "1" ? "contained" : "outlined"}
        >
          1 Day
        </Button>
        <Button
          onClick={() => onTimeRangeChange("7")}
          variant={timeRange === "7" ? "contained" : "outlined"}
        >
          7 Days
        </Button>
        <Button
          onClick={() => onTimeRangeChange("30")}
          variant={timeRange === "30" ? "contained" : "outlined"}
        >
          30 Days
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default TimeRangeSelector;
