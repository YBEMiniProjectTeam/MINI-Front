import axios from "axios";

import { Login } from "@components/Login/Login.types";

export const LoginApi = (login: Login): void => {
  const API_URL =
    "https://cca6d5da-811b-445f-8811-62cab12d0157.mock.pstmn.io/login";
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
