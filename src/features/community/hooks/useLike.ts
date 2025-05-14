import { useEffect, useOptimistic, useState, startTransition } from "react";
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
              createdAt: id,
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
    const fetchUserId = async () => {
      const userId = await getCurrentUserId();
      setCurrentUserId(userId);
    };
    fetchUserId();
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
    const userLike = optimisticPost.likes.find((like) => like.user === currentUserId);
    
    startTransition(async () => {
      try {
        if (userLike) {
          setOptimisticPost({
            type: "remove",
            userId: currentUserId,
            likeId: userLike._id,
          });

          await axiosInstance.delete(`/likes/delete`, {
            data: { id: userLike._id },
          });
          
          if (post) {
            setPost({
              ...post,
              likes: post.likes.filter((like) => like._id !== userLike._id),
            });
          }
        } else {
          setOptimisticPost({ 
            type: "add", 
            userId: currentUserId 
          });
          
          const res = await axiosInstance.post(`/likes/create`, {
            postId: optimisticPost._id,
            userId: currentUserId,
          });
          const newLike = res.data;
          
          if (post) {
            setPost({
              ...post,
              likes: [...post.likes, newLike],
            });
          }

          if (optimisticPost.author._id && optimisticPost.author._id !== currentUserId) {
            await sendNotification({
              notificationType: "LIKE",
              notificationTypeId: newLike._id,
              userId: optimisticPost.author._id,
              postId: optimisticPost._id,
            });
          }
        }
      } catch (e) {
        console.error("좋아요 처리 중 오류 발생:", e);
      }
    });
  };

  return { 
    isLiked, 
    toggleLike, 
    likes: optimisticPost?.likes || [],
    isPending
  };
};