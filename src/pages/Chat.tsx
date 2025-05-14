import { useParams } from "react-router";
import BackButton from "../components/common/BackButton";
import Conversations from "../features/chat/components/Conversations";
import Messages from "../features/chat/components/Messages";
// import { UserInfo } from "../features/chat/types/UserInfo";

export default function Chat() {
  const { userId } = useParams();

  return (
    <>
      <div className="md:flex flex-row gap-8 w-[90%] h-[85vh] justify-center items-end hidden">
        {/* <div className="">
          <BackButton />
        </div>

        <div className="flex gap-8 w-full h-[90%] justify-center pb-4">
          <Conversations />
          <Messages />
        </div> */}

        <div className="flex flex-col w-[23%] h-full items-start gap-4">
          <div className="h-[5%]">
            <BackButton />
          </div>
          <div className="h-[93%] w-full">
            <Conversations />
          </div>
        </div>

        <Messages />
      </div>

      <div className="md:hidden w-full flex flex-col gap-[20px] h-150 px-6">
        {userId ? <Messages /> : <Conversations />}
      </div>
    </>
  );
}
