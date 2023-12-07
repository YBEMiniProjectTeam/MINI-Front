import { useSuspenseQuery } from "@tanstack/react-query";
import { getSearchList } from "@api/getSearchList";
import { Nullable } from "@/types/nullable";

export const useSearchList = (
  accomodationName: Nullable<string>,
  selectedDistrict: Nullable<string>,
  startDate: Nullable<string>,
  endDate: Nullable<string>,
  category: Nullable<string>,
  pageNum: number,
  pageSize: number
) => {
  return useSuspenseQuery({
    queryKey: ["searchList", pageSize],
    queryFn: () =>
      getSearchList(
        accomodationName,
        selectedDistrict,
        startDate,
        endDate,
        category,
        pageNum,
        pageSize
      )
  });
};
