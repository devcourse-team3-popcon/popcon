import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import BopCard from "../../../components/common/BopCard";
import usePostsByChannel from "../../../hooks/usePostsByChannel";

type BopsCommunityProps = {
  channelId: string;
};

export default function BopsCommunityPage({ channelId }: BopsCommunityProps) {
  const navigate = useNavigate();
  const { posts, loading } = usePostsByChannel(`${channelId}`);
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
        {posts?.map((post) => (
          <BopCard key={post._id} post={post} />
        ))}
      </div>
    </>
  );
}
