import { useEffect, useState } from "react";
import * as S from "./RegisterStyles";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button
} from "@chakra-ui/react";
import Swal from "sweetalert2";
import { AgreementModalForm } from "../AgreementModal/AgreementModalForm";
import { isBirthdayValid, isEmailValid, isPasswordValid } from "./validators";
import { RegisterApi } from "@api/register/RegisterApi";
import type { User } from "./Register.types";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const RegisterForm = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");

  const [isConfirmEmailText, setIsConfirmEmailText] = useState(false);
  const [isPasswordText, setIsPasswordText] = useState(false);
  const [isConfirmPasswordText, setIsConfirmPasswordText] = useState(false);
  const [isConfirmBirthdayText, setIsConfirmBithText] = useState(false);

  const [isAgreement, setIsAgreement] = useState(false);

  const [isShowModal, setIsShowModal] = useState(false);
  const navigate = useNavigate();

  const [cookies] = useCookies(["access-token"]);

  useEffect(() => {
    if (cookies["access-token"]) {
      Swal.fire({
        icon: "error",
        title: "잘못된 요청입니다.",
        text: "로그인이 된 상태면 해당 페이지에 들어갈 수 없습니다."
      }).then(() => {
        navigate(-1);
      });
    }
  }, []);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
    if (isEmailValid(e.currentTarget.value)) {
      setIsConfirmEmailText(false);
    } else {
      setIsConfirmEmailText(true);
    }
  };
  const handleChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.currentTarget.value);

    if (isPasswordValid(e.currentTarget.value)) {
      setIsPasswordText(false);
    } else {
      setIsPasswordText(true);
    }
  };
  const handleChangeConfirmPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setConfirmPassword(e.currentTarget.value);
    setIsConfirmPasswordText(e.currentTarget.value !== password);
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };
  const handleChangeBirthday = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setBirthday(e.currentTarget.value);
    if (
      isBirthdayValid(e.currentTarget.value) ||
      e.currentTarget.value === ""
    ) {
      setIsConfirmBithText(false);
    } else {
      setIsConfirmBithText(true);
    }
  };

  const handleClickSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();

    if (
      !name ||
      isConfirmEmailText ||
      !(password === confirmPassword) ||
      isPasswordText ||
      isConfirmPasswordText ||
      isConfirmBirthdayText
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "제대로 입력하지 않은 부분이 있습니다."
      });
    } else {
      if (isAgreement !== true) {
        setIsShowModal(true);
      } else {
        const year = birthday.slice(0, 4);
        const month = birthday.slice(4, 6);
        const day = birthday.slice(6, 8);
        const user: User = {
          email: email,
          pwd: password,
          name: name,

          ...(birthday && {
            birthday: `${year}-${month}-${day}`
          })
        };
        const statusCode = await RegisterApi(user);
        if (statusCode === 200) {
          Swal.fire("회원가입에 성공했습니다.!").then(() => {
            navigate("/login");
          });
        } else if (statusCode === 400) {
          Swal.fire({
            icon: "error",
            title: "회원가입에 실패했습니다.",
            text: "잘못된 형식으로 요쳥했습니다."
          });
        } else if (statusCode === 500) {
          Swal.fire({
            icon: "error",
            title: "서버에러.",
            text: "잠시후 다시 입력해주세요!"
          });
        }
      }
    }
  };
  return (
    <S.LoginFormContainer>
      {isShowModal ? (
        <AgreementModalForm
          setIsAgreement={setIsAgreement}
          setIsShowModal={setIsShowModal}
        ></AgreementModalForm>
      ) : null}
      <form>
        <FormControl>
          <h3>회원가입</h3>

          <FormLabel>이메일</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={handleChangeEmail}
            autoComplete="username"
          />
          {isConfirmEmailText ? (
            <FormHelperText className="errorText">
              이메일 형식이 아닙니다.
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl>
          <FormLabel>비밀번호 (8자 이상)</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handleChangePassword}
            autoComplete="new-password"
          />
          {isPasswordText ? (
            <FormHelperText className="errorText">
              패스워드는 영문, 숫자, 특수문자를 포함하여 8자 이상이어야 합니다.
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl>
          <FormLabel>비밀번호 확인</FormLabel>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="비밀번호"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            autoComplete="new-password"
          />
          {isConfirmPasswordText ? (
            <FormHelperText className="errorText">
              위 패스워드와 일치하지 않습니다.
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl>
          <FormLabel>이름</FormLabel>
          <Input
            id="name"
            type="text"
            placeholder="이름"
            value={name}
            onChange={handleChangeName}
          />
        </FormControl>
        <FormControl>
          <FormLabel>생년월일</FormLabel>
          <Input
            id="birthday"
            type="text"
            placeholder="생년월일 8자리 (선택)"
            value={birthday}
            onChange={handleChangeBirthday}
          />
          {isConfirmBirthdayText ? (
            <FormHelperText className="errorText">
              생년월일 8자리를 입력해주세요.
            </FormHelperText>
          ) : null}
          <Button type="submit" onClick={handleClickSubmit}>
            회원가입
          </Button>
        </FormControl>
      </form>
    </S.LoginFormContainer>
  );
};
