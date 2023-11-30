import { useMutation } from "@tanstack/react-query";
import { postPayment, PaymentInfoProps, ResponseType } from "@api/postPayment";
import { useNavigate } from "react-router-dom";

export const useSendPaymentMutation = () => {
  const navigate = useNavigate();

  return useMutation<ResponseType, Error, PaymentInfoProps>({
    mutationFn: ({ cart_ids, reservation_name, headers }: PaymentInfoProps) =>
      postPayment({ cart_ids, reservation_name, headers }),

    onSuccess: (res, variables) => {
      console.log(res.status_code, res.message);
      const orderId = `orderId=${variables.cart_ids.length}`;
      navigate(`/reservationComplete?${orderId}`);
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
