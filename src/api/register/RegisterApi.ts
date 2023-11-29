import axios from "axios";
import { API_BASE_URL } from "@api/config";
import { User } from "@components/Register/Register.types";

export const RegisterApi = (user: User): Promise<number> => {
  const API_URL = `${API_BASE_URL}/sign-up`;
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
