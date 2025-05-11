import { useState } from "react";

export const usePagination = () => {
  const [cntPage, setCntPage] = useState<number>(10);
  const [totalCnt, setTotalCnt] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const setPagination = (cntPage: number, totalCnt: number, page: number) => {
    setCntPage(cntPage);
    setTotalCnt(totalCnt);
    setPage(page);
  };
  return { cntPage, totalCnt, page, setPagination };
};
