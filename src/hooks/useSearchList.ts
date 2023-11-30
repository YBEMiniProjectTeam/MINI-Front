import { useSuspenseQuery } from "@tanstack/react-query";
import { getSearchList } from "@api/getSearchList";

export const useSearchList = (
  accomodationName: string | null,
  selectedDistrict: string | null,
  startDate: string | null,
  endDate: string | null,
  category: string | null,
  pageNum: number,
  pageSize: number,
  isRefetched: boolean | null,
  headers?: { [key: string]: string }
) => {
  return useSuspenseQuery({
    queryKey: ["searchList", pageNum, pageSize, headers, isRefetched],
    queryFn: () =>
      getSearchList(
        accomodationName,
        selectedDistrict,
        startDate,
        endDate,
        category,
        pageNum,
        pageSize,
        headers
      )
  });
};
