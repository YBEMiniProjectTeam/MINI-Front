import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

type PaymentData = {
  reservationData: { label: string; value: string }[];
  rawData: any;
};

export const usePayment = (orderId: string) => {
  return useSuspenseQuery<PaymentData>({
    queryKey: ["payment", orderId],
    queryFn: async () => {
      const response = await axios.get(`/api/orders/${orderId}`);
      return response.data;
    },
    select: (rawData) => {
      return {
        reservationData: encodeReservationData(rawData),
        rawData
      };
    }
  });
};

const encodeReservationData = (data: any) => {
  return [
    { label: "상품 금액", value: data.data.price },
    {
      label: "할인 금액",
      value: data.data.discount || 0
    }
  ];
};
