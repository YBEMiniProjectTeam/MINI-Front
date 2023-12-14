export interface ReservationListProps {
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
