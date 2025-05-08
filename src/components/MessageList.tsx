import send from "../assets/images/icon-send.svg";
import LeftMessageBox from "./LeftMessageBox";
import RightMessageBox from "./RightMessageBox";

export default function MessageList() {
  const islogined: boolean = true;

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="w-[776px] h-[88px] p-[16px] border-b border-[var(--grey-500)] flex gap-[16px] items-center">
          <div className="size-[56px] rounded-[50px] bg-[var(--grey-200)]"></div>
          <div className="text-[24px] font-medium">Receiver Name</div>
          {islogined && (
            <div className="rounded-[50px] size-[8px] bg-[var(--primary-300)]"></div>
          )}
        </div>

        {/* 반복문 사용 & sender/reciver, createdAt 전달 */}
        <div className="flex flex-col gap-[8px] mt-[24px] flex-1 overflow-y-auto">
          <LeftMessageBox
            text="안녕하세요. 데브코스 3팀 입니다."
            time="13:02"
          />
          <LeftMessageBox
            text="안녕하세요. 데브코스 3팀 입니다."
            time="13:03"
          />
          <LeftMessageBox
            text="안녕하세요. 데브코스 3팀 입니다."
            time="13:04"
          />
          <RightMessageBox
            text="안녕하세요. 데브코스 3팀 입니다."
            time="13:05"
          />
          <RightMessageBox
            text="안녕하세요. 데브코스 3팀 입니다."
            time="13:06"
          />
          <RightMessageBox
            text="안녕하세요. 데브코스 3팀 입니다."
            time="13:07"
          />
        </div>

        <form className="flex items-center border w-[776px] h-[64px] px-[32px] rounded-[10px] justify-between">
          <input
            type="text"
            placeholder="메세지를 작성해주세요"
            className="text-[var(--grey-300)] text-[18px] font-medium w-full"
          />
          <button type="submit" className="cursor-pointer ml-[14px]">
            <img src={send} alt="전송 아이콘" className="size-[24px]" />
          </button>
        </form>
      </div>
    </>
  );
}
