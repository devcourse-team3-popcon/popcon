import {useEffect, useState} from "react";
import {NotificationRes} from "./hooks/NotificationRes";
import {getNotification} from "./apis/getNotification";

export function useNotification() {
  const [notifications, setNotifications] = useState<NotificationRes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getNotification();
        const unseenNotifications = data.filter((noti) => !noti.seen);
        setNotifications(unseenNotifications);
      } catch (error) {
        console.error("알림 조회 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return {notifications, loading};
}
