import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function Country({ country }) {
  const router = useRouter();
  const { name, capital, population, flags, region } = country;
  const officialName = name.common;
  const countryImage = flags.png;
  const formattedPopulation = population
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const handleRouter = () => {
    router.push(`/countries/${name.common}`);
  };

  const allCapitals = capital ? capital.join(", ") : capital;

  return (
    <div
      className="rounded-lg shadow-lg bg-white max-w-sm cursor-pointer"
      onClick={handleRouter}
    >
      <img src={countryImage} alt={officialName} className="w-full h-40 " />

      <div className="pt-6 px-6 pb-[46px]">
        <p className="text-lg font-extrabold">{officialName}</p>

        <div className="mt-4">
          <div className="flex">
            <span className="font-semibold">Population:</span>
            <span className="ml-2 font-light">{formattedPopulation}</span>
          </div>
          <div className="flex">
            <span className="font-semibold">Region:</span>
            <span className="ml-2 font-light">{region}</span>
          </div>
          <div className="flex">
            <span className="font-semibold">capital:</span>
            <span className="ml-2 font-light">{allCapitals}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
