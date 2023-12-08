import axios from "axios";
import { API_BASE_URL } from "@api/config";

export const getMemberInfo = async (accessToken: string) => {
  const API_URL = `${API_BASE_URL}/member-info`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`
  };
  const response = await axios.get(API_URL, { headers });

  return response.data;
};
