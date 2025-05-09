import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axiosInstance";
import { Conversation } from "../types/Conversation";

export default function useGetConversation() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const { data } = await axiosInstance.get("/messages/conversations");
        setConversations(data);
        // console.log("fetch Data Done!!");
      } catch (error) {
        console.log("Failed to Fetch Conversations", error);
      } finally {
        setLoading(false);
      }
    };
    fetchConversations();
  }, []);

  return { conversations, loading };
}
