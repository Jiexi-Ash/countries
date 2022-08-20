import { useState } from "react";
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/solid";

function Options() {
  const [showSelect, setShowSelect] = useState(false);
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="flex  items-center bg-white drop-shadow-xl py-[14px] md:py-[18px] w-full md:max-w-[400px] rounded-md">
        <SearchIcon className="w-6 h-6 mr-2  text-[#C4C4C4] md:w-[18px] md:h-[18px] ml-8" />
        <input
          type="text"
          placeholder="Search for a country"
          className="text-[12px] text-[#C4C4C4] py-0 w-full border-none focus:ring-0"
        />
      </div>

      <div className="w-full max-w-[200px] relative">
        <button
          className="w-full flex justify-between items-center py-[14px] bg-white drop-shadow-xl  rounded-md mt-10 text-[12px] px-6 md:mt-0 md:py-[18px] md:px-[18px]"
          onClick={() => setShowSelect(!showSelect)}
        >
          <span className="font-sans">Filter by Region</span>
          <ChevronDownIcon className="w-4 h-4 text-[#111517]" />
        </button>

        <div
          className={`${
            showSelect ? "block" : "hidden"
          } absolute top-[85px] right-0 z-30  w-full  mt-1 bg-white drop-shadow-xl  rounded-md md:top-14`}
        >
          <ul className="flex flex-col space-y-3 px-6 py-4">
            <li className="hover:bg-gray-50 hover:cursor-pointer hover:w-full">
              <span className="list">Africa</span>
            </li>
            <li className="hover:bg-gray-50 hover:cursor-pointer hover:w-full">
              <span className="list">America</span>
            </li>
            <li className="hover:bg-gray-50 hover:cursor-pointer hover:w-full">
              <span className="list">Asia</span>
            </li>
            <li className="hover:bg-gray-50 hover:cursor-pointer hover:w-full">
              <span className="list">Europe</span>
            </li>
            <li className="hover:bg-gray-50 hover:cursor-pointer hover:w-full">
              <span className="list">Oceania</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Options;
