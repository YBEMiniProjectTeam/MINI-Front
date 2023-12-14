import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteCartApi } from "@api/shoppingCart/shoppingCartApi";

interface Delete {
  statusCode: number;
  message: string;
  successful?: boolean;
}

interface props {
  cart_ids: number[];
}

export const useDeleteCart = () => {
  const queryClient = useQueryClient();
  return useMutation<Delete, Error, props>({
    mutationFn: ({ cart_ids }: props) => DeleteCartApi({ cart_ids }),
    onSuccess: (res) => {
      console.log(res.statusCode, res.message);
      queryClient.invalidateQueries({ queryKey: ["shoppingCartList"] });
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
