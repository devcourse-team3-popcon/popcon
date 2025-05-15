import { useLocation, useParams } from "react-router";
import BackButton from "../components/common/BackButton";
import Conversations from "../features/chat/components/Conversations";
import Messages from "../features/chat/components/Messages";
import { useMsgVersionStore } from "../features/chat/stores/msgVersionStore";
import { useEffect, useState } from "react";
import { getCurrentUserId } from "../utils/auth";
import LoadingSpinner from "../components/common/LoadingSpinner";
// import { UserInfo } from "../features/chat/types/UserInfo";

export default function Chat() {
  const { userId } = useParams();
  const location = useLocation();
  const version = useMsgVersionStore((state) => state.c_version);
  const reset = useMsgVersionStore((state) => state.reset);
  const [loginId, setLoginId] = useState();

  // const [from, setFrom] = useState(() => location.state?.from || "/");
  const [from] = useState(() => location.state?.from || "/");

  // useEffect(() => {
  //   if (location.state?.from && !from) {
  //     setFrom(location.state.from);
  //   }
  // }, [location.state, from]);

  useEffect(() => {
    reset();
  }, [userId, reset]);

  useEffect(() => {
    const fetchUserId = async () => {
      const id = await getCurrentUserId();
      setLoginId(id);
    };

    fetchUserId();
  }, []);

  console.log(from);

  return (
    <>
      {loginId === undefined ? (
        <div className="w-[90%] h-[85vh] flex justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="md:flex flex-row gap-8 w-[90%] h-[85vh] justify-center items-end hidden">
            <div className="flex flex-col w-[23%] h-full items-start gap-4">
              <div className="h-[5%]">
                <BackButton from={from} />
              </div>
              <div className="h-[93%] w-full">
                <Conversations key={version} loginId={loginId} from={from} />
              </div>
            </div>

            <Messages />
          </div>

          <div className="md:hidden w-full flex flex-col gap-[20px] h-150 px-6">
            {userId ? (
              <Messages />
            ) : (
              <Conversations key={version} loginId={loginId} from={from} />
            )}
          </div>
        </>
      )}
    </>
  );
}
