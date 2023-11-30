import { useQuery } from "@tanstack/react-query";
import getRoomList from "@api/accomodation/getRoomList";

export const useRoomListQuery = (
  startDate: string,
  endDate: string,
  guestNum: number
) => {
  return useQuery({
    queryKey: ["roomList"],
    queryFn: () => getRoomList(startDate, endDate, guestNum)
  });
};
