import axios from "axios";
import { API_BASE_URL } from "@api/config";
import { Login } from "@components/Login/Login.types";

export const LoginApi = (login: Login): Promise<number> => {
  const API_URL = `${API_BASE_URL}/login`;
  const headers = {
    "Content-Type": "application/json"
  };
  const statusCode = axios
    .post(API_URL, login, { headers })
    .then((res): number => {
      return res.data.statusCode;
    });
  return statusCode;
};
