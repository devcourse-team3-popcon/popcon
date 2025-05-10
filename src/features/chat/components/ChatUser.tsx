import { ConversationProps } from "../types/ConversationProps";

export default function ChatUser({
  me,
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
  isSelected,
}: ConversationProps) {
  const userName = me === senderId ? receiver : sender;
  const userId = me === senderId ? receiverId : senderId;
  const userImage = me === senderId ? r_image : s_image;
  const userIsOnline = me === senderId ? r_isOnline : s_isOnline;

  const user = {
    id: userId,
    name: userName,
    image: userImage,
    isOnline: userIsOnline,
  };

  return (
    <>
      <div
        onClick={() => onClick?.(user)}
        className={`w-full h-[64px] px-[9px] py-[8px] flex gap-[16px] rounded-[10px] hover:bg-[var(--grey-500)] cursor-pointer items-center ${
          isSelected && "bg-[var(--grey-500)]"
        }`}
      >
        {userImage ? (
          <div
            className={`size-[40px] rounded-[50px] bg-[url(${userImage})] bg-center bg-no-repeat`}
          ></div>
        ) : (
          <div className="size-[40px] rounded-[50px] bg-[var(--grey-200)]"></div>
        )}

        <div className="flex flex-col flex-1 justify-between p-0.5">
          <div className="flex gap-[16px] items-center">
            <div className="text-[16px] font-medium">{userName}</div>
            {userIsOnline && (
              <div className="rounded-[50px] size-[8px] bg-[var(--primary-300)]"></div>
            )}
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="text-[12px] font-regular text-[var(--white-80)] truncate max-w-[190px]">
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
