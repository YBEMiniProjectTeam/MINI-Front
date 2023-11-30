import axios from "axios";
import { API_BASE_URL } from "@api/config";

export interface PaymentInfoProps {
  headers: { [key: string]: string };
  cart_ids: number[];
  guest_name: string;
  guest_email: string;
}

export interface ResponseType {
  status_code: number;
  message: string;
  data: any[];
}

export const postPayment = async ({
  cart_ids,
  guest_name,
  guest_email,
  headers
}: PaymentInfoProps): Promise<ResponseType> => {
  const API_URL = `${API_BASE_URL}/carts/orders/payments`;
  const response = await axios.post(
    API_URL,
    { cart_ids, guest_name, guest_email },
    { headers }
  );
  return response.data;
};
