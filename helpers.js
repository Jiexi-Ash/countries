import axios from "axios";

const GET_ALL_COUNTRIES_URL = "https://restcountries.com/v3.1";

export const getCountries = async () => {
  try {
    const { data } = await axios.get(`${GET_ALL_COUNTRIES_URL}/all`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCountryByName = async (name) => {
  try {
    const { data } = await axios.get(`${GET_ALL_COUNTRIES_URL}/name/${name}`);

    return data;
  } catch (error) {
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
    throw error;
  }
};

export const getCountryByOfficialName = async (name) => {
  try {
    const { data } = await axios.get(
      `${GET_ALL_COUNTRIES_URL}/name/${name}?fullText=true`
    );

    return data;
  } catch (error) {
    throw error;
  }
};

export const getCountryByCode = async (code) => {
  try {
    const { data } = await axios.get(`${GET_ALL_COUNTRIES_URL}/alpha/${code}`);

    return data;
  } catch (error) {
    throw error;
  }
};
