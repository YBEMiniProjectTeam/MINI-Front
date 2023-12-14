import axiosInstance from "@api/axiosInstance";

import {
  ResponseType,
  PostCartProps
} from "@components/ProductDetail/ChooseRoom/ChooseRoom.types";

const postCart = async ({ body }: PostCartProps): Promise<ResponseType> => {
  return await axiosInstance.post(`/carts`, body);
};

export default postCart;
