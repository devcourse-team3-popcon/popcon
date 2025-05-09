import { axiosInstance } from "../axiosInstance";

export const getAllUserInfo = async () => {
  const res = await axiosInstance.get("/users/get-users");

  return res.data;
};
