const BASE_URL = "https://restcountries.com/v3.1/";

export const getAllCountries = () => `${BASE_URL}all?fields=name,capital,flags,population,region`;
export const searchCountryByName = (name) => `${BASE_URL}name/${name}`;
export const filterByCode = (codes) => `${BASE_URL}alfa?codes=${codes.join(",")}`;
