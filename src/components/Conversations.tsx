import search from "../assets/images/icon-search.svg";
import ChatUser from "./ChatUser";

export default function Conversations() {
  return (
    <>
      <div className="w-[360px] h-[744px] pt-[53px] pb-[32px] px-[16px] rounded-[30px] border">
        <div className="font-bold text-[24px] mb-[32px] cursor-default">
          Message
        </div>

        <form className="flex items-center border w-[320px] h-[51px] p-[16px] rounded-[10px] mb-[16px]">
          <button className="cursor-pointer">
            <img
              src={search}
              alt="검색 아이콘"
              className="size-[18px] opacity-50 mr-[14px]"
            />
          </button>

          <input
            type="text"
            placeholder="검색어 입력"
            className="text-[var(--grey-300)] text-[16px] font-medium"
          />
        </form>

        <div className="flex flex-col gap-[8px]">
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
        </div>
      </div>
    </>
  );
}
