import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ExchangesComponent = ({ tickers }) => {
  const filteredTickers = tickers.filter((ticker) => ticker.trade_url);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="tickers table">
        <TableHead>
          <TableRow>
            <TableCell className="table-header-cell">Exchange</TableCell>
            <TableCell className="table-header-cell">Pair</TableCell>
            <TableCell className="table-header-cell">Price</TableCell>
            <TableCell className="table-header-cell">Spread</TableCell>
            <TableCell align="right" className="table-header-cell">
              24h Volume
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredTickers.map((ticker, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                <a
                  href={ticker.trade_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1976d2", textDecoration: "none" }}
                >
                  {ticker.market.name}
                </a>
              </TableCell>
              <TableCell className="table-cell">
                <a
                  href={ticker.trade_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1976d2", textDecoration: "none" }}
                >
                  {ticker.base}/{ticker.target}
                </a>
              </TableCell>
              <TableCell>
                $
                {ticker.last.toLocaleString("en", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </TableCell>
              <TableCell>
                {ticker.bid_ask_spread_percentage !== null
                  ? ticker.bid_ask_spread_percentage.toFixed(2) + "%"
                  : "N/A"}
              </TableCell>
              <TableCell align="right">
                $
                {ticker.converted_volume.usd.toLocaleString("en", {
                  maximumFractionDigits: 2,
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExchangesComponent;
