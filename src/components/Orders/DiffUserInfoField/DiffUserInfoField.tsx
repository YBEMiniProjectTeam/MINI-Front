import React from "react";
import { useFormContext } from "react-hook-form";
import CustomForm from "@components/CustomForm/CustomForm";

const DiffUserInfoField: React.FC = () => {
  const { control } = useFormContext();

  return (
    <form>
      <CustomForm.Input
        control={control}
        name="name"
        label="투숙자명"
        placeholder="이름 입력"
        rules={{ required: "이름을 입력해주세요." }}
      />

      <CustomForm.Input
        control={control}
        name="phone"
        label="연락처"
        placeholder="전화번호 입력"
        rules={{
          required: "휴대폰 번호를 입력해주세요.",
          pattern: {
            value: /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/,
            message: "유효한 휴대폰 번호를 입력해주세요."
          }
        }}
      />

      <CustomForm.Input
        control={control}
        name="email"
        label="이메일"
        placeholder="이메일 입력"
        rules={{
          required: "이메일을 입력해주세요.",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "유효한 이메일 주소를 입력해주세요."
          }
        }}
      />
    </form>
  );
};

export default DiffUserInfoField;
