// apis/axiosInstance.ts
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PROGRAMMERS,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4MGRjYjIwMjYwOTcxMTIwODI5MjQ2NCIsImVtYWlsIjoicGFya0BuYXZlci5jb20ifSwiaWF0IjoxNzQ2MzQ2NTczfQ.DNi0pvlFx4AygF7jnHmTJGbj-TgRLype-4W0I7DMxP0`,
  },
});
