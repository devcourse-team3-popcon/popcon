import { getCurrentUserId } from "../../../utils/auth";
import { ConversationProps } from "../types/ConversationProps";

export default function ChatUser({
  sender,
  receiver,
  senderId,
  receiverId,
  s_isOnline,
  r_isOnline,
  s_image,
  r_image,
  message,
  time,
  onClick,
  selectedId,
}: // isSelected,
ConversationProps) {
  const currentUserId = getCurrentUserId();

  const userName = currentUserId === senderId ? receiver : sender;
  const userId = currentUserId === senderId ? receiverId : senderId;
  const userImage = currentUserId === senderId ? r_image : s_image;
  const userIsOnline = currentUserId === senderId ? r_isOnline : s_isOnline;

  const isSelected = userId === selectedId;

  // const user = {
  //   id: userId,
  //   name: userName,
  //   image: userImage,
  //   isOnline: userIsOnline,
  // };

  return (
    <>
      <div
        onClick={() => onClick?.(userId)}
        className={`w-full h-[64px] px-[9px] py-[8px] flex gap-[16px] rounded-[10px] hover:bg-[var(--grey-500)] cursor-pointer items-center ${
          isSelected && "bg-[var(--grey-500)]"
        }`}
      >
        <div>
          <div
            className={`relative size-[48px] rounded-[50px] bg-[var(--grey-200)] bg-center bg-no-repeat bg-cover`}
            style={{ backgroundImage: `url(${userImage})` }}
          >
            {userIsOnline && (
              <div className="absolute left-[36px] top-[36px] rounded-full size-[10px] bg-[var(--primary-300)]"></div>
            )}
          </div>
        </div>

        <div className="flex flex-col flex-1 p-0.5 w-[50%]">
          <div className="text-[16px] font-medium">{userName}</div>

          <div className="flex items-center justify-between gap-[8px]">
            <div className="text-[12px] font-regular text-[var(--white-80)] truncate flex-1">
              {message}
            </div>
            <div className="text-[12px] font-light text-[var(--white-80)]">
              {time}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
