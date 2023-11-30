import { useSuspenseQuery } from "@tanstack/react-query";
import getRoomList from "@api/accomodation/getRoomList";

export const useRoomListQuery = (
  startDate: string,
  endDate: string,
  guestNum: number
) => {
  return useSuspenseQuery({
    queryKey: ["roomList", startDate, endDate],
    queryFn: () => getRoomList(startDate, endDate, guestNum)
  });
};
