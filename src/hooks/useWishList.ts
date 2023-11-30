import { useSuspenseQuery } from "@tanstack/react-query";
import { getWishList } from "@api/getWishList";

export const useWishList = (pageNum: number, pageSize: number) => {
  return useSuspenseQuery({
    queryKey: ["wishList", pageNum, pageSize],
    queryFn: () => getWishList(pageNum, pageSize)
  });
};
