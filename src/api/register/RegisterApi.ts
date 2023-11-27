import axios from "axios";
import Swal from "sweetalert2";
import { User } from "@components/Register/Register.types";

export const RegisterApi = (user: User): void => {
  const API_URL =
    "https://anti-bias.kr/api/sign-up";
  const headers = {
    "Content-Type": "application/json"
  };

  axios
    .post(API_URL, user, { headers })
    .then((res) => {
      console.log(res);
      Swal.fire("회원가입이 정상처리되었습니다.");
    })
    .catch((error) => {
      console.log(error);
    });
};
