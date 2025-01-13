import React from "react";
import Background from "./components/Background.js";
function App() {
  return (
    <div className="body">
      <Background />
      <div className="flex h-screen">
        <div className="flex-1 bg-customWhite flex-col flex  items-center justify-center ">
          <div className="z-40 w-[467px] h-[80px] p-[16px] pr-[60px] bg-white mr-[50px] flex rounded-full justify-between items-center ">
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
              // onChange={}
              type="text"
              placeholder="Search"
              className="w-[350px] h-[40px] border-none text-3xl focus:outline-none "
            />
          </div>
          <div className="text-black w-[414px] h-[760px] flex justify-center items-center bg-white rounded-3xl z-30 backdrop-blur-sm shadow-lg bg-white/30">
            Цагаан хэсэг
          </div>
        </div>
        <div className="flex-1 bg-customDark flex items-center justify-center">
          <div> </div>
          <div className="text-white w-[414px] h-[760px] flex justify-center items-center bg-black rounded-3xl z-30 backdrop-blur-lg shadow-lg bg-black/30">
            Хар хэсэг
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
