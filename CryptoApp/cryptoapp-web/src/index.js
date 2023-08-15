import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./Pages/App";
import CoinInfo from "./Pages/CoinInfo";

const root = document.getElementById("root");
const rootComponent = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/coin/:id" element={<CoinInfo />} />
    </Routes>
  </Router>
);

createRoot(root).render(rootComponent);
