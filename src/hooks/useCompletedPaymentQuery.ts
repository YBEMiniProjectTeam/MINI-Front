import { getCompletedPaymentInfo } from "@api/getCompletedPaymentInfo";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { Reservation } from "@/types/api/completedPayment";

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
      value: reservation.room_info.price * reservation.room_info.quantity
    }
  ]);
};

const encodeTotalPrice = (reservations: Reservation[]): number => {
  return reservations.reduce((total, reservation) => {
    return total + reservation.room_info.price * reservation.room_info.quantity;
  }, 0);
};

const encodeReservationName = (reservations: Reservation[]): string => {
  return (reservations[0].guest_name ||
    reservations[0].reservation_user_name) as string;
};

export const useCompletedPayment = (count: number) => {
  return useSuspenseQuery<Reservation[], Error, CompletePaymentResponse>({
    queryKey: ["completedPayment"],
    queryFn: async () => await getCompletedPaymentInfo(count),
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
