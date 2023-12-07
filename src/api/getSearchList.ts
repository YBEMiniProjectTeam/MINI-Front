import axios from "axios";
import { API_BASE_URL } from "./config";
import { Nullable } from "@/types/nullable";
import { AxiosRequestConfig } from "axios";

export const getSearchList = async (
  accommodationName: Nullable<string>,
  selectedDistrict: Nullable<string>,
  startDate: Nullable<string>,
  endDate: Nullable<string>,
  category: Nullable<string>,
  pageNum: number,
  pageSize: number,
  headers?: AxiosRequestConfig["headers"]
) => {
  const queryParams = new URLSearchParams({
    ...(accommodationName && { keyword: accommodationName }),
    ...(selectedDistrict && { district: selectedDistrict }),
    ...(startDate && { start_date: startDate }),
    ...(endDate && { end_date: endDate }),
    ...(category && { category: category }),
    page_num: String(pageNum),
    page_size: String(pageSize)
  });

  const url = `${API_BASE_URL}/accommodations?${queryParams.toString()}`;

  const response = await axios.get(url, { headers });

  return response.data.data;
};
