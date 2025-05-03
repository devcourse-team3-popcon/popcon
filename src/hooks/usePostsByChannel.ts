import { useEffect, useState } from "react";
import { Post } from "../types/Post";
import { postsAxiosInstance } from "../apis/community/posts";

export default function usePostsByChannel(channelId: string) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await postsAxiosInstance.get(`/channel/${channelId}`);
        setPosts(response.data);
      } catch (e) {
        console.log("Failed to Fetch Data:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [channelId]);
  return { posts, loading };
}
