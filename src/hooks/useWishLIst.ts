import { useQuery } from "@tanstack/react-query";
import { getWishList } from "@api/getWishLIst";

export const useWishList = (
  pageNum: number,
  pageSize: number
) => {
  return useQuery({
    queryKey: ["wishList"],
    queryFn: () => getWishList(pageNum, pageSize)
  });
};
