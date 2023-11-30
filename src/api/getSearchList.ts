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
  headers: { [key: string]: string }
) => {

  let url = `${API_BASE_URL}/accommodations?`;

  if (accomodationName)
    url += `keyword=${accomodationName}&`;
  if (selectedDistrict)
    url += `district=${selectedDistrict}&`;
  if (startDate)
    url += `start_date=${startDate}&`;
  if (endDate)
    url += `end_date=${endDate}&`;
  if (category)
    url += `category=${category}&`;

  url += `page_num=${pageNum}&page_size=${pageSize}`;

  console.log(headers);

  const response = await axios.get(url, { headers });

  console.log(response.data.data);

  return response.data.data;
};