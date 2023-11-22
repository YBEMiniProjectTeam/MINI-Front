import { useState } from "react";
import * as S from "./LoginStyles";
import { FormControl, FormHelperText, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Login } from "./Login.types";
import { LoginApi } from "../../api/login/LoginApi";
export const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailText, setIsEmailText] = useState(false);
  const [isPasswordText, setIsPasswordText] = useState(false);

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
  const handleClickLoginButton = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    const login: Login = {
      email: email,
      pwd: password
    };
    LoginApi(login);
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
