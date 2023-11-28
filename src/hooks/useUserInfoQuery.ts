import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUserInfo = () => {
  return useSuspenseQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const response = await axios.get(`/api/member`);
      return response.data;
    }
  });
};
