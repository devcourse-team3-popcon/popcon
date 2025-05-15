import axios from "axios";
import { getLoginStorage } from "../login/getLoginStorage";

export const getPostsByUser = async (authorId: string) => {
  const token = getLoginStorage();

  const res = await axios.get(
    `http://13.125.208.179:5007/posts/author/${authorId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
