export interface RoomInfo {
  cartId: number;
  quantity: number;

  roomName: string;
  accommodationThumbnailUrl: string;
  price: number;
  checkInDate: string;
  checkOutDate: string;
  checkInTime: string;
  checkOutTime: string;
  capacity: number;
  capacityMax: number;
  isChecked?: boolean;
}

export interface Accommodation {
  accommodation_name: string;
  address: string;
  room_infos: RoomInfo[];
}
export interface CartListProps {
  data: Accommodation;
  isCheckAllBox: boolean;

  cartIdList: number[];

  handleCheckRoom: (cartId: number) => void;
  handleClickRoomDelete: (CartId: number) => void;
  handleClickQuantity: (
    sign: "increase" | "decrease",
    cartId: number
  ) => Promise<void>;
  handleDragStart: (cartId: number) => void;
  handleDragEnd: () => void;
}
