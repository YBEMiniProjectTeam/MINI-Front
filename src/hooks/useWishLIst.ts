import { useSuspenseQuery } from "@tanstack/react-query";
import { getWishList } from "@api/getWishLIst";

export const useWishList = (
  pageNum: number,
  pageSize: number
) => {
  return useSuspenseQuery({
    queryKey: ["wishList", pageNum, pageSize],
    queryFn: () => getWishList(pageNum, pageSize)
  });
};
