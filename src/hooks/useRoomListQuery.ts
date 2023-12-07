import { useSuspenseQuery } from "@tanstack/react-query";
import getRoomList from "@api/accomodation/getRoomList";
import { RoomListProps } from "@components/ProductDetail/ChooseDetail/ChooseDetail.types";

const useRoomListQuery = ({
  id,
  checkInDate,
  checkOutDate,
  guestNum
}: RoomListProps) => {
  return useSuspenseQuery({
    queryKey: ["roomList", checkInDate, checkOutDate],
    queryFn: () => getRoomList({ id, checkInDate, checkOutDate, guestNum })
  });
};

export default useRoomListQuery;
