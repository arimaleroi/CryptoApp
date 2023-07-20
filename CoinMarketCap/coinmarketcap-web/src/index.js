import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import CoinInfo from './CoinInfo';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/coin/:id" element={<CoinInfo />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);