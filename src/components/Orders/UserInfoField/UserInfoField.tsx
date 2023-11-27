import * as styles from "./UserInfoField.styles";
import type { UserInfoFieldProps } from "./UserInfoField.types";

const UserInfoField = ({ data }: UserInfoFieldProps) => {
  return (
    <styles.UserInfoContainer>
      <styles.UserInfoWrapperRow>
        <styles.UserInfoLabel>이름</styles.UserInfoLabel>
        <styles.UserInfoItem>{data.name}</styles.UserInfoItem>
      </styles.UserInfoWrapperRow>
      <styles.UserInfoWrapperRow>
        <styles.UserInfoLabel>이메일</styles.UserInfoLabel>
        <styles.UserInfoItem>{data.email}</styles.UserInfoItem>
      </styles.UserInfoWrapperRow>
    </styles.UserInfoContainer>
  );
};

export default UserInfoField;
