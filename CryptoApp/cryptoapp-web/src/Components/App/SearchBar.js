import React from "react";

const SearchBar = ({ searchText, handleSearch }) => {
  return (
    <div className="search-container-wrapper">
      <input
        className="search-container"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
