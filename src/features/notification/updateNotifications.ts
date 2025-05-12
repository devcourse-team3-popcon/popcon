import {axiosInstance} from "../../apis/axiosInstance";

export const updateNotifications = async (): Promise<void> => {
  try {
    await axiosInstance.put(
      "/notifications/seen",
      {},
      {headers: {"Content-Type": "application/json"}}
    );
  } catch (error) {
    console.error("알림 읽음 처리 실패:", error);
    throw error;
  }
};
