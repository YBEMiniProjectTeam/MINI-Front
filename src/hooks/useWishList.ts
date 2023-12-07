import { useSuspenseQuery } from "@tanstack/react-query";
import { getWishList } from "@api/getWishList";

export const useWishList = () => {
  return useSuspenseQuery({
    queryKey: ["wishList"],
    queryFn: () => getWishList()
  });
};
