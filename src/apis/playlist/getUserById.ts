import { axiosInstance } from "../axiosInstance";

export const getUserById = async (id: string) => {
  try {
    const res = await axiosInstance.get(`/users/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
