import { axiosInstance } from "../axiosInstance";

export const deleteTrackFromPlaylist = async (id: string) => {
  console.log(id);
  try {
    const res = await axiosInstance.delete("posts/delete", {
      data: { id: id },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
