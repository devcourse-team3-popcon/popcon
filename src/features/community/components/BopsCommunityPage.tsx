import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import BopCard from "./BopCard";
import usePostsByChannel from "../../../hooks/usePostsByChannel";
import Hashtag from "../../../components/common/Hashtag";
import { useState } from "react";
import LoadingSpinner from "../../../components/common/LoadingSpinner";

type BopsCommunityProps = {
  channelId: string;
};

export default function BopsCommunityPage({ channelId }: BopsCommunityProps) {
  const navigate = useNavigate();
  const hashtags = ["숨듣명 🎵", "30초 미리듣기 👂🏻", "띵곡 추천 🖤"];
  const [currentVideo, setCurrentVideo] = useState<{
    postId: string;
    videoId: string;
  } | null>(null);

  const { posts, setPosts, loading } = usePostsByChannel(`${channelId}`);
  if (loading)
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  if (!channelId) return <p>채널을 찾을 수 없습니다.</p>;

  return (
    <>
      <div className="flex flex-col gap-8 w-full pb-20 px-5">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col gap-8 mt-10 w-full">
            <p className="text-[30px] font-semibold">
              여기는{" "}
              <span className="text-[color:var(--primary-300)]">
                숨겨진 명곡
              </span>
              들의 성지 🔮
            </p>
            <div className="w-full flex justify-between items-center pr-6">
              <div className="flex gap-4 flex-wrap">
                {hashtags.map((tag, index) => (
                  <Hashtag
                    key={index}
                    text={tag}
                    variant={index % 2 ? "empty" : "filled"}
                  />
                ))}
              </div>
              <Plus
                className="cursor-pointer text-[color:var(--white-80)]"
                onClick={() => navigate("add")}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl min-w-1xl mx-auto w-full">
          {posts?.map((post) => (
            <BopCard
              key={post._id}
              post={post}
              currentVideo={currentVideo}
              setCurrentVideo={setCurrentVideo}
              onDelete={(deletedId) =>
                setPosts((prev) => prev.filter((p) => p._id !== deletedId))
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}
