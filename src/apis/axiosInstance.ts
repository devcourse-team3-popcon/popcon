import axios from "axios";
import { useAuthStore } from "../stores/authStore";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_PROGRAMMERS}`,
  withCredentials: false,
});

axiosInstance.interceptors.request.use((config) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4MTYwMTUzZjk0MGI2NTE1YmY0ZTExZiIsImVtYWlsIjoidGVzdDEyIn0sImlhdCI6MTc0NjI3MjU5Nn0.Ctm6jGc9u4WI0CyxvMPsq3ojb7jn-X89krSuomKRDGY";
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
