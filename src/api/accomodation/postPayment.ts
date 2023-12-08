import axios from "axios";
import { API_BASE_URL } from "../config";
import {
  ResponseType,
  PostPaymentProps
} from "@components/ProductDetail/ChooseRoom/ChooseRoom.types";

const postPayment = async ({
  body,
  headers
}: PostPaymentProps): Promise<ResponseType> => {
  const postPaymentUrl = `${API_BASE_URL}/carts/orders/payments-eager`;
  return await axios.post(postPaymentUrl, body, { headers });
};

export default postPayment;
