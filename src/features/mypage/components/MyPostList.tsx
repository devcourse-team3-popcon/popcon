import { Calendar, Heart, MessageSquare, Newspaper, Type } from "lucide-react";
import BackButton from "../../../components/common/BackButton";

export default function MyPostList() {
  return (
    <div className="min-h-screen bg-[#1B1C1E] text-white flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-[1049px] px-4 md:px-[100px] flex mb-4">
        <BackButton />
      </div>

      <div className="w-full px-4 md:px-[120px] max-w-[1049px] mt-4">
        <h2 className="text-[24px] font-semibold text-white mb-4">내 게시물</h2>

        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-full bg-[color:var(--primary-200)] text-black text-sm font-medium">
            # 습드밋
          </button>
          <button className="px-4 py-2 rounded-full bg-[color:var(--primary-200)] text-black text-sm font-medium">
            # 콘서트 게시판
          </button>
          <button className="px-4 py-2 rounded-full bg-[color:var(--primary-200)] text-black text-sm font-medium">
            # 자유게시판
          </button>
        </div>
      </div>

      <div className="mt-[20px] w-full max-w-[1049px] pt-[40px] px-4 md:px-[120px] flex flex-col">
        <table className="w-full table-fixed">
          <thead className="border-b text-[color:var(--primary-300-50)]">
            <tr>
              <th className="p-4 w-[50%] text-left">
                <div className="flex items-center">
                  <Type className="w-[18px] h-[18px]" />
                </div>
              </th>
              <th className="w-[15%]">
                <div className="flex items-center justify-center">
                  <Newspaper className="w-[18px] h-[18px]" />
                </div>
              </th>
              <th className="w-[10%]">
                <div className="flex items-center justify-center">
                  <MessageSquare className="w-[18px] h-[18px]" />
                </div>
              </th>
              <th className="w-[10%]">
                <div className="flex items-center justify-center">
                  <Heart className="w-[18px] h-[18px]" />
                </div>
              </th>
              <th className="w-[15%]">
                <div className="flex items-center justify-center">
                  <Calendar className="w-[18px] h-[18px]" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-[14px] font-extralight text-[color:var(--white-80)]">
            <tr className="cursor-pointer hover:text-[color:var(--primary-300)] text-[#fbfbfb95]">
              <td className="text-left p-4 font-normal text-[16px]">
                게시글 제목 예시입니다
              </td>
              <td className="text-center p-4">사용자</td>
              <td className="text-center p-4">3</td>
              <td className="text-center p-4">12</td>
              <td className="text-center p-4">2024년 5월 14일</td>
            </tr>
            <tr className="cursor-pointer hover:text-[color:var(--primary-300)] text-[#fbfbfb95]">
              <td className="text-left p-4 font-normal text-[16px]">
                두 번째 게시글 제목
              </td>
              <td className="text-center p-4">유저닉네임</td>
              <td className="text-center p-4">0</td>
              <td className="text-center p-4">7</td>
              <td className="text-center p-4">2024년 4월 30일</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
