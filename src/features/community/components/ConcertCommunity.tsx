import CommunityTable from "./CommunityTable";
import CommunityPage from "./CommunityPage";
import { useChannelId } from "../../../hooks/useChannelId";

export default function ConcertCommunity() {
  const { channelId, loading } = useChannelId("ConcertCommunity");

  if (loading) return <p>로딩 중...</p>;
  if (!channelId) return <p>채널을 찾을 수 없습니다.</p>;
  return (
    <>
      <CommunityPage
        title="궁금했던 내한 공연 후기와 꿀팁 대방출 🍯"
        channelId={channelId}
        renderTable={(filteredPosts) => (
          <CommunityTable posts={filteredPosts} />
        )}
      />
    </>
  );
}
