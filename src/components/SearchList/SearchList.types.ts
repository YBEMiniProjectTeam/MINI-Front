export interface Accommodation {
  id: number;
  name: string;
  type: string;
  thumbnail: string;
  min_price: number;
  isWish: boolean;
}
  
export interface SearchListProps {
    keyword: string | null;
    category: string | null;
}