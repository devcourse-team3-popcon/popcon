import { useState } from "react";
import SearchBar from "../../../components/common/SearchBar";
import useGetConversation from "../../../hooks/useGetConversation";
import ChatUser from "./ChatUser";
import { UserInfo } from "../../../types/UserInfo";

export default function Conversations({
  onSelect,
  selectedId,
}: {
  onSelect?: (user: UserInfo) => void;
  selectedId?: string;
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
            conversations.map((conv) => (
              <ChatUser
                key={conv._id[1]}
                me={conv._id[0]}
                sender={conv.sender.fullName}
                receiver={conv.receiver.fullName}
                senderId={conv.sender._id}
                receiverId={conv.receiver._id}
                s_isOnline={conv.sender.isOnline}
                r_isOnline={conv.receiver.isOnline}
                s_image={conv.sender.image}
                r_image={conv.receiver.image}
                message={conv.message}
                time={formatTime(new Date(conv.createdAt))}
                onClick={onSelect}
                isSelected={conv._id[1] === selectedId}
              />
            ))}
        </div>
      </div>
    </>
  );
}
