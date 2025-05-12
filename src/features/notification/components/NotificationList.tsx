import {useNotification} from "../hooks/useNotification";
import NotificationItem from "./NotificationItem";
import {Bell} from "lucide-react";
import {readNotifications} from "../apis/readNotifications";

type NotificationListProps = {
  closeNotifications: () => void;
};

export default function NotificationList({closeNotifications}: NotificationListProps) {
  const {notifications, setNotifications, loading} = useNotification();

  const updateNoti = async (notificationId: string) => {
    try {
      await readNotifications();

      // 알림 상태를 업데이트 (읽음 처리)
      const updatedNotifications = notifications.map((noti) =>
        noti._id === notificationId ? {...noti, seen: true} : noti
      );

      setNotifications(updatedNotifications);
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
            {notifications.map((noti) => (
              <NotificationItem key={noti._id} noti={noti} updateNotifications={updateNoti} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
