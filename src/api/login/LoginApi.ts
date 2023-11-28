import axios from "axios";

import { Login } from "@components/Login/Login.types";

export const LoginApi = (login: Login): Promise<number> => {
  const API_URL = "https://anti-bias.kr/api/login";
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
