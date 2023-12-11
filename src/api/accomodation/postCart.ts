import axios from "axios";
import { API_BASE_URL } from "../config";
import {
  ResponseType,
  PostCartProps
} from "@components/ProductDetail/ChooseRoom/ChooseRoom.types";

const postCart = async ({
  body,
  headers
}: PostCartProps): Promise<ResponseType> => {
  const postCartUrl = `${API_BASE_URL}/carts`;
  return await axios.post(postCartUrl, body, { headers });
};

export default postCart;
