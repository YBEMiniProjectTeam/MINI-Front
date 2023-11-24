import { useQuery } from "@tanstack/react-query";
import { getSearchList } from "@api/getSearchList";

export const useSearchList = (
  accomodationName: string,
  selectedDistrict: string,
  startDate: string | undefined,
  endDate: string | undefined,
  category: string
) => {
  return useQuery({
    queryKey: ["searchList"],
    queryFn: () => getSearchList(accomodationName, selectedDistrict, startDate, endDate, category)
  });
};