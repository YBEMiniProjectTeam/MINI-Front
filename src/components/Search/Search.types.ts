import { Nullable } from "@/types/nullable";

export interface SearchProps {
  keyword: Nullable<string>;
  district: Nullable<string>;
  start_date: Nullable<string>;
  end_date: Nullable<string>;
  category: Nullable<string>;
}
