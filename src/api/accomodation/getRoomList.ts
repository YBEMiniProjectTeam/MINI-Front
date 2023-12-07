import axios from "axios";
import { convertDateFormat5 } from "@utils/convertDateFormat5";
import { RoomListProps } from "@components/ProductDetail/ChooseDetail/ChooseDetail.types";

const getRoomList = async ({
  id,
  checkInDate,
  checkOutDate,
  guestCnt
}: RoomListProps) => {
  const startDate = convertDateFormat5(checkInDate);
  const endDate = convertDateFormat5(checkOutDate);

  const response = await axios.get(
    `https://api.anti-bias.kr/api/accommodations/${id}/rooms`,
    {
      params: { start_date: startDate, end_date: endDate, guest_num: guestCnt }
    }
  );

  return response.data.data.rooms;
};

export default getRoomList;
