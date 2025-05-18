import axios from "axios";
import { getLoginStorage } from "../login/getLoginStorage";

export const getUserDetail = async (userId: string) => {
  try {
    const token = getLoginStorage();

    const res = await axios.get(
      window.location.hostname === "localhost"
        ? `http://13.125.208.179:5007/users/${userId}`
        : "/api",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error("유저 상세 정보 가져오기 실패:", error);
    return null;
  }
};
