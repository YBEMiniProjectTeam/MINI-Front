import React from "react";
import * as styles from "./UserInfoField.styles";
import { dummyUserData } from "@pages/payment/Payment.data.ts";

const UserInfoField: React.FC = () => {
  const user = dummyUserData.data;
  return (
    <styles.UserInfoContainer>
      <styles.UserInfoWrapperRow>
        <styles.UserInfoLabel>이름</styles.UserInfoLabel>
        <styles.UserInfoItem>{user.name}</styles.UserInfoItem>
      </styles.UserInfoWrapperRow>
      <styles.UserInfoWrapperRow>
        <styles.UserInfoLabel>연락처</styles.UserInfoLabel>
        <styles.UserInfoItem>+82 (0)1000000000</styles.UserInfoItem>
      </styles.UserInfoWrapperRow>
      <styles.UserInfoWrapperRow>
        <styles.UserInfoLabel>이메일</styles.UserInfoLabel>
        <styles.UserInfoItem>{user.email}</styles.UserInfoItem>
      </styles.UserInfoWrapperRow>
    </styles.UserInfoContainer>
  );
};

export default UserInfoField;
