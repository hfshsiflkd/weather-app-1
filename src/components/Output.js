import { useEffect, useState } from "react";
import { CitiesFilter } from "../utils/Citiesfilter";
import { DayCard } from "./DayCard";
import { NightCard } from "./NightCard";
import { Search } from "./Search";
import { Airpollution } from "./Airpollution";

const WEATHER_API_KEY = "5b55bf7eca3c4e1b96622036251501";

const Output = (props) => {
  const [countriesSeacrch, setCountriesSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
  const [weatherLoding, setWeatherLoading] = useState(false);
  const [weather, setWeather] = useState({});
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const result = await response.json();
      const countiesAndCity = CitiesFilter(result.data);
      setCities(countiesAndCity);
      setFilteredData(countiesAndCity);
    } catch (error) {
      console.log("error");
    }
    setLoading(false);
  };
  const getWeather = async () => {
    setWeatherLoading(true);

    try {
      const response = await fetch(
        ` https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${selectedCity}&aqi=yes&alerts=no`,
        { method: "get", headers: { "Content-type": "application/json" } }
      );
      const result = await response.json();
      console.log(result);

      const weatherData = {
        max_c: result.forecast.forecastday[0].day.maxtemp_c,
        min_c: result.forecast.forecastday[0].day.mintemp_c,
        condition: result.forecast.forecastday[0].day.condition.text,
        date: result.forecast.forecastday[0].date,
        icon: result.forecast.forecastday[0].day.condition.icon,
        city: result.location.name,
        airquality: result.forecast.forecastday[0].day.air_quality.pm2_5,
      };

      setWeather(weatherData);
    } catch (error) {
      console.log("error");
    } finally {
      setWeatherLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    getWeather();
  }, [selectedCity]);

  const handlechange = (event) => {
    setCountriesSearch(event.target.value);
    setFilteredData(
      cities
        .filter((city) =>
          city.toLowerCase().startsWith(event.target.value.toLowerCase())
        )
        .slice(0, 4)
    );
  };

  const handleCityClick = (city) => {
    setSelectedCity(city.split(",")[0]);
    setFilteredData([]);
    setCountriesSearch("");
  };

  return (
    <div className="flex h-screen">
      <Search
        handlechange={handlechange}
        handleCityClick={handleCityClick}
        filteredData={filteredData}
        countriesSeacrch={countriesSeacrch}
      />
      <DayCard weather={weather} weatherLoding={weatherLoding} />
      <NightCard weather={weather} weatherLoding={weatherLoding} />
      <Airpollution selectedCity={selectedCity} weather={weather} weatherLoding={weatherLoding} />
    </div>
  );
};
export default Output;
