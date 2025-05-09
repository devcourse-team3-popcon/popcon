import { useEffect, useState } from "react";
import { Message } from "../types/Message";
import { axiosInstance } from "../apis/axiosInstance";

type SimpleMsg = {
  id: string;
  message: string;
  sender: string;
  s_id: string;
  receiver: string;
  r_id: string;
  createdAt: string;
};

export default function useGetMessages(userId: string) {
  const [messages, setMessages] = useState<SimpleMsg[]>([]);
  const [loading, setLoading] = useState(true);

  const formatTime = (date: Date) => {
    return date.toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axiosInstance.get("/messages", {
          params: { userId: userId },
        });

        const msgData = data.map((msg: Message) => ({
          id: msg._id,
          message: msg.message,
          sender: msg.sender.fullName,
          s_id: msg.sender._id,
          receiver: msg.receiver.fullName,
          r_id: msg.receiver._id,
          createdAt: formatTime(new Date(msg.createdAt)),
        }));

        setMessages(msgData);
      } catch (error) {
        console.log("Failed to Fetch Messages", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, [userId]);

  return { messages, loading };
}
