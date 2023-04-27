import React, { useState } from "react";

const SearchBar = ({ city, setCity, handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(query);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-bar input"
        type="text"
        value={query}
        onChange={handleChange}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
