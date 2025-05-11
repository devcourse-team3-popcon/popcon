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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4MWYxODVkYWM4OWRjMDhkMzUyYzc3YyIsImVtYWlsIjoicG9wY29uQGdtYWlsLmNvbSJ9LCJpYXQiOjE3NDY4NjkwMDF9._Jeznx782Dl0mMsncWL31ddHOu-5CauPIz7xoYBJLKI";
  const res = await axiosInstance.get("/auth-user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
