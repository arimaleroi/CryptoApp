import React from "react";
import { DownIcon, UpIcon } from "../Icons";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const CoinDetails = ({ coinData }) => {
  return (
    <div className="coin-details">
      <div className="detail-item">
        <div className="detail-rank">Rank #{coinData.market_cap_rank}</div>
      </div>
      <div className="price-with-24h">
        <img
          src={coinData.image.small}
          alt="Coin Logo"
          className="detail-logo"
        />
        <div className="detail-name">{coinData.name}</div>
        <div className="detail-symbol">{coinData.symbol.toUpperCase()}</div>
      </div>
      <div className="price-with-24h">
        <div className="detail-price">
          $
          {coinData.market_data.current_price.usd.toLocaleString("en", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
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
      </div>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem
          sx={{
            pl: 0,
          }}
        >
          <ListItemText
            primary=<span style={{ fontWeight: "bold" }}>
              {`$${coinData.market_data.market_cap.usd.toLocaleString("en")}`}
            </span>
            secondary="Market Cap"
          />
        </ListItem>
        <Divider component="li" />
        <li>
          <Typography
            sx={{ mt: 0.5, ml: 2 }}
            color="text.secondary"
            display="block"
            variant="caption"
          ></Typography>
        </li>
        <ListItem
          sx={{
            pl: 0,
          }}
        >
          <ListItemText
            primary=<span style={{ fontWeight: "bold" }}>
              {`$${coinData.market_data.total_volume.usd.toLocaleString("en")}`}
            </span>
            secondary="24 Hour Trading Vol"
          />
        </ListItem>
        <Divider component="li" />
        <li>
          <Typography
            sx={{ mt: 0.5, ml: 2 }}
            color="text.secondary"
            display="block"
            variant="caption"
          ></Typography>
        </li>

        <ListItem
          sx={{
            pl: 0,
          }}
        >
          <ListItemText
            primary=<span style={{ fontWeight: "bold" }}>
              {`$${coinData.market_data.circulating_supply.toLocaleString(
                "en"
              )}`}
            </span>
            secondary="Circulating Supply"
          />
        </ListItem>
        <Divider component="li" />
        <li>
          <Typography
            sx={{ mt: 0.5, ml: 2 }}
            color="text.secondary"
            display="block"
            variant="caption"
          ></Typography>
        </li>
      </List>
    </div>
  );
};

export default CoinDetails;
