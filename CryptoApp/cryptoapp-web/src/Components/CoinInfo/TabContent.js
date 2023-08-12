import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OverviewComponent from "./OverviewComponent";
import ExchangesComponent from "./ExchangesComponent";
import SocialMediaComponent from "./SocialMediaComponent";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CustomizedTabs({ coinData }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Overview" {...a11yProps(0)} />
        <Tab label="Exchanges" {...a11yProps(1)} />
        <Tab label="Social Media" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <OverviewComponent
          coinName={coinData.name}
          description={coinData.description.en}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ExchangesComponent tickers={coinData.tickers} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SocialMediaComponent links={coinData.links} />
      </TabPanel>
    </Box>
  );
}
