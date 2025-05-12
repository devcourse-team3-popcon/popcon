import {useState} from "react";

// 알림 모달 상태를 관리하는 커스텀 훅
export const useNotificationModal = () => {
  const [isShowNotifications, setIsShowNotifications] = useState(false);

  const showNotifications = () => {
    setIsShowNotifications(true); // 알림 모달 열기
  };

  const closeNotifications = () => {
    setIsShowNotifications(false); // 알림 모달 닫기
  };

  return {
    isShowNotifications,
    showNotifications,
    closeNotifications,
  };
};
