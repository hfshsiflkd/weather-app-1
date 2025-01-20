import React from "react";
import UseAnimations from "react-useanimations";
import activity from "react-useanimations/lib/activity";
import Loading from "../icons/Loading";

export const Airpollution = (props) => {
  const { weather, weatherLoding } = props;

  const Airpollutionemoji = () => {
    if (weather.airquality <= 50) {
      return "😇";
    } else if (weather.airquality <= 100) {
      return "😑";
    } else if (weather.airquality <= 150) {
      return "😕";
    } else if (weather.airquality <= 200) {
      return "😷";
    } else if (weather.airquality <= 300) {
      return "🏭";
    } else if (weather.airquality <= 500) {
      return "💀";
    }
  };

  return (
    <div className="flex h-screen absolute w-screen justify-start items-end overflow-hidden ">
     
        <div className="w-[200px] h-[70px] bg-white rounded-lg flex justify-evenly items-center flex-col ml-[30px] mb-[30px]">
        {weatherLoding ? (
        <Loading/>
      ) : (
          <div className=" w-[200px] flex flex justify-evenly items-center">
            {" "}
            <div className="w-[50px] h-[50px] rounded-lg flex justify-center items-center text-4xl font-semibold ">
              {Airpollutionemoji()}
            </div>
            <div className="w-[50px] h-[50px] text-black rounded-lg flex justify-center items-center text-3xl font-semibold">
              {Math.floor(weather.airquality)}
            </div>
            <div className="w-[50px] h-[50px] rounded-lg flex justify-center items-center text-4xl font-semibold ">
              {" "}
              <UseAnimations animation={activity} size={56} />
            </div>
          </div>)}
         
        </div>
      
    </div>
  );
};
