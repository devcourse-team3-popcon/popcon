import { axiosInstance } from "../axiosInstance";

export const deleteTrackFromPlaylist = async (id: string) => {
  console.log(id);
  try {
    const res = await axiosInstance.delete("posts/delete", {
      data: { id: id },
    });
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
