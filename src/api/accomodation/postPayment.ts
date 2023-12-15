import axiosInstance from "@api/axiosInstance";
import {
  ResponseType,
  PostPaymentProps
} from "@components/ProductDetail/ChooseRoom/ChooseRoom.types";

const postPayment = async ({
  body
}: PostPaymentProps): Promise<ResponseType> => {
  return await axiosInstance.post(`/carts/orders/payments-eager`, body);
};

export default postPayment;
