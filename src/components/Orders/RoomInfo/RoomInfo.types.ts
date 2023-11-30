export interface RoomInfoProps {
  roomInfo: {
    roomName: string;
    checkOutDate?: string;
    checkInDate?: string;
    checkInTime?: string;
    checkOutTime?: string;
    checkIn?: string;
    checkOut?: string;
    price: number;
    capacity: number;
    capacityMax: number;
    quantity: number;
  };
}
