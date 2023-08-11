import React from "react";
import "./Title.css";
function Title({ weather }) {
  return (
    <div className="infos">
      <h3>{weather.name}</h3>
      {weather.main ? <h1>{`${Math.round(weather.main.temp.toFixed())}°C`}</h1> : null}
      {weather.weather ? <h4>{`${weather.weather[0].main}`}</h4> : null}
      <div className="additional">
        <div>
          {weather.main ? (
            <small><b>Max:</b>{weather.main.temp_max.toFixed()}°C</small>
          ) : null}
          {weather.main ? (
            <small><b>Min:</b>{weather.main.temp_min.toFixed()}°C</small>
          ) : null}
        </div>
        <div>
          {weather.main ? (
            <small><b>Humidity:</b>{weather.main.humidity}%</small>
          ) : null}
          {weather.main ? (
            <small><b>Wind speed:</b>{weather.wind.speed}MPH</small>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Title;
