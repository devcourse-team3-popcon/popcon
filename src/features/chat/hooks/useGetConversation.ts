import { useCallback, useEffect, useState } from "react";
import { Conversation } from "../types/Conversation";
import { axiosInstance } from "../../../apis/axiosInstance";

export default function useGetConversation() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);

  const getConversations = useCallback(async () => {
    try {
      const { data } = await axiosInstance.get("/messages/conversations");

      setConversations(data);
      console.log("fetch conversations!!");
    } catch (error) {
      console.log("Failed to fetch conversations", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getConversations();
  }, [getConversations]);

  return { conversations, loading, refresh: getConversations };
}
