import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "@api/getUserInfo";

export const useUserInfo = () => {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo
  });
};
