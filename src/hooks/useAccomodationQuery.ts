import { useQuery } from "@tanstack/react-query";
import getAccomodationInfo from "@/api/accomodation/getAccomodationInfo";

export const useAccomodationQuery = (id: number) => {
  return useQuery({
    queryKey: ["accomodationInfo"],
    queryFn: () => getAccomodationInfo(id)
  });
};
