import bell from "../../assets/images/icon-bell.svg";
import chat from "../../assets/images/icon-chat.svg";
import user from "../../assets/images/icon-user.svg";
import NotificationList from "../../features/notification/components/NotificationList"; // NotificationList 임포트
import {useNotificationModal} from "../../features/notification/hooks/useNotificationModal";

export default function UserSection() {
  // 커스텀 훅에서 반환된 값 사용
  const {isShowNotifications, showNotifications, closeNotifications} = useNotificationModal();

  return (
    <div className='relative flex h-[88px] items-center gap-6'>
      <img src={chat} alt='채팅' className='w-6 h-6 cursor-pointer' />
      <img
        src={bell}
        alt='알림함'
        className='w-6 h-6 cursor-pointer '
        onClick={() => (isShowNotifications ? closeNotifications() : showNotifications())}
      />
      {isShowNotifications && <NotificationList closeNotifications={closeNotifications} />}

      <img src={user} alt='유저액션' className='w-[28px] h-[28px] cursor-pointer' />
    </div>
  );
}
