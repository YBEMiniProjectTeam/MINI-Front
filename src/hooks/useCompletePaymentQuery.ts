import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type CompletePaymentData = {
  reservationData: { label: string; value: string }[];
  rawData: any;
};

export const useCompletePayment = () => {
  return useQuery<CompletePaymentData>({
    queryKey: ["completePayment"],
    queryFn: async () => {
      const response = await axios.get(`/api/orders/1/complete`);
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
    { label: "숙소", value: data.data.product.hotel },
    {
      label: "객실",
      value: data.data.product.room
    }
  ];
};
