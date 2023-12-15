import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteCartApi } from "@api/shoppingCart/shoppingCartApi";
import toast from "react-hot-toast";

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
    onSuccess: () => {
      toast.success("삭제가 정상적으로 처리되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["shoppingCartList"] });
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
