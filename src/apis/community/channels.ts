import axios from "axios";

export const channelsAxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_PROGRAMMERS}/channels`,
  withCredentials: false,
});
