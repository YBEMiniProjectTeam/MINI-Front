import { useMutation } from "@tanstack/react-query";
import { postPayment, PaymentInfoProps, ResponseType } from "@api/postPayment";

export const useSendPaymentMutation = () => {
  return useMutation<ResponseType, Error, PaymentInfoProps>({
    mutationFn: ({ cartIds, reservationName, headers }: PaymentInfoProps) =>
      postPayment({ cartIds, reservationName, headers }),
    // FIXME: 상태코드 받아오기
    onSuccess: (res) => {
      console.log(res.statusCode, res.message);
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
