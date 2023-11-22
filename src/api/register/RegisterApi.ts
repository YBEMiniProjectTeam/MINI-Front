import axios from "axios";
import Swal from "sweetalert2";
import { User } from "../../components/Register/Register.types";

export const RegisterApi = (user: User): void => {
  const apiUrl =
    "https://cca6d5da-811b-445f-8811-62cab12d0157.mock.pstmn.io/sign-up";
  const headers = {
    "Content-Type": "application/json"
  };

  axios
    .post(apiUrl, user, { headers })
    .then((res) => {
      console.log(res);
      Swal.fire("회원가입이 정상처리되었습니다.");
    })
    .catch((error) => {
      console.log(error);
    });
};
