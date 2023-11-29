import axios from "axios";

import { User } from "@components/Register/Register.types";

export const RegisterApi = (user: User): Promise<number> => {
  const API_URL = "https://api.anti-bias.kr/api/sign-up";
  const headers = {
    "Content-Type": "application/json"
  };

  const statusCode = axios
    .post(API_URL, user, { headers })
    .then((res): number => {
      return res.data.statusCode;
    });
  return statusCode;
};
