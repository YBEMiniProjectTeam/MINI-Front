import { Nullable } from "@/types/nullable";
import axiosInstance from "@api/axiosInstance";

export const getSearchList = async (
  accommodationName: Nullable<string>,
  selectedDistrict: Nullable<string>,
  startDate: Nullable<string>,
  endDate: Nullable<string>,
  category: Nullable<string>,
  pageNum: number,
  pageSize: number
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

  const getSearchListURL = `/accommodations?${queryParams.toString()}`;

  const response = await axiosInstance.get(getSearchListURL);

  return response.data.data;
};
