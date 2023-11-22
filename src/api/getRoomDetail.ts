import axios from "axios";

export const getRoomDetail = async (roomId: string) => {
  const API_URL = `https://cca6d5da-811b-445f-8811-62cab12d0157.mock.pstmn.io/rooms/${roomId}`;
  const response = await axios.get(API_URL, {
    params: {
      date: "2023-11-21"
    }
  });
  return response.data.data;
};
