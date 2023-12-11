import axiosInstance from "@api/axiosInstance";
import type { ResponseType } from "@api/ApiResponse.types";

export interface PaymentInfoProps {
  cart_ids: number[];
  guest_name: string;
  guest_email: string;
}

export const postPayment = async ({
  cart_ids,
  guest_name,
  guest_email
}: PaymentInfoProps): Promise<ResponseType> => {
  const response = await axiosInstance.post("/carts/orders/payments", {
    cart_ids,
    guest_name,
    guest_email
  });
  return response.data;
};
