import { LoginApi, LogoutApi } from "@api/login/LoginApi";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginUrlState } from "@recoil/loginUrl";

interface login {
  statusCode: number;
  message: string;
  data?: {
    accessToken: string;
  };
  successful?: boolean;
}

interface loginProps {
  email: string;
  pwd: string;
}

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const [loginUrl] = useRecoilState(loginUrlState);
  return useMutation<login, Error, loginProps>({
    mutationFn: ({ email, pwd }: loginProps) => LoginApi({ email, pwd }),
    onSuccess: (res) => {
      console.log(res);
      if (res.statusCode === 200) {
        localStorage.setItem("access-token", res.data?.accessToken as string);
        navigate(loginUrl);
      }
    },
    onError: (err) => {
      console.log(err);
    }
  });
};

interface logoutProps {
  accessToken: string;
}

export const useLogoutMutation = () => {
  return useMutation<login, Error, logoutProps>({
    mutationFn: ({ accessToken }: logoutProps) => LogoutApi(accessToken),
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
