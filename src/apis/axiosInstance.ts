import axios from "axios";
import { useAuthStore } from "../stores/authStore";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_PROGRAMMERS}`,
  withCredentials: false,
});

axiosInstance.interceptors.request.use((config) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4MWVlYTFhMDc2NGJhNzY0MWRjZDUxNiIsImVtYWlsIjoieW9vanVuZ0BnbWFpbC5jb20ifSwiaWF0IjoxNzQ2OTc0ODc0fQ.o010ImT36KPaVNYRq4Pp2HUxMV9dOB67FY8YcKBpzc4";
  // useAuthStore.getState().accessToken;
  // console.log("token: ", token);
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

let retry = false;

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 403 && !retry) {
      console.log("token 실패");
      retry = true;
      try {
        const { data } = await axiosInstance.post("/token");
        useAuthStore.setState({
          accessToken: data.accessToken,
          isLoggedIn: true,
        });
        retry = false;
        originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (e) {
        console.log(e);
      }
    }
  }
);
