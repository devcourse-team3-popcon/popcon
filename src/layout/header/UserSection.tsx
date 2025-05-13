import {NavLink} from "react-router";
import bell from "../../assets/images/icon-bell.svg";
import chat from "../../assets/images/icon-chat.svg";
import chatActive from "../../assets/images/icon-chat-active.svg";
import user from "../../assets/images/icon-user.svg";
import NotificationList from "../../features/notification/components/NotificationList"; // NotificationList 임포트
import {useNotificationModal} from "../../features/notification/hooks/useNotificationModal";

export default function UserSection() {
  const {isShowNotifications, showNotifications, closeNotifications} = useNotificationModal();

  return (
    <div className='flex h-[88px] items-center gap-6'>
      <NavLink to='/chat'>
        {({isActive}) => (
          <div className='w-4.5 h-4.5 2xl:w-5 2xl:h-5'>
            <img
              src={isActive ? chatActive : chat}
              alt='채팅'
              className='w-full h-full cursor-pointer fill-current'
            />
          </div>
        )}
      </NavLink>
      <div className='w-4.5 h-4.5 2xl:w-5 2xl:h-5'>
        <img
          src={bell}
          alt='알림함'
          className='w-6 h-6 cursor-pointer '
          onClick={() => (isShowNotifications ? closeNotifications() : showNotifications())}
        />
        {isShowNotifications && <NotificationList closeNotifications={closeNotifications} />}
      </div>

      <div className='w-5 h-5 2xl:w-[22px] 2xl:h-[22px]'>
        <img src={user} alt='유저액션' className='w-full h-full cursor-pointer' />
      </div>
    </div>
  );
}
