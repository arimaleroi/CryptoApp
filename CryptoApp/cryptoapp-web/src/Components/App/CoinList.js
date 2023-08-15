import React from "react";
import { Link } from "react-router-dom";
import { UpIcon, DownIcon } from "../Icons";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import "../Styles/CoinList.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { formatNumber } from "../CoinInfo/FormatNumber";

const theme = createTheme({
  typography: {
    fontFamily: ["Segoe UI", "sans-serif"],
    fontSize: 15,
  },
});

const CoinList = ({ dataList }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="item-list-container">
        <TableContainer component={Paper} className="custom-table-container">
          <Table
            aria-label="table with sticky header"
            stickyHeader
            stripe="odd"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  className="table-header-cell"
                >
                  #
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  className="table-header-cell"
                >
                  Name
                </TableCell>
                <TableCell className="table-header-cell">Price</TableCell>
                <TableCell className="table-header-cell">24 h</TableCell>
                <TableCell className="table-header-cell">
                  Total Volume for 24 h
                </TableCell>
                <TableCell className="table-header-cell">Market Cap</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataList.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  className="item-row"
                >
                  <TableCell>{item.marketCapRank}</TableCell>
                  <TableCell component="th" scope="row">
                    <Link
                      key={item.id}
                      to={`/coin/${item.id}`}
                      className="item-link"
                    >
                      <div className="item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="item-name">{item.name}</div>
                      <div className="item-symbol">
                        {item.symbol.toUpperCase()}
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell>${formatNumber(item.currentPrice)}</TableCell>
                  <TableCell>
                    <span
                      style={{
                        color:
                          item.priceChangePercentage24h.toFixed(1) < 0
                            ? "red"
                            : "green",
                      }}
                    >
                      {item.priceChangePercentage24h < 0 ? (
                        <DownIcon />
                      ) : (
                        <UpIcon />
                      )}
                      {item.priceChangePercentage24h.toFixed(1)}%
                    </span>
                  </TableCell>
                  <TableCell>
                    ${item.totalVolume.toLocaleString("en")}
                  </TableCell>
                  <TableCell>${item.marketCap.toLocaleString("en")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </ThemeProvider>
  );
};

export default CoinList;
