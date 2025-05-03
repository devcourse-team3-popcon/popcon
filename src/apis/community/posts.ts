import axios from "axios";

export const postsAxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_PROGRAMMERS}/posts`,
  withCredentials: false,
});
