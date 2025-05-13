import BackButton from "../components/common/BackButton";
import Conversations from "../features/chat/components/Conversations";
import Messages from "../features/chat/components/Messages";
// import { UserInfo } from "../features/chat/types/UserInfo";

export default function Chat() {
  return (
    <>
      <div className="flex flex-col gap-[24px] w-[90%] h-[85vh] items-start">
        <BackButton />

        <div className="flex gap-[32px] w-full h-[90%] justify-center pb-[10px]">
          <Conversations />
          <Messages />
        </div>
      </div>
    </>
  );
}
