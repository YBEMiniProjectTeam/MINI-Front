import axios from "axios";
import { API_BASE_URL } from "../config";
import {
  ResponseType,
  PostPaymentProps
} from "@components/ProductDetail/ChooseRoom/ChooseRoom.types";

export const postPayment = async ({
  body,
  headers
}: PostPaymentProps): Promise<ResponseType> => {
  const API_URL = `${API_BASE_URL}/carts/orders/payments-eager`;
  return await axios.post(API_URL, body, { headers });
};
