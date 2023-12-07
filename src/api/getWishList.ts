import axios from "axios";
import { API_BASE_URL } from "./config";
import { AxiosRequestConfig } from "axios";

export const getWishList = async (
  headers: AxiosRequestConfig['headers']
) => {
  const GET_WISH_LIST_URL = `${API_BASE_URL}/wishes`;

  const response = await axios.get(GET_WISH_LIST_URL, { headers });

  return response.data.data;
};
