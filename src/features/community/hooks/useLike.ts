import { useEffect, useState, useOptimistic, startTransition } from "react";
import { getCurrentUserId } from "../../../utils/auth";
import { axiosInstance } from "../../../apis/axiosInstance";
import { Post } from "../types/Post";
import { sendNotification } from "../../../utils/notification";

export const useLike = (initialPost: Post | null) => {
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [post, setPost] = useState<Post | null>(initialPost);

  const [optimisticPost, setOptimisticPost] = useOptimistic(
    post,
    (
      currentPost,
      action: { type: "add" | "remove"; userId: string; likeId?: string }
    ) => {
      if (!currentPost) return null;

      if (action.type === "add") {
        const id = String(Date.now());
        return {
          ...currentPost,
          likes: [
            ...currentPost.likes,
            {
              _id: id,
              user: action.userId,
              post: currentPost._id,
              createdAt: "aaa",
              updatedAt: id,
            },
          ],
        };
      } else if (action.type === "remove" && action.likeId) {
        return {
          ...currentPost,
          likes: currentPost.likes.filter((like) => like._id !== action.likeId),
        };
      }

      return currentPost;
    }
  );

  useEffect(() => {
    getCurrentUserId().then(setCurrentUserId);
  }, []);

  useEffect(() => {
    setPost(initialPost);
  }, [initialPost]);

  const isLiked =
    currentUserId && Array.isArray(optimisticPost?.likes)
      ? optimisticPost.likes.some((like) => like.user === currentUserId)
      : false;

  const isPending = optimisticPost !== post;

  const toggleLike = async () => {
    if (!optimisticPost || !currentUserId) return;

    startTransition(async () => {
      const userLike = optimisticPost.likes.find(
        (like) => like.user === currentUserId
      );

      if (userLike) {
        setOptimisticPost({
          type: "remove",
          userId: currentUserId,
          likeId: userLike._id,
        });

        try {
          await axiosInstance.delete("/likes/delete", {
            data: { id: userLike._id },
          });

          if (post) {
            setPost((post) => ({
              ...post!,
              likes: post!.likes.filter((like) => like._id !== userLike._id),
            }));
          }
        } catch (e) {
          console.error("좋아요 삭제 실패:", e);
        }
      } else {
        setOptimisticPost({
          type: "add",
          userId: currentUserId,
        });

        try {
          const res = await axiosInstance.post("/likes/create", {
            postId: optimisticPost._id,
            userId: currentUserId,
          });

          const newLike = res.data;

          if (
            optimisticPost.author._id &&
            optimisticPost.author._id !== currentUserId
          ) {
            await sendNotification({
              notificationType: "LIKE",
              notificationTypeId: newLike._id,
              userId: optimisticPost.author._id,
              postId: optimisticPost._id,
            });
          }

          setPost((post) => ({
            ...post!,
            likes: [...post!.likes, newLike],
          }));
        } catch (e) {
          console.error("좋아요 추가 실패:", e);
        }
      }
    });
  };

  return {
    isLiked,
    toggleLike,
    likes: optimisticPost?.likes || [],
    isPending,
  };
};