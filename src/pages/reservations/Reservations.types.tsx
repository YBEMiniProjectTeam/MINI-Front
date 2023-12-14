export interface DataType {
  accommodation_name: string;
  payment_status: string;
  room_info: {
    checkIn: string;
    checkOut: string;
    payAt: string;
    paymentId: number;
    roomName: string;
    thumbnail: string;
  };
}
