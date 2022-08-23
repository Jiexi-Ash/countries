import React from "react";
import { getCountryByName, getCountries, getCountryByCode } from "helpers";
import MainLayout from "components/UI/MainLayout";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import CountryDetails from "components/Country/CountryDetails";
import { useRouter } from "next/router";

function CountryPage({ country, error }) {
  const router = useRouter();
  const handleBack = () => {
    // go back
    router.back();
  };

  return (
    <MainLayout>
      <>
        <button
          className="py-[6px] px-6  font-light text-sm  bg-white outline-none border-none drop-shadow-xl rounded-md leading-5 dark:bg-[#2B3844]"
          onClick={handleBack}
        >
          <span className="flex items-center">
            <ArrowNarrowLeftIcon className="w-4 h-4 mr-2" />
            <span>Back</span>
          </span>
        </button>

        {country && <CountryDetails country={country} />}
        {!country && error && <div>{error}</div>}
      </>
    </MainLayout>
  );
}

export default CountryPage;

export const getStaticProps = async (context) => {
  const { name } = context.params;

  try {
    const country = await getCountryByName(name);
    return {
      props: {
        country,
      },
    };
  } catch (e) {
    return {
      props: {
        error: "something went wrong",
      },
    };
  }
};

export const getStaticPaths = async () => {
  const countries = await getCountries();

  const paths = countries.map((country) => ({
    params: {
      name: country.name.common,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
