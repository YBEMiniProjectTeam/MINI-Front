import { LoginApi, LogoutApi } from "@api/login/LoginApi";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginUrlState, loginUrlSearchState } from "@recoil/loginUrl";

import { ApiResponseBase } from "@api/ApiResponse.types.ts";
import toast from "react-hot-toast";
// import { useCookies } from "react-cookie";

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

        navigate(loginUrl + loginUrlSearch, { replace: true });
        window.location.reload();
      } else if (res.statusCode === 400) {
        toast.error("아이디 혹은 비밀번호가 잘못되었습니다.");
      }
    },
    onError: (err) => {
      console.log(err);
    }
  });
};

export const useLogoutMutation = () => {
  // const [_, removeCookie] = useCookies(["access-token"]);

  return useMutation<ApiResponseBase<undefined>, Error>({
    mutationFn: () => LogoutApi(),
    onSuccess: () => {},
    onError: (err) => {
      console.log(err);
    }
  });
};
