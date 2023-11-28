import axios from "axios";
import { API_BASE_URL } from "./config";

export const getSearchList = async (
  accomodationName: string | null,
  selectedDistrict: string | null,
  startDate: string | null,
  endDate: string | null,
  category: string | null,
  pageNum: number,
  pageSize: number
) => {
  console.log("pageNum", pageNum);

  const GET_SEARCH_LIST_URL = `${API_BASE_URL}/accommodations?keyword=${accomodationName}&district=${selectedDistrict}&start_date=${startDate}&end_date=${endDate}&category=${category}&page_num=${pageNum}&page_size=${pageSize}`;

  const response = await axios.get(GET_SEARCH_LIST_URL);

  return response.data.data;
};
