import React, { useState } from "react";
import "./SearchBar.css";
import axios from "axios";
function SearchBar({ setCity, city, setWeather }) {
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
  const apiKey = "3c55d79ad6bcde2f6f031ce795914e1c";

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleClick = () => {
    axios
      .get(baseUrl + `q=${city}&units=metric&appid=${apiKey}`)
      .then((res) => {
        setWeather(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setCity("");
  };

  return (
    <div className="searchBar">
      <div className="searchContent">
        <input
          type="text"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleClick();
            }
          }}
          onChange={handleChange}
          value={city}
          placeholder="City name"
        />
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
