import React from "react";
import WeatherForecastItem from "./weatherForecastItem";

const WeatherForecast = ({ forecastData }) => {
  return (
    <div>
      <h2>Weather Forecast</h2>
      <div>
        {forecastData &&
          forecastData.map((data, index) => (
            <WeatherForecastItem key={index} forecast={data} />
          ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
