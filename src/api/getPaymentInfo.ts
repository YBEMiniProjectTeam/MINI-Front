import axios from "axios";
import { API_BASE_URL } from "@api/config.ts";

export const getPaymentInfo = async (
  cartIds: number[],
  headers: { [key: string]: string }
) => {
  const API_URL = `/api/carts/orders/reservations`;
  const response = await axios.post(API_URL, { cartIds }, { headers });
  return response.data.data;
};
