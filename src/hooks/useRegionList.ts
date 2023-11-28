import { useQuery } from "@tanstack/react-query";
import { getRegionList } from "@api/getRegionList";

export const useRegionList = () => {
  return useQuery({
    queryKey: ["regionList"],
    queryFn: () => getRegionList()
  });
};
