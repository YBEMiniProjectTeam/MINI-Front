import { getCompletedPaymentInfo } from "@api/getCompletedPaymentInfo.ts";
import { useSuspenseQuery } from "@tanstack/react-query";

export interface Reservation {
  reservation_name: string;
  accommodation_name: string;
  room_info: RoomInfo;
}

export interface RoomInfo {
  room_name: string;
  price: number;
  check_in: string;
  check_out: string;
  capacity: number;
  capacity_max: number;
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
      value: reservation.room_info.room_name
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
    return total + reservation.room_info.price;
  }, 0);

  return totalPrice;
};

const encodeReservationName = (reservations: Reservation[]): string => {
  const reservationName = reservations[0]?.reservation_name || "N/A";
  return reservationName;
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
