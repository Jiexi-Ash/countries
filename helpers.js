import axios from "axios";

const GET_ALL_COUNTRIES_URL = "https://restcountries.com/v3.1";

export const getCountries = async () => {
  try {
    const { data } = await axios.get(`${GET_ALL_COUNTRIES_URL}/all`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCountryByName = async (name) => {
  try {
    const { data } = await axios.get(
      `${GET_ALL_COUNTRIES_URL}/name/${name}?fullText=true`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCountriesByRegion = async (region) => {
  try {
    const { data } = await axios.get(
      `${GET_ALL_COUNTRIES_URL}/region/${region}`
    );

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
