import React, { useEffect, useMemo, useRef, useState } from "react";
import LeftMessageBox from "./LeftMessageBox";
import RightMessageBox from "./RightMessageBox";
import TextBox from "./TextBox";
import DateSeparator from "./DateSeparator";
import groupMessages, { GroupedMessage } from "../../../utils/groupMessages";
// import { UserInfo } from "../types/UserInfo";
import useGetMessages from "../hooks/useGetMessages";
import { useRefreshStore } from "../stores/refreshStore";

export default function MessageList({ userId }: { userId: string }) {
  const [chatInput, setChatInput] = useState("");

  const { messages, loading, refresh } = useGetMessages(userId);
  const setRefreshMsg = useRefreshStore((state) => state.setRefreshMessages);
  const groupedMessages: GroupedMessage[] = useMemo(() => {
    return groupMessages(messages);
  }, [messages]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" });
  }, [messages]);

  useEffect(() => {
    setRefreshMsg(refresh);
  }, [refresh, setRefreshMsg]);

  console.log("유저 아이디: ", userId);

  const user = useMemo(() => {
    if (!messages.length) return null;

    return userId === messages[0].r_id
      ? {
          image: messages[0].r_img,
          name: messages[0].receiver.name,
          isOnline: messages[0].r_isOnline,
        }
      : {
          image: messages[0].s_img,
          name: messages[0].sender.name,
          isOnline: messages[0].s_isOnline,
        };
  }, [messages, userId]);

  console.log("상세 메세지 userInfo:", user);

  return (
    <>
      <div className="flex flex-col h-full w-full">
        <div className="p-[12px] border-b border-[var(--grey-500)] flex gap-[16px] items-center pb-[24px] box-border">
          <div
            className={`relative size-[56px] rounded-[50px] bg-[var(--grey-200)] bg-center bg-no-repeat bg-cover`}
            style={{ backgroundImage: `url(${user?.image})` }}
          >
            {user?.isOnline && (
              <div className="absolute left-[43px] top-[43px] rounded-full size-[10px] bg-[var(--primary-300)]"></div>
            )}
          </div>

          <div className="text-[24px] font-medium">{user?.name}</div>
        </div>

        <div className="flex flex-col py-4 gap-[8px] overflow-y-auto scrollbar-hide flex-1">
          {loading && <p>loading...</p>}

          {groupedMessages.map((message, index) => {
            const time = new Date(message.createdAt).toLocaleTimeString(
              "ko-KR",
              {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }
            );

            const borderRadiusClass = {
              single: "rounded-t",
              first: "rounded-t",
              middle: "",
              last: "rounded-b",
            }[message.groupPosition];

            const showDateSeparator =
              index === 0 ||
              message.groupDate !== groupedMessages[index - 1]?.groupDate;

            return (
              <React.Fragment key={message.id}>
                {showDateSeparator && (
                  <DateSeparator date={message.groupDate} />
                )}
                {message.s_id === userId ? (
                  <LeftMessageBox
                    text={message.message}
                    time={time}
                    className={borderRadiusClass}
                  />
                ) : (
                  <RightMessageBox
                    text={message.message}
                    time={time}
                    className={borderRadiusClass}
                  />
                )}
              </React.Fragment>
            );
          })}

          <div ref={bottomRef} />
        </div>

        <TextBox
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onClear={() => setChatInput("")}
          className=""
          userId={userId}
        />
      </div>
    </>
  );
}
