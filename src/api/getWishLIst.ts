import axios from "axios";
import { API_BASE_URL } from "./config";

export const getWishList = async () => {
  const GET_WISH_LIST_URL = `${API_BASE_URL}/accommodations`;

  const response = await axios.get(GET_WISH_LIST_URL);

  return response.data.data.accomodations;
};
