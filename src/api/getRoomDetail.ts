import axios from "axios";

export const getRoomDetail = async (roomId: string) => {
  try {
    const API_URL = `https://cca6d5da-811b-445f-8811-62cab12d0157.mock.pstmn.io/rooms/${roomId}`;

    const response = await axios.get(API_URL, {
      params: {
        date: "2023-11-21"
      }
    });
    return response.data.data;
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    throw error;
  }
};
