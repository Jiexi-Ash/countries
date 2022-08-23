import React from "react";

function Loader({ position = "center" }) {
  return (
    <div
      className={`flex items-center ${
        position === "center" ? "justify-center" : ""
      }`}
    >
      <div className=" w-4 h-4 border-b-2 border-[#C4C4C4] rounded-full animate-spin lg:w-6 lg:h-6"></div>
    </div>
  );
}

export default Loader;
