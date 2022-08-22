import React from "react";
import { getCountryByName } from "helpers";

function CountryPage({ country }) {
  console.log(country);
  return <main>CountryPage</main>;
}

export default CountryPage;

export const getStaticProps = async (context) => {
  const { name } = context.params;

  const country = await getCountryByName(name);

  return {
    props: {
      country,
    },
  };
};

export const getStaticPaths = async () => {
  const countries = await getCountries();

  const paths = countries.map((country) => ({
    params: {
      name: country.name.official,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
