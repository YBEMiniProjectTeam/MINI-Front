import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import type { ResponseType } from "@api/ApiResponse.types";
import { postPayment, PaymentInfoProps } from "@api/postPayment";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const useSendPaymentMutation = () => {
  const navigate = useNavigate();

  const handleUnexpectedStatusCode = (statusCode: number) => {
    if (statusCode === 400) {
      toast.error("재고가 부족합니다. 결제 요청이 실패했습니다.");
    }
    navigate(-1);
  };

  return useMutation<ResponseType, Error, PaymentInfoProps>({
    mutationFn: ({ cart_ids, guest_name, guest_email }: PaymentInfoProps) =>
      postPayment({ cart_ids, guest_name, guest_email }),

    onSuccess: (res, variables) => {
      if (res.statusCode && res.statusCode !== 200) {
        handleUnexpectedStatusCode(res.statusCode);
        return;
      }
      const orderId = `orderId=${variables.cart_ids.length}`;
      navigate(`/reservationComplete?${orderId}`);
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        const statusCode = err.response?.status;
        handleUnexpectedStatusCode(statusCode!);
      } else {
        throw err;
      }
    }
  });
};
