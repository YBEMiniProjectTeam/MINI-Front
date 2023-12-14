import { useSuspenseQuery } from "@tanstack/react-query";
import { ShoppingCartApi } from "@api/shoppingCart/shoppingCartApi";

export const useShoppingCartList = () => {
  return useSuspenseQuery({
    queryKey: ["shoppingCartList"],
    queryFn: () => ShoppingCartApi()
  });
};
