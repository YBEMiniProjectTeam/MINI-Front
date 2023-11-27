import axios from "axios";

import { Login } from "@components/Login/Login.types";

export const LoginApi = (login: Login): void => {
  const API_URL = "https://anti-bias.kr/api/login";
  const headers = {
    "Content-Type": "application/json"
  };

  axios
    .post(API_URL, login, { headers })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
