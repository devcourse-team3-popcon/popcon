import { useEffect, useState } from "react";
import SearchBar from "../../../components/common/SearchBar";
import ChatUser from "./ChatUser";
// import { UserInfo } from "../types/UserInfo";
import useGetConversation from "../hooks/useGetConversation";
import UserList from "./UserList";
import { RotateCcw } from "lucide-react";
import { useRefreshStore } from "../stores/refreshStore";

export default function Conversations({
  onSelect,
  selectedId,
}: {
  onSelect?: (userId: string) => void;
  selectedId?: string;
}) {
  const [searchInput, setSearchInput] = useState("");
  const { conversations, refresh } = useGetConversation();
  const setRefreshConv = useRefreshStore(
    (state) => state.setRefreshConversations
  );

  const refreshConv = useRefreshStore((state) => state.refreshConversations);
  const refreshMsg = useRefreshStore((state) => state.refreshMessages);

  const selectSearchHandler = (userId: string) => {
    setSearchInput("");
    onSelect?.(userId);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  useEffect(() => {
    setRefreshConv(refresh);
  }, [refresh, setRefreshConv]);

  const refreshHandler = () => {
    refreshConv?.();
    refreshMsg?.();
  };

  return (
    <>
      <div className="w-[25%] h-full pt-[53px] pb-[32px] px-[20px] rounded-[30px] border flex flex-col">
        <div className="font-bold text-[24px] mb-[32px] px-2 cursor-default flex justify-between items-center">
          Message
          <RotateCcw
            size={18}
            className="cursor-pointer"
            onClick={refreshHandler}
          />
        </div>

        <SearchBar
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full mb-[16px]"
        />

        <div className="flex flex-col gap-[8px] w-full overflow-y-auto flex-1 scrollbar-hide">
          {/* {loading && <p>loading...</p>} */}

          {searchInput.trim().length > 0 ? (
            <UserList keyword={searchInput} onClick={selectSearchHandler} />
          ) : (
            conversations &&
            conversations.map((conv) => {
              const parsedSender = JSON.parse(conv.sender.fullName);
              const parsedReceiver = JSON.parse(conv.receiver.fullName);

              return (
                <ChatUser
                  key={conv._id[1]}
                  me={conv._id[0]}
                  sender={parsedSender.name}
                  receiver={parsedReceiver.name}
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
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
