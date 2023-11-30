import { useEffect, useState } from "react";
import * as S from "./LoginStyles";
import { FormControl, FormHelperText, Input, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import type { Login } from "./Login.types";
import { LoginApi } from "@api/login/LoginApi";
import { useCookies } from "react-cookie";
// import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

export const LoginForm = (): JSX.Element => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailText, setIsEmailText] = useState(false);
  const [isPasswordText, setIsPasswordText] = useState(false);

  const [cookies] = useCookies(["access-token"]);

  useEffect(() => {
    if (localStorage.getItem("access-token")) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
    setIsEmailText(e.currentTarget.value === "");
  };
  const handleChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.currentTarget.value);
    setIsPasswordText(e.currentTarget.value === "");
  };
  const handleKeyDownPassword = (
    e: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (e.key === "Enter") {
      loginRequest();
    }
  };
  const handleClickLoginButton = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    loginRequest();
  };

  const loginRequest = async (): Promise<void> => {
    const login: Login = {
      email: email,
      pwd: password
    };

    const data = await LoginApi(login);

    if (data.statusCode === 200) {
      localStorage.setItem("access-token", data.data.accessToken);
      navigate(-1);
    } else if (data.statusCode === 400) {
      toast.error("아이디나 비밀번호가 잘못되었습니다.");
    } else if (data.statusCode === 500) {
      toast.error("잠시후 다시 입력해주세요!");
    }
  };
  return (
    <S.LoginFormContainer>
      <form>
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
            onKeyDown={handleKeyDownPassword}
          />
          {isPasswordText ? (
            <FormHelperText className="errorText">
              패스워드를 입력해주세요
            </FormHelperText>
          ) : null}
        </FormControl>

        <Button onClick={handleClickLoginButton}>로그인</Button>
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
