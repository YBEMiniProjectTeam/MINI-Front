import axios from "axios";
import { API_BASE_URL } from "../config";
import {
  ResponseType,
  PostCartProps
} from "@/components/ProductDetail/ChooseRoom/ChooseRoom.types";

export const postCart = async ({
  body,
  headers
}: PostCartProps): Promise<ResponseType> => {
  const API_URL = `${API_BASE_URL}/carts`;
  return await axios.post(API_URL, body, { headers });
};
