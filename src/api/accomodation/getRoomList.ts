import axios from "axios";

const getRoomList = async (
  startDate: string,
  endDate: string,
  guestNum: number
) => {
  const GET_ROOM_LIST_URL = `https://anti-bias.kr/api/accomodations/1/rooms?start_date=${startDate}&end_date=${endDate}&guest_num=${guestNum}`;
  // "https://anti-bias.kr/api/accomodations/1/rooms?start_date=2023-11-20&end_date=2023-11-22&guest_num=2";

  const response = await axios.get(GET_ROOM_LIST_URL);

  return response.data.data;
};

export default getRoomList;
