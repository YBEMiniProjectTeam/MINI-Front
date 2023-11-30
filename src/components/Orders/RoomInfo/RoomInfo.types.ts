export interface RoomInfoProps {
  roomInfo: {
    roomName: string;
    checkInDate: string;
    checkOutDate: string;
    checkInTime: string;
    checkOutTime: string;
    price: number;
    capacity: number;
    capacityMax: number;
  };
}
