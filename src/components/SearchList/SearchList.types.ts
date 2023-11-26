export interface Accommodation {
  description: string;
  id: number;
  isWish: boolean;
  name: string;
  price: number;
  type: string;
  url: string;
}

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
  keyword: string | null;
  category: string | null;
  startDate: string | null;
  endDate: string | null;
}
