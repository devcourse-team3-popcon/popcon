import { axiosInstance } from "../axiosInstance";

export const getTrackToPlaylist = async () => {
  try {
    const res = await axiosInstance.get(
      "/posts/author/680dcb202609711208292464",
      {
        params: {
          offset: 0,
          limit: 100,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log("플레이리스트 블루오기 실패", error);
    throw error;
  }
};
