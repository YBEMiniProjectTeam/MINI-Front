import { useMutation } from "@tanstack/react-query";
import { postPayment, PaymentInfoProps, ResponseType } from "@api/postPayment";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useSendPaymentMutation = () => {
  const navigate = useNavigate();

  return useMutation<ResponseType, Error, PaymentInfoProps>({
    mutationFn: ({
      cart_ids,
      guest_name,
      guest_email,
      headers
    }: PaymentInfoProps) =>
      postPayment({ cart_ids, guest_name, guest_email, headers }),

    onSuccess: (res, variables) => {
      console.log(res);
      const orderId = `orderId=${variables.cart_ids.length}`;
      navigate(`/reservationComplete?${orderId}`);
    },
    onError: (err) => {
      console.log(err);
      toast.error("유효하지 않은 요청입니다.");
    }
  });
};
