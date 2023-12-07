import axios from "axios";
import { API_BASE_URL } from "../config";

export const ShoppingCartApi = async (accessToken: string) => {
  const API_URL = `${API_BASE_URL}/carts`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`
  };
  if (!accessToken) {
    return;
  }
  const response = await axios.get(API_URL, { headers });

  return response.data;
};

interface quantityReturnType {
  statusCode: number;
  message: string;
  successful?: boolean;
}
export const QuantityCartApi = async ({
  accessToken,
  sign,
  cart_ids
}: {
  accessToken: string;
  sign: string;
  cart_ids: number;
}): Promise<quantityReturnType> => {
  const API_URL = `${API_BASE_URL}/carts/${sign}`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`
  };

  const response = await axios.put(API_URL, { cart_id: cart_ids }, { headers });

  return response.data;
};

interface deleteReturnType {
  statusCode: number;
  message: string;
  successful?: boolean;
}

export const DeleteCartApi = async ({
  accessToken,
  cart_ids
}: {
  accessToken: string;
  cart_ids: number[];
}): Promise<deleteReturnType> => {
  const API_URL = `${API_BASE_URL}/carts`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`
  };

  const response = await axios.delete(API_URL, {
    headers,
    data: { cart_ids: cart_ids }
  });

  return response.data;
};
