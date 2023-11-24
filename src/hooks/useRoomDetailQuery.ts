import { useQuery } from "@tanstack/react-query";
import { getRoomDetail } from "@api/getRoomDetail";

export const useRoomDetail = (roomId: string) => {
  return useQuery({
    queryKey: ["roomDetail"],
    queryFn: () => getRoomDetail(roomId)
  });
};
