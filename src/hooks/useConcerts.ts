import {useEffect, useState} from "react";
import {getConcerts} from "../apis/upcoming_concerts/getConcerts";
import {Concert} from "../types/upcoming_concerts/Concert";

export default function useConcerts(channelId: string) {
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const response = await getConcerts({
          channelId: channelId,
        });

        const concertData = response.map(
          (concert: {_id: string; image: string; title: string}) => ({
            id: concert._id,
            image: concert.image,
            title: JSON.parse(concert.title),
          })
        );

        setConcerts(concertData);
      } catch (error) {
        console.error("콘서트 데이터를 불러오는데 실패했습니다.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConcerts();
  }, [channelId]);

  return {concerts, loading};
}
