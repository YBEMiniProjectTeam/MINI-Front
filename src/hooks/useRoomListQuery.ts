import { useSuspenseQuery } from "@tanstack/react-query";
import getRoomList from "@api/accomodation/getRoomList";
import { RoomListProps } from "@components/ProductDetail/ChooseDetail/ChooseDetail.types";

const useRoomListQuery = ({
  id,
  checkInDate,
  checkOutDate,
  guestCnt
}: RoomListProps) => {
  return useSuspenseQuery({
    queryKey: ["roomList", checkInDate, checkOutDate],
    queryFn: () => getRoomList({ id, checkInDate, checkOutDate, guestCnt })
  });
};

export default useRoomListQuery;
