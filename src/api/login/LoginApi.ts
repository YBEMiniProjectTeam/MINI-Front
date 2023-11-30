import axios from "axios";
import { API_BASE_URL } from "@api/config";
import { Login } from "@components/Login/Login.types";

interface loginReturnType {
  statusCode: number;
  message: string;
  data?: {
    accessToken: string;
  };
  successful?: boolean;
}
export const LoginApi = async (login: Login): Promise<loginReturnType> => {
  const API_URL = `${API_BASE_URL}/login`;
  const headers = {
    "Content-Type": "application/json"
  };
  const response = await axios.post(API_URL, login, { headers });

  return response.data;
};

interface logoutReturnType {
  statusCode: number;
  message: string;
  successful?: boolean;
}
export const LogoutApi = async (
  accessToken: string
): Promise<logoutReturnType> => {
  const API_URL = `${API_BASE_URL}/logout`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`
  };
  const response = await axios.post(API_URL, { headers });

  return response.data;
};
