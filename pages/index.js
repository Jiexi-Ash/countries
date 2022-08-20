import { useState } from "react";
import MainLayout from "components/UI/MainLayout";
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { getCountries } from "helpers";
import Options from "components/Home/Options";
import Countries from "components/Home/Countries";

export default function Home({ countries }) {
  return (
    <MainLayout>
      <Options />
      <Countries countries={countries} />
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  const countries = await getCountries();
  return {
    props: {
      countries,
    },
  };
};
