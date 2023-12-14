interface RoomInfo {
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
  discount?: number;
  accommodationType?: string;
}

export interface Accommodation {
  accommodation_name: string;
  address: string;
  room_infos: RoomInfo[];
}
