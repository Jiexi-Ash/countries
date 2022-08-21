import React from "react";

function Loader({ position = "center" }) {
  return (
    <div
      className={`flex items-center ${
        position === "center" ? "justify-center" : ""
      }`}
    >
      <div className=" w-4 h-4 border-b-2 border-black rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;
