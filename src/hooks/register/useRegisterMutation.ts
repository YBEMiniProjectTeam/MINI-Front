import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { RegisterApi } from "@api/register/RegisterApi";
import { User } from "@components/Register/Register.types";
import { ApiResponseBase } from "@api/ApiResponse.types";
import toast from "react-hot-toast";
interface Register {
  id: string;
  email: string;
  name: string;
  birthday?: string;
}

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation<ApiResponseBase<Register>, Error, User>({
    mutationFn: ({ email, pwd, name, birthday }: User) =>
      RegisterApi({ email, pwd, name, birthday }),
    onSuccess: () => {
      toast.success("회원가입이 정상적으로 처리되었습니다.");
      navigate("/login");
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
