import axios from "axios";
import { API_BASE_URL } from "@api/config.ts";

export const getUserInfo = async (headers: { [key: string]: string }) => {
  const API_URL = `/api/member-info`;
  const response = await axios.get(API_URL, {
    headers: { "Content-Type": "application/json", ...headers }
  });
  return response.data.data;
};
