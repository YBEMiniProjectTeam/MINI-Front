import axios from "axios";
import { API_BASE_URL } from "@api/config.ts";

export const getUserInfo = async () => {
  const API_URL = `${API_BASE_URL}/member/info`;
  const response = await axios.get(API_URL);
  return response.data.data;
};
