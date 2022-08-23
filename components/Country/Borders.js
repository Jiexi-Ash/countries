import React from "react";

function Borders({ borders, handleClick }) {
  const onClickHandler = (code) => {
    handleClick(code);
  };
  return (
    <div className="grid grid-cols-5  gap-3 pt-[16px] md:grid-cols-10 cursor-pointer">
      {borders.map((border) => (
        <div
          className=" drop-shadow-md bg-white rounded-md text-center text-sm py-[4px] dark:bg-bgDark"
          key={border}
          onClick={() => onClickHandler(border)}
        >
          <span className="font-light text-center">{border}</span>
        </div>
      ))}
    </div>
  );
}

export default Borders;
