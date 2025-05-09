import { useEffect, useState } from "react";
import { getCurrentUserId } from "../utils/auth";
import { axiosInstance } from "../apis/axiosInstance";
import { Post } from "../types/Post";

export const useLike = (initialPost: Post | null) => {
  const [post, setPost] = useState<Post | null>(initialPost);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!initialPost) return;

    setPost(initialPost);
    setIsLiked(
      initialPost.likes.some((like) => like.user === getCurrentUserId())
    );
  }, [initialPost]);

  const toggleLike = async () => {
    if (!post) return;

    const currentUserId = getCurrentUserId();
    const userLike = post.likes.find((like) => like.user === currentUserId);

    try {
      if (userLike) {
        // 좋아요 제거
        await axiosInstance.delete(`/likes/delete`, {
          data: { id: userLike._id },
        });
        setPost((prev) =>
          prev
            ? {
                ...prev,
                likes: prev.likes.filter((like) => like._id !== userLike._id),
              }
            : null
        );
        setIsLiked(false);
      } else {
        // 좋아요 추가
        const res = await axiosInstance.post(`/likes/create`, {
          postId: post._id,
          userId: currentUserId,
        });
        setPost((prev) =>
          prev
            ? {
                ...prev,
                likes: [...prev.likes, res.data],
              }
            : null
        );
        setIsLiked(true);
      }
    } catch (e) {
      console.error("좋아요 처리 중 오류 발생:", e);
    }
  };
  return { post, isLiked, toggleLike, setPost };
};
