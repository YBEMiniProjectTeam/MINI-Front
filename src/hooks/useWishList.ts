import { useSuspenseQuery } from "@tanstack/react-query";
import { getWishList } from "@api/getWishList";

export const useWishList = (headers: { [key: string]: string }) => {
  return useSuspenseQuery({
    queryKey: ["wishList", headers],
    queryFn: () => getWishList(headers)
  });
};
