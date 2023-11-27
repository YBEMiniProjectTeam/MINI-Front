export interface GridItemProps {
  imageUrl: string;
  summary: string;
  name: string;
  price: number;
}

export type Accommodation = {
  id: number;
  name: string;
  region: string;
  type: string;
  thumbnail: string;
  min_price: number;
  isWish: boolean;
};