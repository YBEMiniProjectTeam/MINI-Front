import { useQuery } from "@tanstack/react-query";
import { getDistrictList } from "@api/getDistrictList";

export const useDistrictList = (regionId: number) => {
  return useQuery({
    queryKey: ["districtList", regionId],
    queryFn: () => getDistrictList(regionId)
  });
};
