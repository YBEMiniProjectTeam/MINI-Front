import { useSuspenseQuery } from "@tanstack/react-query";
import { ShoppingCartApi } from "@api/shoppingCart/shoppingCartApi";

export const useShoppingCartList = (accessToken: string) => {
  return useSuspenseQuery({
    queryKey: ["shoppingCartList"],
    queryFn: () => ShoppingCartApi(accessToken)
  });
};
