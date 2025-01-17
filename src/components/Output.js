import { useEffect, useState } from "react";
import { CitiesFilter } from "../utils/Citiesfilter";
import Localization from "../icons/localization_icon";
import dateFormat, { masks } from "dateformat";
import WeatherWithImages from "./Weathercondition";

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
        ` https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${selectedCity}`,
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
      <div className="flex h-screen absolute w-screen justify-center overflow-hidden ">
        <div className=" absolute z-40  flex flex-col  rounded-full justify-between items-center  ">
          <div className=" z-40 w-[467px] h-[80px] p-[16px] pr-[60px] bg-white mr-[50px] flex  rounded-full justify-between items-center m-[100px] ml-[30px] mb-0">
            <img
              src="./img/Vector.png"
              className="w-[34px] h-[34px] opacity-30"
            />
            <input
              onChange={handlechange}
              type="text"
              value={countriesSeacrch}
              placeholder="Search"
              className="w-[350px] h-[40px] border-none text-3xl focus:outline-none "
            />
          </div>
          <div className=" bg-white rounded-lg overflow-hidden mt-2.5 rounded-3xl bg-white/80 py-4 shadow-lg backdrop-blur-md mr-[20px] ">
            {countriesSeacrch.length > 0 &&
              filteredData.map((city, index) => (
                <div
                  onClick={() => handleCityClick(city)}
                  key={index}
                  className="flex w-[400px] items-center gap-x-4 px-6 py-2 pl-0 transition-all duration-300 hover:bg-gray-100 cursor-pointer"
                >
                  <Localization />
                  {city}
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="flex-1 bg-customWhite flex-col flex  items-center justify-center ">
        {weatherLoding ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="text-black w-[414px] h-[760px] flex flex-col justify-center items-start  bg-white rounded-3xl z-30 backdrop-blur-sm shadow-lg bg-white/30">
            <div className="w-[414px] h-[514px] px-[40px] py-[56px] flex justify-between items-center flex-col">
              <div className="w-[334px] h-[80px] flex justify-center items-center">
                <div className="w-[291px] h-[80px] flex flex-col justify-center items-start">
                  <p className="text-gray-400 text-xl">
                    {" "}
                    {dateFormat(weather.date, "mediumDate")}
                  </p>
                  <h1 className="text-5xl font-extrabold">{selectedCity}</h1>
                </div>
                <Localization />
              </div>
              <WeatherWithImages  condition={weather.condition}/>
            </div>

            <div className="px-12 w-[414px] h-[269px]">
              <div className="w-[318px] h-[165px] text-[90px] text-transparent bg-clip-text font-extrabold -mt-10 bg-gradient-to-b from-black to-white  font-extrabold">
                {weather.max_c}°C
              </div>
              <h6 className="font-extrabold mb-12 h-6 text-violet-600">
                {weather.condition}
              </h6>
            </div>
          </div>
        )}
        <img
          src={"./img/Ellipse sun.png"}
          className="w-[176px] h-[176px] absolute top-0 mr-[400px]"
        />
      </div>

      <div className="flex-1 bg-customDark flex items-center justify-center flex-col">
        {weatherLoding ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="text-black w-[414px] h-[760px] flex flex-col justify-center items-start  bg-black rounded-3xl z-30 shadow-lg bg-customDark/75 backdrop-blur">
            <div className="w-[414px] h-[514px] px-[40px] py-[56px] flex justify-between items-center flex-col">
              <div className="w-[334px] h-[80px] flex justify-center items-center">
                <div className="w-[291px] h-[80px] flex flex-col justify-center items-start">
                  <p className="text-gray-400 text-xl">
                    {dateFormat(weather.date, "mediumDate")}
                  </p>
                  <h1 className="text-5xl font-extrabold text-white">
                    {selectedCity}
                  </h1>
                </div>
                <Localization />
              </div>
              <img src={"./img/moon.png"} className="w-[300px] h-[300px]" />
            </div>
            <div className="px-12 w-[414px] h-[269px]">
              <div className="w-[318px] h-[165px] text-[90px] text-transparent bg-clip-text font-extrabold -mt-10 bg-gradient-to-b from-white to-black  font-extrabold">
                {weather.min_c}°C
              </div>
              <h6 className="font-extrabold mb-12 h-6 text-yellow-400">
                {weather.condition}
              </h6>
            </div>
          </div>
        )}
        <img
          src={"./img/Ellipse.png"}
          className="w-[176px] h-[176px] absolute bottom-0 ml-[400px]"
        />
      </div>
    </div>
  );
};
export default Output;
