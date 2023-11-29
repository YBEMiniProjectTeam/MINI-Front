export interface ReservationInfoProps {
  children: React.ReactNode;
  roomInfo?: {
    checkInDate: string;
    checkOutDate: string;
    checkInTime: string;
    checkOutTime: string;
    price: number;
  };
}
