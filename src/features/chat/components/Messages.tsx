// import { UserInfo } from "../types/UserInfo";
import MessageList from "./MessageList";
import NoMessages from "./NoMessages";

export default function Messages({ userInfo }: { userInfo?: string }) {
  return (
    <>
      <div className="w-[55%] h-full p-[32px] rounded-[30px] border border-[var(--primary-300)] flex justify-center items-center">
        {userInfo ? <MessageList userId={userInfo} /> : <NoMessages />}
      </div>
    </>
  );
}
