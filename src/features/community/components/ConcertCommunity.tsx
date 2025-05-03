import CommunityTable from "../../../components/common/CommunityTable";
import CommunityPage from "../../../components/common/CommunityPage";

export default function ConcertCommunity() {
  return (
    <>
      <CommunityPage
        title="궁금했던 내한 공연 후기와 꿀팁 대방출 🍯"
        table={<CommunityTable />}
      />
    </>
  );
}
