import { Ellipsis } from "lucide-react";
export default function Comment() {
  return (
    <>
      <div className="flex flex-col px-2 pb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-amber-400 w-7 h-7 rounded-full mr-4"></div>
            <div className="flex flex-col">
              <span className="text-[14px]">쿠키키키</span>
              <span className="text-[12px] text-[color:var(--white-80)]">
                2025년 05월 05일 23:41
              </span>
            </div>
          </div>
          <Ellipsis />
        </div>

        <p className="ml-1 mt-3 text-[13px]">댓글입니다~~</p>
      </div>
    </>
  );
}
