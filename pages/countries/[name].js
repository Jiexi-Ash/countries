import React from "react";
import { getCountryByName } from "helpers";

function CountryPage() {
  return <main>CountryPage</main>;
}

export default CountryPage;

export const getStaticProps = async (context) => {
  const { name } = context.params;
};
