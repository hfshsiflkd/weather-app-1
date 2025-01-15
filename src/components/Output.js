import Location from "../img/localization_icon.svg";
import Sun from "../img/sun.png";
import Moon from "../img/moon.png";
import { useEffect, useState } from "react";

const Output = (props) => {
  const {} = props;

  const [countriesSeacrch, setCountriesSearch] = useState("");
  const [countryData, setCountriesData] = useState([]);
  const fetchData = () => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((Response) => Response.json())
      .then((result) => {
        console.log("result", result.data);
        setCountriesData(result.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    console.log("use effect worked");
    fetchData();
  }, [countriesSeacrch]);

  const handlechange = (event) => {
    setCountriesSearch(event.target.value);
  };

  return (
    <div className="flex h-screen">
      <div className="flex h-screen absolute w-screen justify-center  ">
        <div className=" absolute z-40  flex flex-col  rounded-full justify-between items-center  ">
          <div className=" z-40 w-[467px] h-[80px] p-[16px] pr-[60px] bg-white mr-[50px] flex  rounded-full justify-between items-center m-[100px] ml-[30px] mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="35"
            height="35"
            viewBox="0 0 48 48"
          >
            <path d="M 20 3 C 10.622621 3 3 10.622621 3 20 C 3 29.377379 10.622621 37 20 37 C 22.066158 37 24.050119 36.630222 25.884766 35.953125 A 1.0001245 1.0001245 0 1 0 25.193359 34.076172 C 23.576006 34.673075 21.827842 35 20 35 C 11.703379 35 5 28.296621 5 20 C 5 11.703379 11.703379 5 20 5 C 28.296621 5 35 11.703379 35 20 C 35 25.107279 32.454831 29.605613 28.564453 32.316406 A 1.0001 1.0001 0 0 0 28.429688 33.84375 L 38.525391 43.939453 C 39.883682 45.297745 42.115514 45.299064 43.474609 43.941406 A 1.0001 1.0001 0 0 0 43.474609 43.939453 L 43.939453 43.476562 C 45.297745 42.118271 45.297158 39.884486 43.939453 38.525391 L 36.707031 31.292969 A 1.0001 1.0001 0 1 0 35.292969 32.707031 L 42.525391 39.939453 C 43.119686 40.534357 43.119099 41.468792 42.525391 42.0625 L 42.060547 42.525391 C 41.465643 43.119686 40.533161 43.119099 39.939453 42.525391 L 30.587891 33.173828 C 34.45771 30.057134 37 25.34874 37 20 C 37 10.622621 29.377379 3 20 3 z"></path>
          </svg>
          <input
            onChange={handlechange}
            type="text"
            placeholder="Search"
            className="w-[350px] h-[40px] border-none text-3xl focus:outline-none "
          />
          </div>
          
           {countryData.map((country, index) => {
              return <div key={index} className="flex flex-col"> {country.country} </div>
          })}
           
        </div>
       
        
      </div>

      <div className="flex-1 bg-customWhite flex-col flex  items-center justify-center ">
        <div className="text-black w-[414px] h-[760px] flex flex-col justify-center items-start  bg-white rounded-3xl z-30 backdrop-blur-sm shadow-lg bg-white/30">
          <div className="w-[414px] h-[514px] px-[40px] py-[56px] flex justify-between items-center flex-col">
            <div className="w-[334px] h-[80px] flex justify-center items-center">
              <div className="w-[291px] h-[80px] flex flex-col justify-center items-start">
                <p className="text-gray-400 text-xl">2sariin1</p>
                <h1 className="text-5xl font-extrabold">Ulaanbaatar</h1>
              </div>
              <img src={Location} style={{ width: "43px", height: "43px" }} />
            </div>
            <img src={Sun} style={{ width: "274px", height: "274px" }} />
          </div>
          <div className="px-12 w-[414px] h-[269px]">
            <div className="w-[318px] h-[165px] text-[110px] text-transparent bg-clip-text font-extrabold -mt-10 bg-gradient-to-b from-black to-white  font-extrabold">
              {" "}
              -16.9{" "}
            </div>
            <h6 className="font-extrabold mb-12 h-6 text-violet-600">Sunny</h6>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-customDark flex items-center justify-center flex-col">
        <div className="text-black w-[414px] h-[760px] flex flex-col justify-center items-start  bg-black rounded-3xl z-30 shadow-lg bg-customDark/75 backdrop-blur">
          <div className="w-[414px] h-[514px] px-[40px] py-[56px] flex justify-between items-center flex-col">
            <div className="w-[334px] h-[80px] flex justify-center items-center">
              <div className="w-[291px] h-[80px] flex flex-col justify-center items-start">
                <p className="text-gray-400 text-xl">2sariin1</p>
                <h1 className="text-5xl font-extrabold text-white">
                  Ulaanbaatar
                </h1>
              </div>
              <img src={Location} style={{ width: "43px", height: "43px" }} />
            </div>
            <img src={Moon} className="w-[300px] h-[300px]" />
          </div>
          <div className="px-12 w-[414px] h-[269px]">
            <div className="w-[318px] h-[165px] text-[110px] text-transparent bg-clip-text font-extrabold -mt-10 bg-gradient-to-b from-black to-white  font-extrabold">
              {" "}
              -16.9{" "}
            </div>
            <h6 className="font-extrabold mb-12 h-6 text-yellow-400">Sunny</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Output;
