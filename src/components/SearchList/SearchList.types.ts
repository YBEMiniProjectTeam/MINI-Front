export interface Accommodation {
  id: number;
  name: string;
  type: string;
  thumbnail: string;
  min_price: number;
  isWish: boolean;
}

import { Nullable } from "@/types/nullable";

export interface ApiResponse {
  status: string;
  data: {
    accomodations: Accommodation[];
    page_num: number;
    total_pages: number;
    page_size: number;
    total_results: number;
    first: boolean;
    last: boolean;
  };
}

export interface SearchListProps {
  keyword: Nullable<string>;
}

export interface SearchListResponse {
  statusCode: number;
  message: string;
}
