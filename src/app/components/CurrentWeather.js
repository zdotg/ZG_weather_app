import React from "react";

const CurrentWeather = ({ weatherData, unit }) => {
  if (!weatherData) {
    return <div>Loading...</div>; // placeholder for unavailable data
  }
  const { name, main, weather } = weatherData;

  if (!main) {
    return <div>Loading...</div>; // placeholder for unavailable data
  }

  const temperature =
    unit === "metric"
      ? main.temp.toFixed(1)
      : (main.temp * 1.8 + 32).toFixed(1);
  const feelsLike =
    unit === "metric"
      ? main.feels_like.toFixed(1)
      : (main.temp * 1.8 + 32).toFixed(1);

  return (
    <div>
      <h2>Current Weather in {name}</h2>
      <p>
        Temperature: {temperature} {unit === "metric" ? "°C" : "°F"}
      </p>
      <p>
        Feels like: {feelsLike} {unit === "metric" ? "°C" : "°F"}
      </p>
      <p>Humidity: {main.humidity}%</p>
      <p>
        Wind Speed: {main.speed} {unit === "metric" ? "m/s" : "mph"}
      </p>
      <img
        src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
        alt={weather[0].description}
      />
      <p>{weather[0].description}</p>
    </div>
  );
};

export default CurrentWeather;
