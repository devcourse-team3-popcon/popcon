import axios from "axios";
import { getLoginStorage } from "../login/getLoginStorage";

export const getPostsByUser = async (authorId: string) => {
  const token = getLoginStorage();

  const res = await axios.get(
    window.location.hostname === "localhost"
      ? `http://13.125.208.179:5007/posts/author/${authorId}`
      : "/api",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
