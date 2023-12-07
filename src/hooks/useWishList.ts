import { useSuspenseQuery } from "@tanstack/react-query";
import { getWishList } from "@api/getWishList";
import { AxiosRequestConfig } from "axios";

export const useWishList = (headers: AxiosRequestConfig['headers']) => {
  return useSuspenseQuery({
    queryKey: ["wishList", headers],
    queryFn: () => getWishList(headers)
  });
};
