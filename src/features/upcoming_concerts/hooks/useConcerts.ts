import {useEffect, useState} from "react";
import {getConcerts} from "../../../apis/upcoming_concerts/getConcerts";
import {Concert} from "../../../types/upcoming_concerts/Concert";

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

        // 날짜 기준으로 오름차순 정렬
        const sortedConcerts = concertData.sort((a: Concert, b: Concert) => {
          const dateA = a.title.date; // 날짜는 문자열 형식 그대로 비교
          const dateB = b.title.date; // 날짜는 문자열 형식 그대로 비교

          // 문자열 비교
          return dateA.localeCompare(dateB); // "2025년 5월"과 "2025년 7월" 등을 문자열로 비교
        });

        setConcerts(sortedConcerts);
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
