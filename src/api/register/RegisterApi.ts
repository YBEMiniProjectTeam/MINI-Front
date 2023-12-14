import { User } from "@components/Register/Register.types";
import { ApiResponseBase } from "@api/ApiResponse.types.ts";
import axiosInstance from "@api/axiosInstance";

interface RegisterReturnType {
  id: string;
  email: string;
  name: string;
  birthday?: string;
}
export const RegisterApi = async (
  user: User
): Promise<ApiResponseBase<RegisterReturnType>> => {
  const API_URL = `/sign-up`;

  const response = await axiosInstance.post(API_URL, user);

  return response.data;
};
