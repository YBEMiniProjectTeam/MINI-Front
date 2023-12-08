import { useEffect, useState } from "react";
import * as S from "./LoginStyles";
import { FormControl, FormHelperText, Input, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import type { Login } from "./Login.types";
import { useLoginMutation } from "@hooks/login/useLoginMutation";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";

export const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailText, setIsEmailText] = useState(false);
  const [isPasswordText, setIsPasswordText] = useState(false);

  const { mutate: loginMutate } = useLoginMutation();

  const [cookies] = useCookies(["access-token"]);

  useEffect(() => {
    const CookiesAccessToken = cookies["access-token"];
    if (CookiesAccessToken) {
      toast("이미 로그인이 되어있습니다.");
      navigate("/");
    }
  }, []);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    setIsEmailText(e.currentTarget.value === "");
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    setIsPasswordText(e.currentTarget.value === "");
  };

  const handleSubmitLoginButton = (e: React.FormEvent) => {
    e.preventDefault();
    loginRequest();
  };

  const loginRequest = async () => {
    const login: Login = {
      email: email,
      pwd: password
    };

    await loginMutate(login);
  };
  return (
    <S.LoginFormContainer>
      <form onSubmit={handleSubmitLoginButton}>
        <h3>로그인</h3>
        <FormControl>
          <Input
            id="email"
            type="text"
            placeholder="이메일"
            value={email}
            onChange={handleChangeEmail}
            autoComplete="userEmail"
          />
          {isEmailText ? (
            <FormHelperText className="errorText">
              이메일을 입력해주세요
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl>
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handleChangePassword}
            autoComplete="new-password"
          />
          {isPasswordText ? (
            <FormHelperText className="errorText">
              패스워드를 입력해주세요
            </FormHelperText>
          ) : null}
        </FormControl>

        <Button type="submit">로그인</Button>
        <div className="flex">
          <div className="flexItem">
            <Link to="/register">
              <span>회원가입</span>
            </Link>
          </div>
        </div>
      </form>
    </S.LoginFormContainer>
  );
};
