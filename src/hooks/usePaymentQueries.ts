import { getUserInfo } from "@api/getUserInfo.ts";
import { useSuspenseQueries } from "@tanstack/react-query";
import { getPaymentInfo } from "@api/getPaymentInfo";
import type { Accommodation } from "@/types/api/paymet";

interface PaymentResponse {
  totalPrice: number;
  rawData: Accommodation[];
}

const encodeTotalPrice = (data: Accommodation[]): number => {
  return data.reduce((total, accommodation) => {
    const totalPrice = accommodation.room_infos.reduce(
      (roomTotal, roomInfo) => {
        return roomTotal + roomInfo.price * roomInfo.quantity;
      },
      0
    );

    return total + totalPrice;
  }, 0);
};

export const usePaymentQueries = (cartIds: number[]) => {
  return useSuspenseQueries({
    queries: [
      {
        queryKey: ["payment", cartIds],
        queryFn: async () => await getPaymentInfo(cartIds),
        select: (accommodations: Accommodation[]): PaymentResponse => {
          return {
            totalPrice: encodeTotalPrice(accommodations),
            rawData: accommodations
          };
        }
      },
      {
        queryKey: ["userInfo"],
        queryFn: () => getUserInfo()
      }
    ]
  });
};
