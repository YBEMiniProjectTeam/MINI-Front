import axios from "axios";
import { API_BASE_URL } from "./config";

export const getWishList = async (
  pageNum: number,
  pageSize: number
) => {
  const GET_WISH_LIST_URL = `${API_BASE_URL}/accommodations?page_num=${pageNum}&page_size=${pageSize}`;

  const response = await axios.get(GET_WISH_LIST_URL);

  return response.data.data.accomodations;
};
