// import { UserInfo } from "../types/UserInfo";
import { useParams } from "react-router";
import MessageList from "./MessageList";
import NoMessages from "./NoMessages";

export default function Messages() {
  const { userId } = useParams();

  return (
    <>
      <div className="w-[55%] h-[100%] p-[32px] rounded-[30px] border border-[var(--primary-300)] flex justify-center items-center">
        {userId ? <MessageList userId={userId} /> : <NoMessages />}
      </div>
    </>
  );
}
