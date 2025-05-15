// import { UserInfo } from "../types/UserInfo";
import { useParams } from "react-router";
import MessageList from "./MessageList";
import NoMessages from "./NoMessages";

export default function Messages() {
  const { userId } = useParams();

  return (
    <>
      <div className="md:w-[55%] h-[93%] md:p-8 rounded-4xl md:border border-[var(--primary-300)] flex justify-center items-center">
        {userId ? <MessageList userId={userId} /> : <NoMessages />}
      </div>
    </>
  );
}
