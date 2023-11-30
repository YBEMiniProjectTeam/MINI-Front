import axios from "axios";
import { API_BASE_URL } from "./config";
import { ResponseType } from "@components/SearchList/SearchList.types";

export const deleteWish = async (
  accommodationId: number | null,
  headers: { [key: string]: string }
): Promise<ResponseType> => {
  const POST_LIKE_URL = `${API_BASE_URL}/accommodations/${accommodationId}/wish`;

  return await axios.delete(POST_LIKE_URL, { 
    headers,
    data: {}
  });
};
