import { useSuspenseQuery } from "@tanstack/react-query";
import getReservations from "@api/reservations/getReservations";
import getPaymentDetails from "@api/reservations/getPaymentDetails";
import { GetReservationsProps } from "@pages/reservations/Reservations.types";
import { GetPaymentDetailsProps } from "@components/Reservations/ReservationList.types";

export const useReservationsQuery = ({ headers }: GetReservationsProps) => {
  return useSuspenseQuery({
    queryKey: ["reservations"],
    queryFn: () => getReservations({ headers })
  });
};

export const usePaymentDetailsQuery = (
  id: number,
  { headers }: GetPaymentDetailsProps
) => {
  return useSuspenseQuery({
    queryKey: ["paymentDetails"],
    queryFn: () => getPaymentDetails(id, { headers })
  });
};
