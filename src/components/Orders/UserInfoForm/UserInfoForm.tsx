import * as styles from "./UserInfoForm.styles";
import { UserInfoFormProps } from "./UserInfoForm.types";

const UserInfoForm = ({ data }: UserInfoFormProps) => {
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

export default UserInfoForm;
