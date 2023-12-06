import axios from "axios";
import { API_BASE_URL } from "./config";

export const getSearchList = async (
  accomodationName: string | null,
  selectedDistrict: string | null,
  startDate: string | null,
  endDate: string | null,
  category: string | null,
  pageNum: number,
  pageSize: number,
  headers?: { [key: string]: string }
) => {
  const queryParams = new URLSearchParams({
    ...(accomodationName && { keyword: accomodationName }),
    ...(selectedDistrict && { district: selectedDistrict }),
    ...(startDate && { start_date: startDate }),
    ...(endDate && { end_date: endDate }),
    ...(category && { category: category }),
    page_num: String(pageNum),
    page_size: String(pageSize),
  });

  const url = `${API_BASE_URL}/accommodations?${queryParams.toString()}`;

  const response = await axios.get(url, { headers });

  return response.data.data;
};