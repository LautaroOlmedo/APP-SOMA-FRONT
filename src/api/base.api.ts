import axios from "axios";

//const BASE_URL = "https://rickandmortyapi.com/api/";
const BASE_URL = "http://localhost:8000/api/";

export const instance = axios.create({
  baseURL: BASE_URL,
});
