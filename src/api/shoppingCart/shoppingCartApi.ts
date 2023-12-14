import axiosInstance from "@api/axiosInstance";

export const ShoppingCartApi = async () => {
  const API_URL = `/carts`;

  const response = await axiosInstance.get(API_URL);

  return response.data;
};

interface quantityReturnType {
  statusCode: number;
  message: string;
  successful?: boolean;
}
export const QuantityCartApi = async ({
  sign,
  cart_ids
}: {
  sign: string;
  cart_ids: number;
}): Promise<quantityReturnType> => {
  const API_URL = `/carts/${sign}`;

  const response = await axiosInstance.put(API_URL, { cart_id: cart_ids });

  return response.data;
};

interface deleteReturnType {
  statusCode: number;
  message: string;
  successful?: boolean;
}

export const DeleteCartApi = async ({
  cart_ids
}: {
  cart_ids: number[];
}): Promise<deleteReturnType> => {
  const API_URL = `/carts`;

  const response = await axiosInstance.delete(API_URL, {
    data: { cart_ids: cart_ids }
  });

  return response.data;
};
