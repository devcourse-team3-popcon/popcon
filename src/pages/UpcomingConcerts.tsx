import Pagination from "../components/common/Pagination";
import ConcertBanner from "../features/upcoming_concerts/components/ConcertBanner";
import ConcertList from "../features/upcoming_concerts/components/ConcertList";
import ConcertListSkeleton from "../features/upcoming_concerts/components/ConcertListSkeleton";
import useConcerts from "../features/upcoming_concerts/hooks/useConcerts";
import { usePaginatedConcerts } from "../features/upcoming_concerts/hooks/usePaginatedConcerts";

export default function UpcomingConcerts() {
  const channelId = "681728150949dd30548aa760"; // Upcoming Concerts channel
  const { concerts, loading } = useConcerts(channelId);
  const { currentConcerts, currentPage, cntPage, setPagination } =
    usePaginatedConcerts(concerts);

  return (
    <div className="grid justify-center items-center w-[1080px]">
      <ConcertBanner />
      <div className="mt-9 md:mt-16">
        {loading ? (
          <ConcertListSkeleton />
        ) : (
          <>
            <ConcertList concerts={currentConcerts} />
            {concerts && concerts.length > 0 && (
              <div className="mt-20 flex justify-center">
                <Pagination
                  page={currentPage}
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
