import axios from "axios";
import { API_BASE_URL } from "@api/config";
import { Login } from "@components/Login/Login.types";
import { ApiResponseBase } from "@api/ApiResponse.types.ts";

interface LoginType {
  accessToken: string;
}
export const LoginApi = async (
  login: Login
): Promise<ApiResponseBase<LoginType>> => {
  const API_URL = `${API_BASE_URL}/login`;
  const headers = {
    "Content-Type": "application/json"
  };
  const response = await axios.post(API_URL, login, { headers });

  return response.data;
};

export const LogoutApi = async (
  accessToken: string
): Promise<ApiResponseBase<undefined>> => {
  const API_URL = `${API_BASE_URL}/logout`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`
  };
  const response = await axios.post(API_URL, { headers });
  return response.data;
};
