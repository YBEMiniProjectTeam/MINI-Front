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
  accommodationName: string;
  address: string;
  roomInfos: RoomInfo[];
}

interface PaymentResponse {
  reservationData: { label: string; value: number }[];
  rawData: Accommodation[];
}

const encodeReservationData = (
  data: Accommodation[]
): { label: string; value: number }[] => {
  let totalPrice = 0;
  let totalDiscount = 0;

  data.forEach((accommodation) => {
    accommodation.roomInfos.forEach((roomInfo) => {
      totalPrice += roomInfo.price;
      totalDiscount += roomInfo.discount || 0;
    });
  });

  return [
    { label: "총 상품 금액", value: totalPrice },
    { label: "총 할인 금액", value: totalDiscount }
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
        reservationData: encodeReservationData(accommodations),
        rawData: accommodations
      };
    }
  });
};
