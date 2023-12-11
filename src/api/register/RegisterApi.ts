import axios from "axios";
import { API_BASE_URL } from "@api/config";
import { User } from "@components/Register/Register.types";
import { ApiResponseBase } from "@api/ApiResponse.types.ts";
interface RegisterReturnType {
  id: string;
  email: string;
  name: string;
  birthday?: string;
}
export const RegisterApi = async (
  user: User
): Promise<ApiResponseBase<RegisterReturnType>> => {
  const API_URL = `${API_BASE_URL}/sign-up`;
  const headers = {
    "Content-Type": "application/json"
  };

  const response = await axios.post(API_URL, user, { headers });

  return response.data;
};
