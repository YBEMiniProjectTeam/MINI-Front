import axios from "axios";

import { Login } from "@components/Login/Login.types";

export const LoginApi = (login: Login) => {
  const API_URL = "https://api.anti-bias.kr/api/login";
  const headers = {
    "Content-Type": "application/json"
  };
  const data = axios.post(API_URL, login, { headers }).then((res) => {
    return res.data;
  });
  return data;
};
