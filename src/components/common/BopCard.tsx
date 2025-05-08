import { useEffect, useState } from "react";
import { axiosInstance } from "../../apis/axiosInstance";
import { Post } from "../../types/Post";
import { Like } from "../../types/Like";
import { parseBopTitle } from "../../utils/parseBopTitle";
import { Heart, ListPlus } from "lucide-react";
import play from "../../assets/images/playbtn.svg";

type BopCardProps = { post: Post };

export default function BopCard({ post }: BopCardProps) {
  const [localPost, setLocalPost] = useState<Post>(post);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const currentUserId = "68160153f940b6515bf4e11f";

  useEffect(() => {
    const userLike = localPost.likes.find(
      (like: Like) => like.user === currentUserId
    );
    setIsLiked(!!userLike);
  }, [localPost]);

  const toggleLike = async () => {
    try {
      const userLike = localPost.likes.find(
        (like: Like) => like.user === currentUserId
      );

      if (userLike) {
        await axiosInstance.delete(`/likes/delete`, {
          data: { id: userLike._id },
        });

        setLocalPost((prev) => ({
          ...prev,
          likes: prev.likes.filter((like) => like._id !== userLike._id),
        }));
      } else {
        const res = await axiosInstance.post(`/likes/create`, {
          postId: localPost._id,
          userId: currentUserId,
        });

        setLocalPost((prev) => ({
          ...prev,
          likes: [...prev.likes, res.data],
        }));
      }
    } catch (e) {
      console.error("좋아요 실패 : ", e);
    }
  };

  const parsedBopTitle = parseBopTitle(localPost.title);
  console.log(parsedBopTitle);

  return (
    <>
      <div className="w-[240px] bg-[#55555534] p-4 rounded-2xl flex flex-col gap-4 mt-7">
        <img
          className="w-full h-[208px] bg-[#c2c2c2] rounded-2xl"
          src={parsedBopTitle.track.album.images[0]?.url}
        />

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div className="w-full flex gap-0.5 h-12">
              <div className="flex flex-col w-[90%] justify-between">
                <span className="w-full text-[16px] font-semibold truncate">
                  {parsedBopTitle.track.name}
                </span>
                <span className="text-[12px] font-light text-[color:var(--white-80)]">
                  {parsedBopTitle.genre}
                </span>
              </div>

              <div className="w-[10%] flex flex-col items-center gap-1 pt-0.5">
                <Heart
                  onClick={toggleLike}
                  className={`w-4 h-4 cursor-pointer ${
                    isLiked
                      ? "text-[color:var(--primary-300)]"
                      : "text-[color:var(--white)]"
                  }`}
                  fill={isLiked ? "var(--primary-300)" : "none"}
                />
                <span className="text-[10px]">{localPost.likes.length}</span>
              </div>
            </div>

            <span className="text-[12px] ">
              {parsedBopTitle.track.artists
                .map((artist: { name: string }) => artist.name)
                .join(", ")}
            </span>
          </div>

          <div className="flex justify-between">
            <div className="flex w-auto gap-1 items-center cursor-pointer">
              <ListPlus className="w-4" />
              <span className="text-[12px] font-light ">Add to PlayList</span>
            </div>
            <img
              src={play}
              alt="재생버튼"
              className="w-6 h-6 cursor-pointer pb-1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
