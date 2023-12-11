import { useMutation } from "@tanstack/react-query";
import postCart from "@api/accomodation/postCart";
import {
  ResponseType,
  PostCartProps
} from "@components/ProductDetail/ChooseRoom/ChooseRoom.types";

export const usePostCart = () => {
  return useMutation<ResponseType, Error, PostCartProps>({
    mutationFn: ({ body, headers }: PostCartProps) =>
      postCart({ body, headers }),
    onSuccess: (res) => {
      console.log(res.statusCode, res.message);
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
