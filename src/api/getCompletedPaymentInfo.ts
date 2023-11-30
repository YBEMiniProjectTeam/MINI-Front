import axios from "axios";
import { API_BASE_URL } from "@api/config.ts";

export interface PaymentInfoProps {
  headers: { [key: string]: string };
  count: number;
}

export const getCompletedPaymentInfo = async ({
  count,
  headers
}: PaymentInfoProps) => {
  const API_URL = `/api/carts/orders/complete?count=${count}`;
  const response = await axios.get(API_URL, { headers });
  return response.data.data;
};
