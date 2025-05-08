import Conversations from "../components/Conversations";
import Messages from "../components/Messages";

export default function Chat() {
  return (
    <>
      <div className="flex gap-[32px]">
        <Conversations />
        <Messages />
      </div>
    </>
  );
}
