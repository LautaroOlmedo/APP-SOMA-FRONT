import axios from "axios";

//const BASE_URL = "https://rickandmortyapi.com/api/";
const BASE_URL2 = "http://localhost:8000/";

export const instance = axios.create({
  baseURL: BASE_URL2,
});
