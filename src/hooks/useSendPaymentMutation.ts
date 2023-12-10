import { useMutation } from "@tanstack/react-query";
import type { ResponseType } from "@api/ApiResponse.types";
import { postPayment, PaymentInfoProps } from "@api/postPayment";
import { useNavigate } from "react-router-dom";

export const useSendPaymentMutation = () => {
  const navigate = useNavigate();

  return useMutation<ResponseType, Error, PaymentInfoProps>({
    mutationFn: ({ cart_ids, guest_name, guest_email }: PaymentInfoProps) =>
      postPayment({ cart_ids, guest_name, guest_email }),

    onSuccess: (res, variables) => {
      console.log(res);
      const orderId = `orderId=${variables.cart_ids.length}`;
      navigate(`/reservationComplete?${orderId}`);
    }
  });
};
