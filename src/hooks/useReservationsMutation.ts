import { useSuspenseQuery, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import getReservations from "@api/reservations/getReservations";
import getPaymentDetails from "@api/reservations/getPaymentDetails";
import deleteReservation from "@api/reservations/deleteReservation";
import { ResponseType } from "@pages/reservationDetails/reservationDetails.types";
import { GetReservationsProps } from "@pages/reservations/Reservations.types";
import { GetPaymentDetailsProps } from "@components/Reservations/ReservationList.types";
import { DeleteReservationProps } from "@pages/reservationDetails/reservationDetails.types";

export const useGetReservations = ({ headers }: GetReservationsProps) => {
  return useSuspenseQuery({
    queryKey: ["reservations"],
    queryFn: () => getReservations({ headers })
  });
};

export const useGetPaymentDetails = (
  id: number,
  { headers }: GetPaymentDetailsProps
) => {
  return useSuspenseQuery({
    queryKey: ["paymentDetails"],
    queryFn: () => getPaymentDetails(id, { headers })
  });
};

export const useDeleteReservation = () => {
  const navigate = useNavigate();

  return useMutation<ResponseType, Error, DeleteReservationProps>({
    mutationFn: ({ id }: DeleteReservationProps) => deleteReservation(id),
    onSuccess: () => {
      console.log("삭제된거임?");
      navigate(`/reservations`);
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
