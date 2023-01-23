const BASE_URL = "https://restcountries.com/v3.1/";

export const getAllCountries = () => `${BASE_URL}all?fields=name,capital,flags,population,region`;
export const getCountryByName = (name) => `${BASE_URL}name/${name}`;
export const getNeighborsByCode = (codes) => `${BASE_URL}alpha?codes=${codes.join(",")}`;
