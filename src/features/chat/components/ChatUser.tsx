import { useNavigate, useParams } from "react-router";
import { getCurrentUserId } from "../../../utils/auth";
import { ConversationProps } from "../types/ConversationProps";
import { useEffect, useState } from "react";
import defaultProfile from "../../../assets/images/default-profile-logo.svg";
import onlineIcon from "../../../assets/images/icon_online.svg";

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
}: ConversationProps) {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [loginId, setLoginId] = useState();

  useEffect(() => {
    const fetchUserId = async () => {
      const id = await getCurrentUserId();
      setLoginId(id);
    };

    fetchUserId();
  }, []);

  const userName = loginId === senderId ? receiver : sender;
  const otherUserId = loginId === senderId ? receiverId : senderId;
  const userImage = loginId === senderId ? r_image : s_image;
  const userIsOnline = loginId === senderId ? r_isOnline : s_isOnline;

  const isSelected = userId === otherUserId;

  return (
    <>
      <div
        onClick={() => navigate(`/chat/${otherUserId}`)}
        className={`w-full h-auto p-2 flex gap-4 rounded-xl hover:bg-[var(--grey-500)] cursor-pointer items-center ${
          isSelected && "bg-[var(--grey-500)]"
        }`}
      >
        <div>
          <div className="relative">
            <img
              src={userImage ? userImage : defaultProfile}
              alt={`${userName} 유저 프로필`}
              className="rounded-full size-[48px]"
            />
            {userIsOnline && (
              <img
                src={onlineIcon}
                alt="온라인 표시"
                className="absolute right-0.5 bottom-0.5"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col flex-1 p-0.5 w-[50%]">
          <div className="text-base font-medium">{userName}</div>

          <div className="flex items-center justify-between gap-2">
            <div className="text-[0.75rem] font-regular text-[var(--white-80)] truncate flex-1">
              {message}
            </div>
            <div className="text-[0.75rem] font-light text-[var(--white-80)]">
              {time}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
