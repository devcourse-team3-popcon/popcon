import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://13.125.208.179:5007",
});
