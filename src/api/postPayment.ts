import axios from "axios";
import { API_BASE_URL } from "@api/config.ts";

export interface PaymentInfoProps {
  headers: { [key: string]: string };
  cartIds: number[];
  reservationName: string;
}

export interface ResponseType {
  status_code: number;
  message: string;
  data: any[]; // FIXME: 데이터 타입 고치기
}

export const postPayment = async ({
  cartIds,
  reservationName,
  headers
}: PaymentInfoProps): Promise<ResponseType> => {
  const API_URL = `/api/carts/orders/payments`;
  const response = await axios.post(
    API_URL,
    { cartIds, reservationName },
    { headers }
  );
  return response.data;
};
