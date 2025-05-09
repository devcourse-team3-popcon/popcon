import { axiosInstance } from "../axiosInstance";

export const getTrackToPlaylist = async () => {
  try {
    const res = await axiosInstance.get(
      "/posts/author/681d600beef619123c531b36",
      {
        params: {
          offset: 0,
          limit: 100,
        },
      }
    );
    return res.data.filter(
      (data: { channel: { _id: string } }) =>
        data.channel._id === "6815e9d7f940b6515bf4e101"
    );
  } catch (error) {
    console.log("플레이리스트 블루오기 실패", error);
    throw error;
  }
};
