import { useSuspenseQuery } from "@tanstack/react-query";
import { getWishList } from "@api/getWishList";
import { Accommodation } from "@components/SearchList/SearchList.types";

export const useWishList = () => {
  return useSuspenseQuery<Accommodation[]>({
    queryKey: ["wishList"],
    queryFn: () => getWishList()
  });
};
