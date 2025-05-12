import { useState } from "react";
import BackButton from "../components/common/BackButton";
import Conversations from "../features/chat/components/Conversations";
import Messages from "../features/chat/components/Messages";
// import { UserInfo } from "../features/chat/types/UserInfo";

export default function Chat() {
  const [selectedConversation, setSelectedConversation] = useState("");
  // const [selectedConversation, setSelectedConversation] = useState<UserInfo>();

  const selectedIdHandler = (userId: string) => {
    setSelectedConversation(userId);
  };

  return (
    <>
      <div className="flex flex-col gap-[24px] w-[90%] h-[85vh] items-start">
        <BackButton />

        <div className="flex gap-[32px] w-full h-[92%] justify-center">
          <Conversations
            onSelect={(user) => selectedIdHandler(user)}
            selectedId={selectedConversation}
          />
          <Messages userInfo={selectedConversation} />
        </div>
      </div>
    </>
  );
}
