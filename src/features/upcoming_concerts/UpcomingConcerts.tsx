import ConcertCard from "../../components/upcoming_concerts/ConcertCard";
import useConcerts from "../../hooks/useConcerts";
import { useMemo, useState } from "react";
import Pagination from "../../components/common/Pagination";
import { useSearchParams } from "react-router";

export default function UpcomingConcerts() {
  const channelId = "681728150949dd30548aa760"; // Upcoming Concerts channel
  const { concerts, loading } = useConcerts(channelId);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const [cntPage, setCntPage] = useState(16);

  const currentConcerts = useMemo(() => {
    if (!concerts || concerts.length === 0) return [];
    const indexOfLastConcert = currentPage * cntPage;
    const indexOfFirstConcert = indexOfLastConcert - cntPage;
    return concerts.slice(indexOfFirstConcert, indexOfLastConcert);
  }, [concerts, currentPage, cntPage]);

  const setPagination = (newCntPage: number) => {
    if (newCntPage !== cntPage) {
      setCntPage(newCntPage);

      const newParams = new URLSearchParams(searchParams);
      newParams.set("page", "1");
      setSearchParams(newParams);
    }
  };

  return (
    <div className="mt-12 flex flex-col justify-center items-center">
      <div className="w-full gap-20">
        <h1 className="text-[55px] font-[MonumentExtended] leading-17">
          <span className="block">UPCOMING</span>
          <span className="text-[var(--primary-300)]">CONCERTS</span>
          <span>&nbsp;in&nbsp;</span>
          <span className="text-[var(--primary-300)]">KOREA</span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-16">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-20">
              {currentConcerts.map((concert, index) => (
                <ConcertCard key={index} data={concert} />
              ))}
            </div>

            {concerts && concerts.length > 0 && (
              <div className="mt-20 flex justify-center">
                <Pagination
                  cntPage={cntPage}
                  totalCnt={concerts.length}
                  setPagination={setPagination}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
