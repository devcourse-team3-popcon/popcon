import {useEffect, useState} from "react";
import {useNotification} from "../useNotification";
import NotificationItem from "./NotificationItem";
import {updateNotifications} from "../updateNotifications";
import {Bell} from "lucide-react"; // Trash2 아이콘 임포트

type NotificationListProps = {
  closeNotifications: () => void;
};

export default function NotificationList({closeNotifications}: NotificationListProps) {
  const {notifications, loading} = useNotification();
  const [updatedNotifications, setUpdatedNotifications] = useState(notifications);

  useEffect(() => {
    // notifications가 변경될 때마다 updatedNotifications만 갱신
    setUpdatedNotifications(notifications);
  }, [notifications]); // notifications가 변경될 때마다 updatedNotifications만 갱신

  const updateNoti = async (notificationId: string) => {
    try {
      await updateNotifications();

      setUpdatedNotifications((prevNoti) =>
        prevNoti.map(
          (noti) => (noti._id === notificationId ? {...noti, seen: true} : noti) // 해당 알림만 seen 상태 변경
        )
      );
    } catch (error) {
      console.error("알림 읽음 처리 실패:", error);
    }
  };

  const handleDeleteNoti = (notificationId: string) => {
    updateNoti(notificationId);
  };

  return (
    <div
      className='absolute flex justify-center items-center top-[100%] right-[5px] mt-[-5px] '
      onClick={closeNotifications}
    >
      <div
        className='p-6 rounded-[20px] w-[360px] h-[350px] border border-[var(--white)] '
        onClick={(e) => e.stopPropagation()} // 알림창 내부 클릭 시 닫히지 않도록
      >
        <div className='flex justify-between items-center mb-4'>
          <h2 className='font-semibold text-[18px]  h-[21px] pl-2'>Notification</h2>
          {/* 알림 목록 상단에 Trash2 아이콘 배치 */}
          <p
            className='text-[var(--white-80)] cursor-pointer text-[12px] '
            onClick={() => handleDeleteNoti("")}
          >
            전체 삭제
          </p>
        </div>

        {notifications.length === 0 ? (
          <div className='w-full h-full flex flex-col justify-center items-center mt-[-25px]'>
            <Bell />
            <p className=' pt-[10px] text-center'>No Notification</p>
          </div>
        ) : (
          <ul className='space-y-2'>
            {updatedNotifications.map((noti) => (
              <NotificationItem key={noti._id} noti={noti} updateNotifications={updateNoti} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
