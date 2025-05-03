import CommunityTable from "../../../components/common/CommunityTable";
import CommunityPage from "../../../components/common/CommunityPage";

export default function OpenCommunity() {
  return (
    <>
      <CommunityPage
        title="Jay 님의 PlayList 를 채워줄 곳 ✨"
        table={<CommunityTable />}
      />
    </>
  );
}
