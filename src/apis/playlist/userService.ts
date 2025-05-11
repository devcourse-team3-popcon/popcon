import { axiosInstance } from "../axiosInstance";

export const getAllUserInfo = async () => {
  const res = await axiosInstance.get("/users/get-users");

  return res.data;
};

export const getUserById = async (id: string) => {
  const res = await axiosInstance.get(`/users/${id}`);
  return res.data;
};

export const getUserInfo = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4MWUzMWM4MDc2NGJhNzY0MWRjYzNlMyIsImVtYWlsIjoicGFya0BuYXZlci5jb20ifSwiaWF0IjoxNzQ2OTU0NDc1fQ.up1OMbZ6BC46LYtUFfIVwU_fUJCWGYve9_UbeZ6odnc";
  const res = await axiosInstance.get("/auth-user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
