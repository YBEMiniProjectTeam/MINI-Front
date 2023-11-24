import { useQuery } from "@tanstack/react-query";
import { getSearchList } from "@api/getSearchList";

export const useSearchList = () => {
  return useQuery({
    queryKey: ["searchList"],
    queryFn: () => getSearchList()
  });
};