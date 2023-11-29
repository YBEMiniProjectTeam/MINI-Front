import axios from "axios";
import { API_BASE_URL } from "../config";

export const ShoppingCartApi = async (accessToken: string) => {
  const API_URL = `${API_BASE_URL}/carts`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`
  };
  const response = await axios.get(API_URL, { headers });

  return response;
};
export const QuantityCartApi = async (
  accessToken: string,
  sign: string,
  cartId: number
) => {
  const API_URL = `${API_BASE_URL}/${sign}`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`
  };

  const response = await axios.put(API_URL, { cartIds: cartId }, { headers });

  return response;
};
export const DeleteCartApi = async (accessToken: string, cartId: number[]) => {
  const API_URL = `${API_BASE_URL}/carts`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`
  };

  const response = await axios.delete(API_URL, {
    headers,
    data: { cartIds: cartId }
  });

  return response;
};
export const ReservationApi = async (accessToken: string, cartId: number[]) => {
  const API_URL = `${API_BASE_URL}/carts`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`
  };

  const response = await axios.post(API_URL, { cartIds: cartId }, { headers });

  return response;
};
