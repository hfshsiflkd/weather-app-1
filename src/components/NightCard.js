import React from 'react'
import dateFormat from 'dateformat'
import Localization from '../icons/localization_icon'
import WeatherWithImagesnigth from './WeatherconditionNigth'
import Loading from '../icons/Loading'

export const NightCard = (props) => {
    const {weatherLoding, weather}= props
  return (
    <div className="flex-1 bg-customDark flex items-center justify-center flex-col">
        {weatherLoding ? (
         <Loading/>
        ) : (
          <div className="text-black w-[414px] h-[760px] flex flex-col justify-center items-start  bg-black rounded-3xl z-30 shadow-lg bg-customDark/75 backdrop-blur">
            <div className="w-[414px] h-[514px] px-[40px] py-[56px] flex justify-between items-center flex-col">
              <div className="w-[334px] h-[80px] flex justify-center items-center">
                <div className="w-[291px] h-[80px] flex flex-col justify-center items-start">
                  <p className="text-gray-400 text-xl">
                    {dateFormat(weather.date, "mediumDate")}
                  </p>
                  <h1 className="text-5xl font-extrabold text-white">
                    {weather.city}
                  </h1>
                </div>
                <Localization />
              </div>
              <WeatherWithImagesnigth condition={weather.condition} />
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
  )
}
