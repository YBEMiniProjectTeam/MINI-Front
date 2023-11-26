import { useQuery } from "@tanstack/react-query";
import { getWishList } from "@api/getWishLIst";

export const useWishList = () => {
  return useQuery({
    queryKey: ["wishList"],
    queryFn: () => getWishList()
  });
};
