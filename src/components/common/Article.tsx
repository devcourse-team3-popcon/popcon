import { Ellipsis, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../apis/axiosInstance";
import { Like, Post } from "../../types/Post";
import Comment from "./Comment";

type ArticleProps = { postId?: string };

export default function Article({ postId }: ArticleProps) {
  const [post, setPost] = useState<Post | null>(null);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const currentUserId = "68160153f940b6515bf4e11f";

  const fetchPost = async () => {
    try {
      const res = await axiosInstance.get(`/posts/${postId}`);
      setPost(res.data);

      const userLike = res.data.likes.find(
        (like: Like) => like.user === currentUserId
      );
      setIsLiked(!!userLike);
    } catch (e) {
      console.error("게시글 불러오기 실패", e);
    }
  };

  useEffect(() => {
    if (!postId) return;
    fetchPost();
  }, [postId]);

  const toggleLike = async () => {
    try {
      if (!post) return;

      const userLike = post.likes.find((like) => like.user === currentUserId);

      if (userLike) {
        await axiosInstance.delete(`/likes/delete`, {
          data: { id: userLike._id },
        });
      } else {
        await axiosInstance.post(`/likes/create`, {
          postId,
          userId: currentUserId,
        });
      }

      await fetchPost();
    } catch (e) {
      console.error("좋아요 실패 : ", e);
    }
  };

  if (!post) return <p>게시글을 불러오는 중...</p>;

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-amber-200 w-9 h-9 rounded-full mr-4"></div>
            <div className="flex flex-col">
              <span className="text-[18px]">{post.author.fullName}</span>
              <span className="text-[13px] text-[color:var(--white-80)]">
                {new Date(post.createdAt).toLocaleString("ko-KR")}
              </span>
            </div>
          </div>

          {post.author._id === currentUserId && <Ellipsis />}
        </div>

        <div>
          <span className="text-[18px]">{post.title}</span>
          <p className="mt-7 text-[color:var(--white-80)]">{post.title}</p>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-[13px]">
            <Heart
              onClick={toggleLike}
              className={`w-4 h-4 cursor-pointer ${
                isLiked
                  ? "text-[color:var(--primary-300)]"
                  : "text-[color:var(--white)]"
              }`}
              fill={isLiked ? "var(--primary-300)" : "none"}
            />
            {post.likes.length}
          </div>

          <p className="text-[12px]">
            <span className="font-bold">{post.comments.length}</span>개의 댓글
          </p>
        </div>

        <div className="mt-6 border-t border-white/20 pt-4">
          {post.comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </div>
      </div>
    </>
  );
}
