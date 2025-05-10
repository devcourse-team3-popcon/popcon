import { useEffect, useState } from "react";
import { Conversation } from "../types/Conversation";
import { axiosInstance } from "../../../apis/axiosInstance";

export default function useGetConversation() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getConversations = async () => {
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
    getConversations();
  }, []);

  return { conversations, loading };
}
