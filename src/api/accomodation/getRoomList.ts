import axios from "axios";

const getRoomList = async (
  startDate: string,
  endDate: string,
  guestNum: number
) => {
  const GET_ROOM_LIST_URL = `https://api.anti-bias.kr/api/accommodations/1/rooms?start_date=${startDate}&end_date=${endDate}&guest_num=${guestNum}`;
  const response = await axios.get(GET_ROOM_LIST_URL);

  return response.data.data.rooms;
};

export default getRoomList;
