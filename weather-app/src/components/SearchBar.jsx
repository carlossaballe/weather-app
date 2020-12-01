import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <input
        className="search-box"
        type="text"
        placeholder="Buscar una ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
    </form>
  );
}
