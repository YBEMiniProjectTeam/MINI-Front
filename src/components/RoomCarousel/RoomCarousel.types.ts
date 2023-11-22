export interface RoomCarouselTypes {
  images: Array<{ url: string }>;
  onClick?: (url: string) => void;
}

export interface ArrowProps {
  onClick?: React.MouseEventHandler;
  active: boolean;
}
