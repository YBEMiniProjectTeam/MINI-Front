import { getCompletedPayment } from "@api/getCompletedPayment.ts";
import { useSuspenseQuery } from "@tanstack/react-query";

type CompletePaymentData = {
  reservationData: { label: string; value: string }[];
  rawData: any;
};

export const useCompletedPayment = (
  cartIds: number[],
  reservationName: string,
  headers: { [key: string]: string }
) => {
  return useSuspenseQuery<CompletePaymentData>({
    queryKey: ["completedPayment"],
    queryFn: async () =>
      await getCompletedPayment({ cartIds, reservationName, headers }),
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
