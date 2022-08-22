import { useState, useEffect } from "react";
import MainLayout from "components/UI/MainLayout";
import { getCountries, getCountriesByRegion } from "helpers";
import Options from "components/Home/Options";
import Countries from "components/Home/Countries";
import axios from "axios";

export default function Home({ countries }) {
  const [currentCountries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countries);
  }, [countries]);

  const getCountriesByR = async (region) => {
    axios
      .get(`/api/countries/region?region=${region}`)
      .then((res) => {
        console.log(res);
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCountries = async () => {
    const countries = await getCountries();
    setCountries(countries);
  };

  const handleClearFilter = async () => {
    await axios
      .get("/api/countries/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearchByName = async (name) => {
    axios
      .get(`/api/countries/fetchByName?name=${name}`)
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filterByRegion = (region) => {
    const filteredCountries = countries.filter((country) => {
      return country.region === region;
    });

    setCountries(filteredCountries);
  };

  return (
    <MainLayout>
      <Options
        onSelect={filterByRegion}
        onClearFilter={handleClearFilter}
        handleSearch={handleSearchByName}
        handleCountries={handleCountries}
      />
      <Countries countries={currentCountries} />
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
