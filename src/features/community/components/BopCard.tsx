import { useEffect, useState } from "react";
import { axiosInstance } from "../../../apis/axiosInstance";
import { Post } from "../types/Post";
import { Like } from "../types/Like";
import { parseBopTitle } from "../../../utils/parseBopTitle";
import { Ellipsis, Heart } from "lucide-react";
import play from "../../../assets/images/playbtn.svg";
import stop from "../../../assets/images/stopbtn.svg";
import { searchYoutubeVideo } from "../../../utils/searchYoutubeVideo";
import DropdownMenu from "../../../components/common/DropdownMenu";
import { deletePost } from "../../../utils/post";
import { getCurrentUserId } from "../../../utils/auth";

type BopCardProps = {
  post: Post;
  currentVideo: { postId: string; videoId: string } | null;
  setCurrentVideo: (video: { postId: string; videoId: string } | null) => void;
};

export default function BopCard({
  post,
  currentVideo,
  setCurrentVideo,
}: BopCardProps) {
  const [localPost, setLocalPost] = useState<Post>(post);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const currentUserId = getCurrentUserId();

  const myMenuItems = [
    { label: "게시물 수정", onClick: () => alert("수정") },
    { label: "플리에 추가", onClick: () => alert("플레이리스트 추가") },
    { label: "게시물 삭제", onClick: () => deletePostHandler(), danger: true },
  ];
  const defaultMenuItems = [
    { label: "플리에 추가", onClick: () => alert("플레이리스트 추가") },
  ];

  useEffect(() => {
    const userLike = localPost.likes.find(
      (like: Like) => like.user === currentUserId
    );
    setIsLiked(!!userLike);
  }, [localPost]);

  const deletePostHandler = async () => {
    deletePost(localPost._id);
  };

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

  const isPlaying =
    currentVideo?.postId === localPost._id && currentVideo?.videoId === videoId;
  const parsedBopTitle = parseBopTitle(localPost.title);
  const trackName = parsedBopTitle.track.name;
  const artistNames = parsedBopTitle.track.artists
    .map((a: { name: string }) => a.name)
    .join(" ");

  const togglePlayTrack = async () => {
    if (isPlaying) {
      setCurrentVideo(null);
      return;
    }

    const query = `${artistNames} - ${trackName} official audio topic`;
    const foundVideoId = await searchYoutubeVideo(query);

    if (foundVideoId) {
      setVideoId(foundVideoId);
      setCurrentVideo({ postId: localPost._id, videoId: foundVideoId });
    }
  };

  return (
    <>
      <div className="relative w-fit">
        <div className="w-[240px] bg-[#55555534] p-4 rounded-2xl flex flex-col gap-4 mt-7">
          <img
            className="w-full h-[208px] bg-[#c2c2c2] rounded-2xl"
            src={parsedBopTitle.track.image}
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

                <div className="w-4 h-6 flex items-center justify-center">
                  <Ellipsis
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </div>
              </div>

              <span className="text-[12px] ">
                {parsedBopTitle.track.artists.join(", ")}
              </span>
            </div>

            <div className="flex justify-between">
              <div className="flex w-auto gap-2 items-center ">
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
              <img
                src={isPlaying ? stop : play}
                onClick={togglePlayTrack}
                alt="재생버튼"
                className="w-6 h-6 cursor-pointer pb-1"
              />
            </div>
          </div>

          {isPlaying && currentVideo?.videoId && (
            <iframe
              className="w-0 h-0 hidden"
              src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&showinfo=0`}
              allow="autoplay"
              allowFullScreen
            />
          )}
        </div>

        {isOpen && (
          <div className="absolute left-full top-66 ml-41">
            <DropdownMenu
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              menuItems={
                localPost.author._id === currentUserId
                  ? myMenuItems
                  : defaultMenuItems
              }
            />
          </div>
        )}
      </div>
    </>
  );
}
