import BackButton from "../components/common/BackButton";
import Conversations from "../features/chat/components/Conversations";
import Messages from "../features/chat/components/Messages";

export default function Chat() {
  return (
    <>
      <div className="flex flex-col gap-[24px] items-start">
        <BackButton />

        <div className="flex gap-[32px]">
          <Conversations />
          <Messages />
        </div>
      </div>
    </>
  );
}
