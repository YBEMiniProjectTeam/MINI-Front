import * as styles from "./UserInfoForm.styles";
import { UserInfoFormProps } from "./UserInfoForm.types";

const UserInfoForm = ({ userData }: UserInfoFormProps) => {
  return (
    <styles.UserInfoContainer>
      <styles.UserInfoWrapperRow>
        <styles.UserInfoLabel>이름</styles.UserInfoLabel>
        <styles.UserInfoItem>{userData.name}</styles.UserInfoItem>
      </styles.UserInfoWrapperRow>
      <styles.UserInfoWrapperRow>
        <styles.UserInfoLabel>이메일</styles.UserInfoLabel>
        <styles.UserInfoItem>{userData.email}</styles.UserInfoItem>
      </styles.UserInfoWrapperRow>
    </styles.UserInfoContainer>
  );
};

export default UserInfoForm;
