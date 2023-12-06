import axios from "axios";
import { API_BASE_URL } from "./config";
import { SearchListResponse } from "@components/SearchList/SearchList.types";

export const postWish = async (
  accommodationId: number | null,
  headers: { [key: string]: string }
): Promise<SearchListResponse> => {
  const POST_LIKE_URL = `${API_BASE_URL}/accommodations/${accommodationId}/wish`;

  console.log(headers);

  return await axios.post(POST_LIKE_URL, {}, { headers } );
};
