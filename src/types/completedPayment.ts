import { Nullable } from "./nullable";

export interface RoomInfo {
  quantity: number;
  accommodationThumbnailUrl: Nullable<string>;
  roomName: string;
  price: number;
  checkOutDate: string;
  checkInDate: string;
  checkInTime: string;
  checkOutTime: string;
  capacity: number;
  capacityMax: number;
  accommodationType: string;
}

export interface Reservation {
  reservation_user_name: Nullable<string>;
  reservation_user_email: Nullable<string>;
  guest_name: string;
  accommodation_name: string;
  accommodation_type: string;
  accommodation_thumbnail_url: string;
  room_info: RoomInfo;
}
