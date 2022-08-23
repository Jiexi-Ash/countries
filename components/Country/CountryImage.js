import React from "react";

function CountryImage({ image, name }) {
  return (
    <div className="w-full  lg:w-2/4 ">
      <div className="w-[320px]  md:w-full md:h-[350px] lg:w-[400px] lg:h-[300px]  xl:w-[560px] h-56 xl:h-[401px] rounded-lg shadow-lg bg-white">
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

export default CountryImage;
