import { useEffect, useState } from "react";
import { channelsAxiosInstance } from "../apis/community/channels";

export function useChannelId(channelName: string) {
  const [channelId, setChannelId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChannelId = async () => {
      try {
        const response = await channelsAxiosInstance.get("");
        const channels = response.data;

        const matchChannel = channels.find(
          (channel: any) => channel.name === channelName
        );
        if (matchChannel) {
          setChannelId(matchChannel._id);
        }
      } catch (e) {
        console.error("Failed to Fetch Channel Id:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchChannelId();
  }, [channelName]);

  return { channelId, loading };
}
