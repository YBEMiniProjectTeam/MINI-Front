import { Login } from "@components/Login/Login.types";
import { ApiResponseBase } from "@api/ApiResponse.types.ts";
import axiosInstance from "@api/axiosInstance";

interface LoginType {
  accessToken: string;
}
export const LoginApi = async (
  login: Login
): Promise<ApiResponseBase<LoginType>> => {
  const API_URL = `/login`;
  const response = await axiosInstance.post(API_URL, login);

  return response.data;
};

export const LogoutApi = async (): Promise<ApiResponseBase<undefined>> => {
  const API_URL = `/logout`;

  const response = await axiosInstance.post(API_URL);
  return response.data;
};

export const getPaymentInfo = async (cart_ids: number[]) => {
  const response = await axiosInstance.post("/carts/orders/reservations", {
    cart_ids
  });
  return response.data.data;
};
