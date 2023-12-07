import axios from "axios";
import { API_BASE_URL } from "@api/config";
import { convertDateFormat5 } from "@utils/convertDateFormat5";

const getRoomList = async (
  id: number,
  checkInDate: string,
  checkOutDate: string,
  guestNum: number
) => {
  const startDate = convertDateFormat5(checkInDate);
  const endDate = convertDateFormat5(checkOutDate);

  const getRoomListUrl = `${API_BASE_URL}/accommodations/${id}/rooms?start_date=${startDate}&end_date=${endDate}&guest_num=${guestNum}`;
  const response = await axios.get(getRoomListUrl);

  return response.data.data.rooms;
};

export default getRoomList;
