import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { useChannelId } from "../../../hooks/useChannelId";
import BopCard from "../../../components/common/BopCard";

export default function BopsCommunity() {
  const { channelId, loading } = useChannelId("BopsCommunity");
  const navigate = useNavigate();

  if (loading) return <p>로딩 중...</p>;
  if (!channelId) return <p>채널을 찾을 수 없습니다.</p>;

  return (
    <>
      <div className="flex w-full justify-between items-center">
        <p className="text-[30px] font-semibold">
          여기는 숨겨진 명곡들의 성지 🔮
        </p>
        <Plus className="cursor-pointer" onClick={() => navigate("add")} />
      </div>

      <div className="flex gap-8 flex-wrap w-full ">
        <BopCard />
      </div>
    </>
  );
}
