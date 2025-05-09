// apis/axiosInstance.ts
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PROGRAMMERS,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4MWQ2MDBiZWVmNjE5MTIzYzUzMWIzNiIsImVtYWlsIjoidGVzdGFhYUBuYXZlci5jb20ifSwiaWF0IjoxNzQ2Nzc4NTg3fQ.Wt_xWDrXdeRcZO85WTCOEAwj3Ckw8VWPJoYaqLbEQ2Y`,
  },
});
