import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import postPayment from "@api/accomodation/postPayment";
import {
  ResponseType,
  PostPaymentProps
} from "@components/ProductDetail/ChooseRoom/ChooseRoom.types";

export const usePostPayment = () => {
  const navigate = useNavigate();

  return useMutation<ResponseType, Error, PostPaymentProps>({
    mutationFn: ({ body }: PostPaymentProps) => postPayment({ body }),
    onSuccess: (res) => {
      const cartId = res?.data.data[0].room_infos[0].cartId;
      navigate(`/orders?cartId=${cartId}`);
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
