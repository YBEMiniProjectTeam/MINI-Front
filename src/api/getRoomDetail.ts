import axios from "axios";
import { API_BASE_URL } from "@api/config.ts";

export const getRoomDetail = async (roomId: string) => {
  const API_URL = `${API_BASE_URL}/rooms/${roomId}`;
  const response = await axios.get(API_URL, {
    params: {
      date: "2023-11-21"
    }
  });
  return response.data.data;
};
