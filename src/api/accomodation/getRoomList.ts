import axios from "axios";
import { API_BASE_URL } from "@api/config";

const getRoomList = async (
  id: number,
  checkInDate: string,
  checkOutDate: string,
  guestNum: number
) => {
  const GET_ROOM_LIST_URL = `${API_BASE_URL}/accommodations/${id}/rooms?start_date=${checkInDate}&end_date=${checkOutDate}&guest_num=${guestNum}`;
  const response = await axios.get(GET_ROOM_LIST_URL);

  return response.data.data.rooms;
};

export default getRoomList;
