import React from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForecast from "./components/WeatherForecast";
import TempSettings from "./components/TempSettings";
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
      <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />
      {weatherData && (
        <>
          <CurrentWeather weatherData={weatherData} unit={unit} />
          <WeatherForecast weatherData={weatherData} unit={unit} />
        </>
      )}
      <TempSettings unit={unit} handleUnitChange={handleUnitChange} />
    </div>
  );
}

export default App;
