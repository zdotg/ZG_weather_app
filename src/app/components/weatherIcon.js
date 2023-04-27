import React from "react";

const WeatherIcon = ({ code }) => {
  const iconUrl = `http://openweathermap.org/img/w/${code}.png`;

  return (
    <img
      src={iconUrl}
      alt="Weather Icon"
      style={{ width: "50px", height: "50px" }}
    />
  );
};

export default WeatherIcon;
