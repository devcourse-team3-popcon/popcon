import React, { useMemo, useState } from "react";
import LeftMessageBox from "./LeftMessageBox";
import RightMessageBox from "./RightMessageBox";
import TextBox from "./TextBox";
import useGetMessages from "../../../hooks/useGetMessages";
import DateSeparator from "./DateSeparator";
import groupMessages, { GroupedMessage } from "../../../utils/groupMessages";
import { UserInfo } from "../../../types/UserInfo";

export default function MessageList({ userInfo }: { userInfo: UserInfo }) {
  const [chatInput, setChatInput] = useState("");

  const { messages, loading } = useGetMessages(userInfo.id);
  const groupedMessages: GroupedMessage[] = useMemo(() => {
    return groupMessages(messages);
  }, [messages]);

  console.log("messages: ", messages);

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="w-[776px] h-[88px] p-[16px] mb-[24px] border-b border-[var(--grey-500)] flex gap-[16px] items-center">
          <div className="size-[56px] rounded-[50px] bg-[var(--grey-200)]"></div>
          <div className="text-[24px] font-medium">{userInfo.name}</div>
          {userInfo.isOnline && (
            <div className="rounded-[50px] size-[8px] bg-[var(--primary-300)]"></div>
          )}
        </div>

        <div className="flex flex-col gap-[8px] flex-1 overflow-y-auto scrollbar-hide">
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
                {message.s_id === userInfo.id ? (
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
        </div>

        {/* <form className="flex items-center border w-[776px] h-[64px] px-[32px] rounded-[10px] justify-between"> */}
        <TextBox
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          className="w-[776px]"
        />
        {/* <input
            type="text"
            placeholder="메세지를 작성해주세요"
            className="text-[var(--grey-300)] text-[18px] font-medium w-full"
          />
          <button type="submit" className="cursor-pointer ml-[14px]">
            <img src={send} alt="전송 아이콘" className="size-[24px]" />
          </button>
        </form> */}
      </div>
    </>
  );
}
