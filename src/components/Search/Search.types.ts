import { Nullable } from "@/types/nullable";

export interface SearchProps {
  keyword: Nullable<string>;
  category: Nullable<string>;
  region: Nullable<string>;
}
