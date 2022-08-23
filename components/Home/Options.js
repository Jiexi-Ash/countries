import { useState } from "react";
import Loader from "components/UI/Loader";
import { SearchIcon, ChevronDownIcon, XIcon } from "@heroicons/react/solid";

const DEFAULT_TEXT = "Filter by Region";
function Options({ onSelect, onClearFilter, handleSearch, handleCountries }) {
  const [loading, setLoading] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [defaultText, setDefaultText] = useState(DEFAULT_TEXT);
  const [searchInput, setSearchInput] = useState("");

  const onClickHandler = (region) => {
    setShowSelect(false);
    setDefaultText(region);
    onSelect(region);
  };

  const clearFilter = async () => {
    setLoading(true);
    await onClearFilter();
    setShowSelect(false);
    setDefaultText(DEFAULT_TEXT);
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await handleSearch(searchInput);
    setLoading(false);
  };

  const clearSearch = async () => {
    setLoading(true);
    await handleCountries();
    setSearchInput("");
    setLoading(false);
  };

  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="flex  items-center bg-white drop-shadow-xl py-[14px] max-w-sm md:py-[18px]  md:max-w-[350px] rounded-md md:w-full dark:bg-bgDark">
        <SearchIcon className="w-6 h-6 mr-2  text-[#C4C4C4] md:w-[18px] md:h-[18px] ml-8" />
        <form onSubmit={handleSubmit} className="flex-1 pr-4 ">
          <input
            type="text"
            placeholder="Search for a country"
            className="text-[12px] text-[#C4C4C4] py-0 w-full bg-white  border-none focus:ring-0 dark:bg-bgDark"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
        </form>
        {searchInput.length > 1 && !loading && (
          <XIcon
            className="w-6 h-6 mr-4  text-[#C4C4C4] md:w-[18px] md:h-[18px] ml-8 hover:cursor-pointer"
            onClick={clearSearch}
          />
        )}

        {searchInput.length > 1 && loading && (
          <div className="mr-4">
            <Loader />
          </div>
        )}
      </div>

      <div className="w-full max-w-[250px] relative">
        <div className="flex items-center justify-center space-x-2">
          <button
            className="w-full flex justify-between items-center py-[14px] bg-white drop-shadow-xl  rounded-md mt-10 text-[12px] px-6 md:mt-0 md:py-[18px] md:px-[18px] dark:bg-bgDark"
            onClick={() => setShowSelect(!showSelect)}
          >
            <span className="font-sans">{defaultText}</span>
            <ChevronDownIcon className="w-4 h-4 text-[#111517] dark:text-white" />
          </button>
          {defaultText !== DEFAULT_TEXT && (
            <button
              className="bg-white py-[14px] px-4 drop-shadow-xl rounded-md mt-10 md:mt-0 dark:bg-bgDark"
              onClick={clearFilter}
            >
              {defaultText !== DEFAULT_TEXT && loading ? (
                <Loader />
              ) : (
                <XIcon className="w-4 h-4 text-[#111517] lg:w-6 lg:h-6 dark:text-[#c4c4c4]" />
              )}
            </button>
          )}
        </div>

        <div
          className={`${
            showSelect ? "block" : "hidden"
          } absolute top-[85px] right-0 z-30  w-full  mt-1 bg-white drop-shadow-xl  rounded-md md:top-14 dark:bg-bgDark`}
        >
          <ul className="flex flex-col  py-4">
            <li
              className="py-2 px-6 hover:bg-gray-50 hover:cursor-pointer hover:w-full dark:hover:bg-[#C4C4C4] transition-all duration-400"
              onClick={() => onClickHandler("Africa")}
            >
              <span className="list">Africa</span>
            </li>
            <li
              className="py-2 px-6 hover:bg-gray-50 hover:cursor-pointer hover:w-full dark:hover:bg-[#C4C4C4] transition-all duration-400"
              onClick={() => onClickHandler("Americas")}
            >
              <span className="list">America</span>
            </li>
            <li
              className="py-2 px-6 hover:bg-gray-50 hover:cursor-pointer hover:w-full dark:hover:bg-[#C4C4C4] transition-all duration-400"
              onClick={() => onClickHandler("Asia")}
            >
              <span className="list">Asia</span>
            </li>
            <li
              className="py-2 px-6 hover:bg-gray-50 hover:cursor-pointer hover:w-full dark:hover:bg-[#C4C4C4] transition-all duration-400"
              onClick={() => onClickHandler("Europe")}
            >
              <span className="list">Europe</span>
            </li>
            <li
              className="py-2 px-6  hover:bg-gray-50 hover:cursor-pointer hover:w-full dark:hover:bg-[#C4C4C4] transition-all duration-400"
              onClick={() => onClickHandler("Oceania")}
            >
              <span className="list">Oceania</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Options;
