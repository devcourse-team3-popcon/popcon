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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4MWQ2MDBiZWVmNjE5MTIzYzUzMWIzNiIsImVtYWlsIjoidGVzdGFhYUBuYXZlci5jb20ifSwiaWF0IjoxNzQ2NzU2OTIzfQ.ME6TsMo3BzD2l6pkErSUCF0D7XEu82SgQ_hDv0JXIOs";
  const res = await axiosInstance.get("/auth-user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
