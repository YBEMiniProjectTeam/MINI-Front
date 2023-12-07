import axios from "axios";
import { API_BASE_URL } from "./config";
import { SearchListResponse } from "@components/SearchList/SearchList.types";
import { Nullable } from "@/types/nullable";
import { AxiosRequestConfig } from "axios";

export const postWish = async (
  accommodationId: Nullable<number>,
  headers: AxiosRequestConfig['headers']
): Promise<SearchListResponse> => {
  const POST_LIKE_URL = `${API_BASE_URL}/accommodations/${accommodationId}/wish`;

  return await axios.post(POST_LIKE_URL, {}, { headers } );
};
