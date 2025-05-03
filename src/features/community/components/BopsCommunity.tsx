import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { useChannelId } from "../../../hooks/useChannelId";
import CommunityTable from "../../../components/common/CommunityTable";

export default function BopsCommunity() {
  const { channelId, loading } = useChannelId("BopsCommunity");
  const navigate = useNavigate();

  if (loading) return <p>로딩 중...</p>;
  if (!channelId) return <p>채널을 찾을 수 없습니다.</p>;

  return (
    <>
      <p className="text-[30px] font-semibold">
        여기는 숨겨진 명곡들의 성지 🔮
      </p>
      <Plus className="cursor-pointer" onClick={() => navigate("add")} />
      <CommunityTable channelId={channelId} />
    </>
  );
}
