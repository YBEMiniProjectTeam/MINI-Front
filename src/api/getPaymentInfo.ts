import axios from "axios";
import { API_BASE_URL } from "@api/config.ts";

export const getPaymentInfo = async (
  cart_ids: number[],
  headers: { [key: string]: string }
) => {
  const API_URL = `${API_BASE_URL}/carts/orders/reservations`;
  const response = await axios.post(API_URL, { cart_ids }, { headers });
  console.log(response);
  return response.data.data;
};
