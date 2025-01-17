import Localization from "../icons/localization_icon"
export const Search = (props) => {
    const {handlechange,countriesSeacrch,handleCityClick,filteredData}= props
  return (
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
  )
}
