import {useNotification} from "../hooks/useNotification";
import NotificationItem from "./NotificationItem";
import {Bell} from "lucide-react";
import {readNotifications} from "../apis/readNotifications";
import {useEffect, useRef} from "react";

type NotificationListProps = {
  closeNotifications: () => void;
};

export default function NotificationList({closeNotifications}: NotificationListProps) {
  const {notifications, setNotifications} = useNotification();
  const notificationListRef = useRef<HTMLDivElement | null>(null);

  // 알림 상태 업데이트
  const updateNoti = async () => {
    try {
      await readNotifications();

      const updatedNotifications = notifications.map((noti) => ({...noti, seen: true}));

      setNotifications(updatedNotifications);
    } catch (error) {
      console.error("알림 읽음 처리 실패:", error);
    }
    closeNotifications();
  };

  // 외부 클릭 시 알림창 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notificationListRef.current && !notificationListRef.current.contains(e.target as Node)) {
        closeNotifications();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [closeNotifications]);

  return (
    <div className='absolute z-[9999] flex justify-center items-center top-[100%] right-[5px] mt-[-5px]'>
      <div
        ref={notificationListRef}
        className='p-4 rounded-[20px] w-[320px] h-[320px] bg-[var(--bg-color)] border border-[var(--white)]'
        onClick={(e) => e.stopPropagation()} // 알림창 내부 클릭 시 닫히지 않도록
      >
        <div className='flex justify-between items-center my-3'>
          <h2 className='font-semibold text-[18px] h-[21px] pl-1'>Notification</h2>
          <p
            className='text-[var(--white-80)] cursor-pointer text-[10px] pr-2'
            onClick={updateNoti}
          >
            전체 삭제
          </p>
        </div>

        {notifications.length === 0 ? (
          <div className='w-full h-full flex flex-col justify-center items-center mt-[-25px]'>
            <Bell />
            <p className='pt-[10px] text-center'>No Notification</p>
          </div>
        ) : (
          <ul className='space-y-2'>
            {notifications.map((noti) => (
              <NotificationItem
                key={noti._id}
                noti={noti}
                updateNotifications={updateNoti}
                closeNotifications={closeNotifications}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
