import { getUserInfo } from "@api/getUserInfo.ts";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useUserInfo = (headers: { [key: string]: string }) => {
  return useSuspenseQuery({
    queryKey: ["userInfo"],
    queryFn: () => getUserInfo(headers)
  });
};
