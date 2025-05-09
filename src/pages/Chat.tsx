import { useState } from "react";
import BackButton from "../components/common/BackButton";
import Conversations from "../features/chat/components/Conversations";
import Messages from "../features/chat/components/Messages";
import { UserInfo } from "../types/UserInfo";

export default function Chat() {
  const [selectedConversation, setSelectedConversation] = useState<UserInfo>();

  const selectedIdHandler = (user: UserInfo) => {
    setSelectedConversation(user);
  };

  return (
    <>
      <div className="flex flex-col gap-[24px] items-start">
        <BackButton />

        <div className="flex gap-[32px]">
          <Conversations onSelect={(user) => selectedIdHandler(user)} />
          <Messages userInfo={selectedConversation} />
        </div>
      </div>
    </>
  );
}
