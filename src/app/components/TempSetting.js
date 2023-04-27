import React from "react";

const TempSetting = ({ unit, setUnit }) => {
  return (
    <div className="settings">
      <h3>Temperature Units:</h3>
      <div className="settings select">
        <input
          type="radio"
          id="celsius"
          name="temperature-unit"
          value="metric"
          checked={unit === "metric"}
          onChange={(event) => setUnit(event.target.value)}
        />
        <label className="settings label" htmlFor="celsius">
          Celsius
        </label>
      </div>
      <div className="settings select">
        <input
          type="radio"
          id="fahrenheit"
          name="temperature-unit"
          value="imperial"
          checked={unit === "imperial"}
          onChange={(event) => setUnit(event.target.value)}
        />
        <label className="settings label" htmlFor="fahrenheit">
          Fahrenheit
        </label>
      </div>
    </div>
  );
};

export default TempSetting;
