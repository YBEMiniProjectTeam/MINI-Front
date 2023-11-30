import { useSuspenseQuery } from "@tanstack/react-query";
import getRoomList from "@api/accomodation/getRoomList";

export const useRoomListQuery = (
  id: number,
  checkInDate: string,
  checkOutDate: string,
  guestNum: number
) => {
  return useSuspenseQuery({
    queryKey: ["roomList", checkInDate, checkOutDate],
    queryFn: () => getRoomList(id, checkInDate, checkOutDate, guestNum)
  });
};
