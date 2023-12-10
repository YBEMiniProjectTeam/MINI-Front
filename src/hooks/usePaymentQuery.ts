import { useSuspenseQuery } from "@tanstack/react-query";
import { getPaymentInfo } from "@api/getPaymentInfo";
import type { Accommodation } from "@/types/paymet";

interface PaymentResponse {
  reservationData: PaymentData[][];
  rawData: Accommodation[];
}

interface PaymentData {
  key: "label" | "total";
  label: string;
  value: number;
}

const calculateTotal = (
  data: Accommodation[]
): { totalPrice: number; totalDiscount: number } => {
  return data.reduce(
    ({ totalPrice, totalDiscount }, accommodation) => {
      accommodation.room_infos.forEach((roomInfo) => {
        totalPrice += roomInfo.price * roomInfo.quantity;
      });
      return { totalPrice, totalDiscount };
    },
    { totalPrice: 0, totalDiscount: 0 }
  );
};

const encodeData = (data: Accommodation[]): PaymentData[][] => {
  const { totalPrice, totalDiscount } = calculateTotal(data);

  return [
    [
      { key: "label", label: "총 상품 금액", value: totalPrice },
      { key: "label", label: "총 할인 금액", value: totalDiscount },
      { key: "total", label: "총 결제 금액", value: totalPrice }
    ]
  ];
};

export const usePayment = (cartIds: number[]) => {
  return useSuspenseQuery<Accommodation[], Error, PaymentResponse>({
    queryKey: ["payment", cartIds],
    queryFn: async () => await getPaymentInfo(cartIds),
    select: (accommodations: Accommodation[]): PaymentResponse => {
      return {
        reservationData: encodeData(accommodations),
        rawData: accommodations
      };
    }
  });
};
