import CommunityTable from "./CommunityTable";
import CommunityPage from "./CommunityPage";
import { useChannelId } from "../../../hooks/useChannelId";

export default function OpenCommunity() {
  const { channelId, loading } = useChannelId("OpenCommunity");
  if (loading) return <p>로딩 중...</p>;
  if (!channelId) return <p>채널을 찾을 수 없습니다.</p>;

  return (
    <>
      <CommunityPage
        title="Jay 님의 PlayList 를 채워줄 곳 ✨"
        table={<CommunityTable channelId={channelId} />}
      />
    </>
  );
}
