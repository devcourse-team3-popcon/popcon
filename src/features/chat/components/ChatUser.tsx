import { useNavigate, useParams } from "react-router";
import { getCurrentUserId } from "../../../utils/auth";
import { ConversationProps } from "../types/ConversationProps";
import { useEffect, useState } from "react";

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
        className={`w-full h-[64px] p-[8px] flex gap-[16px] rounded-[10px] hover:bg-[var(--grey-500)] cursor-pointer items-center ${
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
          <div className="text-base font-medium">{userName}</div>

          <div className="flex items-center justify-between gap-[8px]">
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
