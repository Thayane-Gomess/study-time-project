import axios from "axios";

export const api = axios.create({
  baseURL: "https://study-time-api.onrender.com"
});

