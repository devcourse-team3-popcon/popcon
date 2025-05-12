import { ChevronLeft } from "lucide-react";

export default function NotificationPanel({
  notifications,
  isLoading,
  onClose,
  onMarkAllAsSeen,
  unseenCount,
}: NotificationPanelProps) {
  const getAuthorName = (notification: Notification) => {
    try {
      if (notification.author && notification.author.fullName) {
        const parsedName = JSON.parse(notification.author.fullName);
        console.log(notification);
        return parsedName.name || "알 수 없는 사용자";
      }
      return "알 수 없는 사용자";
    } catch (error) {
      console.error("작성자 이름 파싱 오류:", error);
      return "알 수 없는 사용자";
    }
  };

  const getNotificationMessage = (notification: Notification) => {
    const authorName = getAuthorName(notification);

    if (notification.like) {
      return `${authorName}님이 내 게시물을 좋아합니다.`;
    }

    if (notification.comment) {
      return `${authorName}님이 내 게시물에 댓글을 남겼습니다.`;
    }

    if (notification.message) {
      return `${authorName}님이 메시지를 보냈습니다.`;
    }

    return "새로운 알림이 있습니다.";
  };

  return (
    <div className="flex flex-col h-full">
      <ChevronLeft
        onClick={onClose}
        strokeWidth={1.5}
        className="fixed top-12 left-4 text-[color:var(--white)] cursor-pointer mr-2"
      />
      <div className="flex justify-between items-center mt-[32px] mb-6">
        <div className="flex items-center">
          <h2 className="text-[color:var(--white)] text-[18px] font-medium">
            Notifications
          </h2>
        </div>
        {unseenCount > 0 && (
          <button
            onClick={onMarkAllAsSeen}
            className="text-[color:var(--white-80)] text-[14px] font-light hover:text-[color:var(--primary-300)] cursor-pointer"
          >
            전체 삭제
          </button>
        )}
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center">
          <p className="text-[color:var(--white-60)]">알림 로딩 중...</p>
        </div>
      ) : notifications.length > 0 ? (
        <div className="flex flex-col overflow-y-auto scrollbar-hide ">
          {notifications.map((notification) => (
            <div
              key={notification._id}
              className="p-2 mb-2 rounded-[8px] bg-[color:var(--grey-500)] "
            >
              <div className="flex gap-4 justify-center items-center">
                <img
                  src={notification.author.image}
                  alt=""
                  className="w-6 h-6 rounded-full"
                />
                <div className="flex-1">
                  <p className="text-[color:var(--white)] text-[10px]">
                    {getNotificationMessage(notification)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-[color:var(--white-60)]">알림이 없습니다</p>
        </div>
      )}
    </div>
  );
}
