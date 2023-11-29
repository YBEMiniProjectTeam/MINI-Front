import axios from "axios";
import { API_BASE_URL } from "@api/config.ts";

interface PaymentInfoProps {
  cartIds: number[];
  reservationName: string;
  headers: { [key: string]: string };
}

export const getCompletedPayment = async ({
  cartIds,
  reservationName,
  headers
}: PaymentInfoProps) => {
  const API_URL = `/api/carts/orders/payments`;
  const response = await axios.post(
    API_URL,
    { cartIds, reservationName },
    { headers }
  );
  return response.data.data;
};
