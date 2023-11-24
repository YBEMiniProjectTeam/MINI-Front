import React from "react";
import * as styles from "./UserInfoField.styles";
import { useUserInfo } from "@hooks/useUserInfoQuery";

const UserInfoField: React.FC = () => {
  const { data, isLoading } = useUserInfo();

  if (isLoading) return <div>Loading...</div>;
  const user = data.data;

  return (
    <styles.UserInfoContainer>
      <styles.UserInfoWrapperRow>
        <styles.UserInfoLabel>이름</styles.UserInfoLabel>
        <styles.UserInfoItem>{user.name}</styles.UserInfoItem>
      </styles.UserInfoWrapperRow>
      <styles.UserInfoWrapperRow>
        <styles.UserInfoLabel>이메일</styles.UserInfoLabel>
        <styles.UserInfoItem>{user.email}</styles.UserInfoItem>
      </styles.UserInfoWrapperRow>
    </styles.UserInfoContainer>
  );
};

export default UserInfoField;
