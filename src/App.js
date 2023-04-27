import React from "react";
import SearchBar from "./app/components/SearchBar";
import CurrentWeather from "./app/components/CurrentWeather";
import WeatherForecast from "./app/components/WeatherForecast";
import TempSetting from "./app/components/TempSetting";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = React.useState(null);
  const [city, setCity] = React.useState("");
  const [unit, setunit] = React.useState("metric");

  //Function to handle search submit event
  const handleSearch = async () => {
    // Fetch weather data from the API based on the current city and unit settings
    // and store it in the state variable
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=950d9f6c2964709d1f6123354aa0723d`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  //Function to handle the unit change event
  const handleUnitChange = (event) => {
    setunit(event.target.value);
  };

  return (
    <div className="body">
      <h1>React Weather App</h1>
      <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />
      {weatherData && (
        <>
          <CurrentWeather weatherData={weatherData} unit={unit} />
          <WeatherForecast weatherData={weatherData} unit={unit} />
        </>
      )}
      <TempSetting unit={unit} handleUnitChange={handleUnitChange} />
    </div>
  );
}

export default App;
