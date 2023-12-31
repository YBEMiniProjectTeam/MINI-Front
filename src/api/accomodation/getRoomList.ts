import axiosInstance from "@api/axiosInstance";
import { RoomListProps } from "@components/ProductDetail/ChooseDetail/ChooseDetail.types";
import format from "date-fns/format";

const getRoomList = async ({
  id,
  checkInDate,
  checkOutDate,
  guestCnt
}: RoomListProps) => {
  const startDate = format(new Date(checkInDate), "yyyy-MM-dd");
  const endDate = format(new Date(checkOutDate), "yyyy-MM-dd");

  const response = await axiosInstance.get(`/accommodations/${id}/rooms`, {
    params: { start_date: startDate, end_date: endDate, guest_num: guestCnt }
  });

  return response.data.data.rooms;
};

export default getRoomList;
