import "./App.css";
import SearchBar from "./Components/SearchBar";
import Title from "./Components/Title";
import { HiCloud } from "react-icons/hi2";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [weather, setWeather] = useState('');
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
  const apiKey = "3c55d79ad6bcde2f6f031ce795914e1c";

  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper-title">
          <HiCloud />
          <h4>Weather App</h4>
        </div>
        <div className="wrapper-content">
          <SearchBar setCity={setCity} city={city} setWeather={setWeather}/>
          <Title setWeather={setWeather} weather={weather}/>
        </div>
      </div>
    </div>
  );
}

export default App;
