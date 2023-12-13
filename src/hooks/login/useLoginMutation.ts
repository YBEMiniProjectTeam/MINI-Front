import { LoginApi, LogoutApi } from "@api/login/LoginApi";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginUrlState, loginUrlSearchState } from "@recoil/loginUrl";

import { ApiResponseBase } from "@api/ApiResponse.types.ts";
import { useCookies } from "react-cookie";

interface LoginType {
  accessToken: string;
}

interface loginProps {
  email: string;
  pwd: string;
}

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const [loginUrl] = useRecoilState(loginUrlState);
  const [loginUrlSearch] = useRecoilState(loginUrlSearchState);

  return useMutation<ApiResponseBase<LoginType>, Error, loginProps>({
    mutationFn: ({ email, pwd }: loginProps) => LoginApi({ email, pwd }),
    onSuccess: (res) => {
      if (res.data && res.statusCode === 200) {
        // console.log(res.data.accessToken);
        // 로컬스토리지 임시 추가.
        window.localStorage.setItem("access-token", res.data.accessToken);
        console.log(res.data.accessToken);

        navigate(loginUrl + loginUrlSearch);
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
  const [_, removeCookie] = useCookies(["access-token"]);

  return useMutation<ApiResponseBase<undefined>, Error, logoutProps>({
    mutationFn: ({ accessToken }: logoutProps) => LogoutApi(accessToken),
    onSuccess: () => {
      removeCookie("access-token", { path: "/" });
    },
    onError: (err) => {
      console.log(err);
    }
  });
};
