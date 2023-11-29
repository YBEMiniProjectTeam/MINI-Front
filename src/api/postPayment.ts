import axios from "axios";
import { API_BASE_URL } from "@api/config.ts";

export interface PaymentInfoProps {
  headers: { [key: string]: string };
  cartIds: number[];
  reservationName: string;
}

export interface ResponseType {
  statusCode: number;
  message: string;
}

export const postPayment = async ({
  cartIds,
  reservationName,
  headers
}: PaymentInfoProps): Promise<ResponseType> => {
  const API_URL = `/api/carts/orders/payments`;
  return await axios.post(API_URL, { cartIds, reservationName }, { headers });
};
