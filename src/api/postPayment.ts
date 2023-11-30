import axios from "axios";
import { API_BASE_URL } from "@api/config";

export interface PaymentInfoProps {
  headers: { [key: string]: string };
  cart_ids: number[];
  reservation_name: string;
}

export interface ResponseType {
  status_code: number;
  message: string;
  data: any[]; // FIXME: 데이터 타입 고치기
}

export const postPayment = async ({
  cart_ids,
  reservation_name,
  headers
}: PaymentInfoProps): Promise<ResponseType> => {
  const API_URL = `${API_BASE_URL}/carts/orders/payments`;
  const response = await axios.post(
    API_URL,
    { cart_ids, reservation_name },
    { headers }
  );
  return response.data;
};
