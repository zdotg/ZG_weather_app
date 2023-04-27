import React from "react";
import WeatherIcon from "./weatherIcon";

const WeatherForecastItem = ({ forecast }) => {
  const date = new Date(forecast.dt * 1000);
  const dayOfWeek = date.toLocaleDateString("en-us", { weeday: "long" });
  const temperature = Math.round(forecast.temp.day);

  return (
    <div>
      <h3>{dayOfWeek}</h3>
      <div>
        <WeatherIcon code={forecast.weather[0].icon} />
        <span>{temperature}&deg;</span>
      </div>
    </div>
  );
};

export default WeatherForecastItem;
