import React from "react";
import { useRouter } from "next/router";
import { getCountryByCode } from "helpers";
import Borders from "./Borders";
import CountryImage from "./CountryImage";

function CountryDetails({ country }) {
  const router = useRouter();

  const {
    name,
    capital,
    population,
    flags,
    region,
    subregion,
    tld,
    currencies,
    languages,
    borders,
  } = country[0];

  const handleCountryByCode = async (code) => {
    const country = await getCountryByCode(code);
    router.push(`/countries/${country[0].name.common}`);
  };

  const countryImage = flags.png;
  const formattedPopulation = population
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const nativeNames = name.nativeName ? name.nativeName : "";

  const nativeName = nativeNames
    ? Object.values(nativeNames).length > 1
      ? Object.values(nativeNames)[1].official
      : Object.values(nativeNames)[0].official
    : "n/a";

  const checkLanguages = () => {
    if (languages) {
      const getLanguages = Object.values(languages);
      const allLanguages =
        getLanguages.length > 1 ? getLanguages.join(", ") : getLanguages[0];

      return allLanguages;
    } else {
      return "n/a";
    }
  };

  const checkCurrencies = () => {
    if (currencies) {
      const getCurrencies = Object.values(currencies);
      const allCurrencies =
        getCurrencies.length > 1 ? getCurrencies.join(", ") : getCurrencies[0];

      return allCurrencies;
    } else {
      return "n/a";
    }
  };

  const allCapitals = capital ? capital.join(", ") : capital;

  return (
    <div className="pt-16 pb-[60px]">
      <div className="flex flex-col justify-start lg:flex-row lg:justify-between ">
        <CountryImage image={countryImage} name={name.common} />

        <div className="flex-1 pt-11 md:pt-11 lg:pt-0 xl:pt-11">
          <h1 className="font-extrabold text-[22px]">{name.common}</h1>
          <div className="flex flex-col justify-start md:flex-row md:justify-between">
            <div className="">
              <div className="pt-4 flex flex-col  xl:space-y-2">
                <div className="flex space-x-2">
                  <p className="font-semibold text-sm leading-8">
                    Native Name:
                  </p>
                  <p className="font-light text-sm leading-8">{nativeName}</p>
                </div>
                <div className="flex space-x-2">
                  <p className="font-semibold text-sm leading-8">Population:</p>
                  <p className="font-light text-sm leading-8">
                    {formattedPopulation}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <p className="font-semibold text-sm leading-8">Region:</p>
                  <p className="font-light text-sm leading-8">{region}</p>
                </div>
                <div className="flex space-x-2">
                  <p className="font-semibold text-sm leading-8">Subregion:</p>
                  <p className="font-light text-sm leading-8">{subregion}</p>
                </div>
                <div className="flex space-x-2">
                  <p className="font-semibold text-sm leading-8">Capital:</p>
                  <p className="font-light text-sm leading-8">{allCapitals}</p>
                </div>
              </div>
            </div>
            <div className="pt-8 md:pt-4">
              <div className="flex space-x-2">
                <p className="font-semibold text-sm leading-8">
                  Top Level Domain:
                </p>
                <p className="font-light text-sm leading-8">{tld}</p>
              </div>
              <div className="flex space-x-2">
                <p className="font-semibold text-sm leading-8">Currencies:</p>
                <p className="font-light text-sm leading-8">
                  {checkCurrencies()}
                </p>
              </div>
              <div className="flex space-x-2 max-w-[300px]">
                <p className="font-semibold text-sm leading-8">Languages:</p>
                <p className="font-light text-sm leading-8">
                  {checkLanguages()}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-[34px] md:pt-[20px]">
            <h2 className="text-[16px] font-semibold">Border Countries</h2>
            {borders && (
              <Borders borders={borders} handleClick={handleCountryByCode} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
