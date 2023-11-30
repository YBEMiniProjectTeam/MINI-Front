import axios from "axios";
import { API_BASE_URL } from "@api/config";
import { User } from "@components/Register/Register.types";

interface registerReturnType {
  statusCode: number;
  message: string;
  data?: {
    id: string;
    email: string;
    name: string;
    birthday?: string;
  };
  successful?: boolean;
}
export const RegisterApi = async (user: User): Promise<registerReturnType> => {
  const API_URL = `${API_BASE_URL}/sign-up`;
  const headers = {
    "Content-Type": "application/json"
  };

  const response = await axios.post(API_URL, user, { headers });

  return response.data;
};
