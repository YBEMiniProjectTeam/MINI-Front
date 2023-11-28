export interface RoomInfo {
  cartId: number;
  quantity: number;
  address: string;
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
  accommodationName: string;
  roomInfos: RoomInfo[];
}
export interface CartListProps {
  data: Accommodation;
  isCheckAllBox: boolean;

  setData: React.Dispatch<React.SetStateAction<Accommodation[]>>;
  cartIdList: number[];

  handleCheckRoom: (cartId: number) => void;
  handleClickRoomDelete: (CartId: number) => void;
  handleClickQuantity: (sign: string, cartId: number) => Promise<void>;
}