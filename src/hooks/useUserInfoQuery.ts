import { getUserInfo } from "@api/getUserInfo.ts";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useUserInfo = () => {
  return useSuspenseQuery({
    queryKey: ["userInfo"],
    queryFn: () => getUserInfo()
  });
};
