import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { RegisterApi } from "@api/register/RegisterApi";
import { User } from "@components/Register/Register.types";

interface register {
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

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation<register, Error, User>({
    mutationFn: ({ email, pwd, name, birthday }: User) =>
      RegisterApi({ email, pwd, name, birthday }),
    onSuccess: (res) => {
      console.log(res);
      navigate("/login");
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
