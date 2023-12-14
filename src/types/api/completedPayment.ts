export interface RoomInfo {
  quantity: number;
  roomName: string;
  price: number;
  checkIn: string;
  checkOut: string;
  capacity: number;
  capacityMax: number;
}

export interface Reservation {
  reservation_user_name: string;
  reservation_user_email: string;
  guest_name: string;
  guest_email: string;
  accommodation_name: string;
  accommodation_type: string;
  accommodation_thumbnail_url: string;
  room_info: RoomInfo;
}
