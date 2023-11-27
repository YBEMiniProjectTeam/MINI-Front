export interface Product {
    description: string;
    id: number;
    isWish: boolean;
    name: string;
    price: number;
    type: string;
    url: string;
}
  
export interface SearchListProps {
    keyword: string | null;
    category: string | null;
}