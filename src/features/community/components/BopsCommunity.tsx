import { useChannelId } from "../../../hooks/useChannelId";
import BopsCommunityPage from "./BopsCommunityPage";

export default function BopsCommunity() {
  const { channelId, loading } = useChannelId("BopsCommunity");
  if (loading) return <p>로딩 중...</p>;
  if (!channelId) return <p>채널을 찾을 수 없습니다.</p>;

  return (
    <>
      <BopsCommunityPage channelId={channelId} />
    </>
  );
}
