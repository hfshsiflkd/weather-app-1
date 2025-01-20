import React from "react";
import dateFormat from "dateformat";
import Localization from "../icons/localization_icon";
import WeatherWithImages from "./Weathercondition";
import Loading from "../icons/Loading";

export const DayCard = (props) => {
  const { weatherLoding, weather } = props;
  return (
    <div className="flex-1 bg-customWhite flex-col flex  items-center justify-center ">
       {weatherLoding ? (
          <Loading/>
        ) : (
        <div className="text-black w-[414px] h-[760px] flex flex-col justify-center items-start  bg-white rounded-3xl z-30 backdrop-blur-sm shadow-lg bg-white/30">
          <div className="w-[414px] h-[514px] px-[40px] py-[56px] flex justify-between items-center flex-col">
            <div className="w-[334px] h-[80px] flex justify-center items-center">
              <div className="w-[291px] h-[80px] flex flex-col justify-center items-start">
                <p className="text-gray-400 text-xl">
                  {" "}
                  {dateFormat(weather.date, "mediumDate")}
                </p>
                <h1 className="text-5xl font-extrabold">{weather.city}</h1>
              </div>
              <Localization />
            </div>
            <WeatherWithImages condition={weather.condition} />
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
  );
};
