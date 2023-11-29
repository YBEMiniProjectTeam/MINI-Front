export interface RoomInfoProps {
  roomInfo?: {
    roomName?: string;
    checkInDate?: string;
    checkOutDate?: string;
    checkInTime?: string;
    checkOutTime?: string;
    price: number;
    check_in?: string;
    check_out?: string;
    capacity: number;
    capacityMax: number;
  };
}
