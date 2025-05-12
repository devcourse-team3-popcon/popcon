import { useCallback, useEffect, useMemo, useState } from "react";
import { Pause, Play } from "lucide-react";

interface PaginationProps {
  page: number;
  cntPage: number;
  totalCnt: number;
  setPagination: (cntPage: number, totalCnt: number, page: number) => void;
}

export default function Pagination({
  page,
  cntPage,
  totalCnt,
  setPagination,
}: PaginationProps) {
  const [pageState, setPageState] = useState<number>(1);
  const maxPage = Math.max(1, Math.ceil(totalCnt / cntPage));

  useEffect(() => {
    const newPageState = Math.floor((page - 1) / 5) * 5 + 1;
    setPageState(newPageState);
  }, [page]);

  const pageNumberList = useMemo(() => {
    const pageNumbers = [];
    for (let i = pageState; i < pageState + 5 && i <= maxPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }, [pageState, maxPage]);

  const selectPageNum = useCallback(
    (value: number) => {
      setPagination(cntPage, totalCnt, value);
    },
    [cntPage, totalCnt, setPagination]
  );

  const goToJumpPage = useCallback(
    (move: "prev" | "next") => {
      const newGroupStart =
        move === "next"
          ? Math.min(pageState + 5, maxPage - ((maxPage - 1) % 5))
          : Math.max(pageState - 5, 1);
      const newPage = move === "next" ? page + 5 : page - 5;

      setPageState(newGroupStart);
      setPagination(cntPage, totalCnt, Math.min(Math.max(newPage, 1), maxPage));
    },
    [pageState, maxPage, cntPage, totalCnt, page, setPagination]
  );

  return (
    <>
      <div className="flex items-center gap-3">
        <button disabled={pageState <= 1} onClick={() => goToJumpPage("prev")}>
          <Pause className="cursor-pointer" fill="var(--red)" strokeWidth={0} />
        </button>

        {pageNumberList.map((value) => (
          <button
            key={value}
            className={`px-2 py-1 cursor-pointer ${
              value === page ? "text-[color:var(--primary-300)]" : ""
            }`}
            onClick={() => selectPageNum(value)}
            disabled={value === page}
          >
            {value}
          </button>
        ))}
        <button
          disabled={pageState + 5 > maxPage}
          onClick={() => goToJumpPage("next")}
        >
          <Play
            className="cursor-pointer"
            fill="var(--primary-300)"
            strokeWidth={0}
          />
        </button>
      </div>
    </>
  );
}
