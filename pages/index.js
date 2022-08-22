import { useState, useEffect } from "react";
import MainLayout from "components/UI/MainLayout";
import { getCountries, getCountriesByRegion } from "helpers";
import Options from "components/Home/Options";
import Countries from "components/Home/Countries";
import axios from "axios";

export default function Home({ countries, err }) {
  const [error, setError] = useState(err);
  const [currentCountries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countries);
  }, [countries]);

  const handleCountries = async () => {
    await axios
      .get("/api/countries/all")
      .then((res) => {
        console.log("hello hello");
        console.log(res);
        setCountries(res.data);
        setError("");
      })
      .catch((err) => {
        setError("Something went wrong");
      });
  };

  const handleClearFilter = async () => {
    await axios
      .get("/api/countries/all")
      .then((res) => {
        console.log("hello hello");
        console.log(res);
        setCountries(res.data);
        setError("");
      })
      .catch((err) => {
        setError("Something went wrong");
      });
  };

  const handleSearchByName = async (name) => {
    axios
      .get(`/api/countries/fetchByName?name=${name}`)
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        setError("Something went wrong");
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
      {countries && !error && (
        <>
          <Countries countries={currentCountries} />
        </>
      )}

      {error && (
        <div className="pt-20 flex justify-center items-center">{error}</div>
      )}
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  try {
    const countries = await getCountries();
    return {
      props: {
        countries,
        error: null,
      },
    };
  } catch (err) {
    return {
      props: {
        err: "something went wrong",
      },
    };
  }
};
