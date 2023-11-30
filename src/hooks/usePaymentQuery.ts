import { useSuspenseQuery } from "@tanstack/react-query";
import { getPaymentInfo } from "@api/getPaymentInfo";

interface RoomInfo {
  cartId: number;
  quantity: number;
  roomName: string;
  accommodationThumbnailUrl: string;
  price: number;
  checkInDate: string;
  checkOutDate: string;
  checkInTime: string;
  checkOutTime: string;
  capacity: number;
  capacityMax: number;
  discount?: number;
}

interface Accommodation {
  accommodation_name: string;
  address: string;
  room_infos: RoomInfo[];
}

interface PaymentResponse {
  reservationData: PaymentData[][];
  rawData: Accommodation[];
}

export interface PaymentData {
  key: "label" | "total";
  label: string;
  value: number;
}

const encodeData = (data: Accommodation[]): PaymentData[][] => {
  let totalPrice = 0;
  let totalDiscount = 0;

  data.forEach((accommodation) => {
    accommodation.room_infos.forEach((roomInfo) => {
      totalPrice += roomInfo.price * roomInfo.quantity;
      totalDiscount += roomInfo.discount || 0;
    });
  });

  return [
    [
      { key: "label", label: "총 상품 금액", value: totalPrice },
      { key: "label", label: "총 할인 금액", value: totalDiscount },
      { key: "total", label: "총 결제 금액", value: totalPrice }
    ]
  ];
};

export const usePayment = (
  cartIds: number[],
  headers: { [key: string]: string }
) => {
  return useSuspenseQuery<
    Accommodation[],
    Error,
    PaymentResponse,
    [string, number[]]
  >({
    queryKey: ["payment", cartIds],
    queryFn: async () => await getPaymentInfo(cartIds, headers),
    select: (accommodations: Accommodation[]): PaymentResponse => {
      return {
        reservationData: encodeData(accommodations),
        rawData: accommodations
      };
    }
  });
};
