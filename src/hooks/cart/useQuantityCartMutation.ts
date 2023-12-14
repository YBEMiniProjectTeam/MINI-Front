import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QuantityCartApi } from "@api/shoppingCart/shoppingCartApi";

interface Quantity {
  statusCode: number;
  message: string;
  successful?: boolean;
}

interface props {
  sign: string;
  cart_ids: number;
}

export const useQuantityCart = () => {
  const queryClient = useQueryClient();
  return useMutation<Quantity, Error, props>({
    mutationFn: ({ sign, cart_ids }: props) =>
      QuantityCartApi({ sign, cart_ids }),
    onSuccess: (res) => {
      console.log(res);
      queryClient.invalidateQueries({ queryKey: ["shoppingCartList"] });
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
