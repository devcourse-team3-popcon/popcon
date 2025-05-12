import { useEffect, useState } from "react";
import { UserInfo } from "../types/UserInfo";
import { axiosInstance } from "../../../apis/axiosInstance";

export default function useGetUser(userId: string) {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axiosInstance.get(`/users/${userId}`);

        const userData = {
          id: data._id,
          userName: JSON.parse(data.fullName).name,
          image: data.image,
          isOnline: data.isOnline,
        };

        console.log("유저데이터", userData);
        setUserInfo(userData);
      } catch (error) {
        console.log("Failed to get userinfo", error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [userId]);

  return { userInfo, loading };
}
