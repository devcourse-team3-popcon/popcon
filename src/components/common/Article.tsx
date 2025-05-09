import { Ellipsis, Heart } from "lucide-react";

export default function Article() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-amber-200 w-9 h-9 rounded-full mr-4"></div>
            <div className="flex flex-col">
              <span className="text-[18px]">팝코니</span>
              <span className="text-[13px] text-[color:var(--white-80)]">
                2025년 05월 05일 23:41
              </span>
            </div>
          </div>

          <Ellipsis />
        </div>

        <div>
          <span className="text-[18px]">코딩할 때 듣기 좋은 플레이리스트</span>
          <p className="mt-7 text-[color:var(--white-80)]">
            과제할 때 집중해서 듣기 좋은 팝송이나 플레이리스트 있으면
            추천해주세요!!
          </p>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-[13px]">
            <Heart className="w-4 h-4" />
            629
          </div>

          <p className="text-[12px]">
            <span className="font-bold">52</span>개의 댓글
          </p>
        </div>
      </div>
    </>
  );
}
