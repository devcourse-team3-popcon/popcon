import { axiosInstance } from "../axiosInstance";

export const getUserPlaylist = async (searchQuery: string) => {
  try {
    const res = await axiosInstance.get(`/search/users/${searchQuery}`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
