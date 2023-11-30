import { getCompletedPaymentInfo } from "@api/getCompletedPaymentInfo.ts";
import { useSuspenseQuery } from "@tanstack/react-query";

export interface Reservation {
  reservation_user_name?: string;
  reservation_user_email?: string;
  guest_name: string;
  accommodation_name: string;
  accommodation_type: string;
  room_info: RoomInfo;
  accommodation_thumbnail_url: string;
}

export interface RoomInfo {
  quantity: number;
  accommodationThumbnailUrl?: string;
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

export interface ReservationData {
  key: "label" | "price";
  label: string;
  value: string | number;
}

interface CompletePaymentResponse {
  reservationData: ReservationData[][];
  reservationName: string;
  totalPrice: number;
  rawData: Reservation[];
}

const encodeReservationData = (
  reservations: Reservation[]
): ReservationData[][] => {
  return reservations.map((reservation) => [
    {
      key: "label",
      label: "숙소",
      value: reservation.accommodation_name
    },
    {
      key: "label",
      label: "객실",
      value: `${reservation.room_info.roomName} ${reservation.room_info.quantity}개`
    },
    {
      key: "price",
      label: "결제 금액",
      value: reservation.room_info.price
    }
  ]);
};
const encodeTotalPrice = (reservations: Reservation[]) => {
  const totalPrice = reservations.reduce((total, reservation) => {
    return total + reservation.room_info.price * reservation.room_info.quantity;
  }, 0);

  return totalPrice;
};

const encodeReservationName = (reservations: Reservation[]): string => {
  const reservationName =
    reservations[0].guest_name || reservations[0].reservation_user_name;
  return reservationName!;
};

export const useCompletedPayment = (
  count: number,
  headers: { [key: string]: string }
) => {
  return useSuspenseQuery<Reservation[], Error, CompletePaymentResponse>({
    queryKey: ["completedPayment"],
    queryFn: async () => await getCompletedPaymentInfo({ count, headers }),
    select: (reservations: Reservation[]): CompletePaymentResponse => {
      return {
        reservationData: encodeReservationData(reservations),
        totalPrice: encodeTotalPrice(reservations),
        reservationName: encodeReservationName(reservations),
        rawData: reservations
      };
    }
  });
};
