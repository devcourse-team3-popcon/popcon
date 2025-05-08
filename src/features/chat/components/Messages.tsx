import MessageList from "./MessageList";
import NoMessages from "./NoMessages";

export default function Messages() {
  const hasMessage: boolean = true;

  return (
    <>
      <div className="w-[840px] h-[744px] p-[32px] rounded-[30px] border border-[var(--primary-300)] flex justify-center items-center">
        {hasMessage ? <MessageList /> : <NoMessages />}
      </div>
    </>
  );
}
