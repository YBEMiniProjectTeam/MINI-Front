import axios from "axios";
import { convertDateFormat5 } from "@utils/convertDateFormat5";

const getRoomList = async (
  id: number,
  checkInDate: string,
  checkOutDate: string,
  guestNum: number
) => {
  const startDate = convertDateFormat5(checkInDate);
  const endDate = convertDateFormat5(checkOutDate);

  const response = await axios.get(
    `https://api.anti-bias.kr/api/accommodations/${id}/rooms`,
    {
      params: { start_date: startDate, end_date: endDate, guest_num: guestNum }
    }
  );

  return response.data.data.rooms;
};

export default getRoomList;
