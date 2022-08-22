import React from "react";
import Country from "./Country";

function Countries({ countries }) {
  return (
    <div className="grid grid-cols-1 gap-10 mt-6 mb-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country) => (
        <Country key={country.name.official} country={country} />
      ))}
    </div>
  );
}

export default Countries;
