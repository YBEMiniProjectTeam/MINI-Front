export interface GridItemProps {
  imageUrl: string;
  summary: string;
  name: string;
  price: string;
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