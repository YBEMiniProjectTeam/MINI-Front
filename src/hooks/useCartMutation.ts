import { useMutation } from "@tanstack/react-query";
import postCart from "@api/accomodation/postCart";
import {
  ResponseType,
  PostCartProps
} from "@components/ProductDetail/ChooseRoom/ChooseRoom.types";
import { toast } from "react-hot-toast";

export const usePostCart = () => {
  return useMutation<ResponseType, Error, PostCartProps>({
    mutationFn: ({ body }: PostCartProps) => postCart({ body }),
    onSuccess: () => {
      toast.success("장바구니에 추가되었습니다.");
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
