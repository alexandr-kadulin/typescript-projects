import React from "react";
import { useGlobalContext } from "../context/appContext";

export const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2>search hucker news</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => handleSearch && handleSearch(e.target.value)}
      />
    </form>
  );
};
