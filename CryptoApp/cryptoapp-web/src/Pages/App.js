import React, { useState, useEffect } from "react";
import "../Components/Styles/App.css";
import CoinList from "../Components/App/CoinList";
import SearchBar from "../Components/App/SearchBar";
import ResponsiveAppBar from "../Components/App/ResponsiveAppBar";
import Footer from "../Components/CoinInfo/CoinFooter";

function App() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5555/api/Coin/markets", {
        method: "get",
      });

      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        console.error("Error while fetching data");
      }
    } catch (error) {
      console.error("Error while fetching data", error);
    }
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = data.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchText.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <ResponsiveAppBar />
      <div className="coin-container">
        <SearchBar searchText={searchText} handleSearch={handleSearch} />
        <CoinList dataList={filteredData} />
      </div>
      <Footer />
    </div>
  );
}
export default App;
