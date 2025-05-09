import { useState } from "react";
import SearchBar from "../../../components/common/SearchBar";
import useGetConversation from "../../../hooks/useGetConversation";
import ChatUser from "./ChatUser";
import { UserInfo } from "../../../types/UserInfo";

export default function Conversations({
  onSelect,
}: {
  onSelect?: (user: UserInfo) => void;
}) {
  const [searchInput, setSearchInput] = useState("");
  const { conversations, loading } = useGetConversation();

  console.log("conversations: ", conversations);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <>
      <div className="w-[360px] h-[744px] pt-[53px] pb-[32px] px-[20px] rounded-[30px] border">
        <div className="font-bold text-[24px] mb-[32px] cursor-default">
          Message
        </div>

        <SearchBar
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-[320px] mb-[16px]"
        />

        <div className="flex flex-col gap-[8px]">
          {loading && <p>loading...</p>}

          {conversations &&
            conversations.map((conversation) => (
              <ChatUser
                key={conversation._id[1]}
                me={conversation._id[0]}
                sender={conversation.sender.fullName}
                receiver={conversation.receiver.fullName}
                senderId={conversation.sender._id}
                receiverId={conversation.receiver._id}
                s_isOnline={conversation.sender.isOnline}
                r_isOnline={conversation.receiver.isOnline}
                s_image={conversation.sender.image}
                r_image={conversation.receiver.image}
                message={conversation.message}
                time={formatTime(new Date(conversation.createdAt))}
                onClick={onSelect}
              />
            ))}
        </div>
      </div>
    </>
  );
}
