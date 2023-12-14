import { getCompletedPaymentInfo } from "@api/getCompletedPaymentInfo";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { Reservation, RoomInfo } from "@/types/api/completedPayment";

export interface ReservationData {
  key: "label" | "price";
  label: string;
  value: string | number;
}

interface ExtendedRoomInfo extends RoomInfo {
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
}

interface ExtendedReservation extends Reservation {
  room_info: ExtendedRoomInfo;
}

interface CompletePaymentResponse {
  reservationData: ReservationData[][];
  reservationName: string;
  totalPrice: number;
  rawData: ExtendedReservation[];
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

const encodeData = (reservations: Reservation[]) => {
  return reservations.map((reservation) => {
    const checkInDate = reservation.room_info.checkIn?.split(" ")[0];
    const checkInTime = reservation.room_info.checkIn?.split(" ")[1];
    const checkOutDate = reservation.room_info.checkOut?.split(" ")[0];
    const checkOutTime = reservation.room_info.checkOut?.split(" ")[1];

    return {
      ...reservation,
      room_info: {
        ...reservation.room_info,
        checkInDate,
        checkInTime,
        checkOutDate,
        checkOutTime
      }
    };
  });
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
        rawData: encodeData(reservations)
      };
    }
  });
};
