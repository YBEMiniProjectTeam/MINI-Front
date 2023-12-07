import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { RegisterApi } from "@api/register/RegisterApi";
import { User } from "@components/Register/Register.types";
import { ApiResponseBase } from "@api/ApiResponse.type";
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
      navigate("/login");
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
