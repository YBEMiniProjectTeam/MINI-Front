import React from "react";
import * as styles from "./TermsAgreementField.styles";

const TermsAgreementField: React.FC = () => {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <styles.Form>
      <styles.StyledCheckbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        <styles.Title>필수 약관 전체 동의</styles.Title>
      </styles.StyledCheckbox>
      <styles.Stack>
        <styles.StyledCheckbox
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          <styles.Item>[필수] 개인정보 수집 및 이용</styles.Item>
        </styles.StyledCheckbox>
        <styles.StyledCheckbox
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          <styles.Item>[필수] 개인정보 제 3자 제공</styles.Item>
        </styles.StyledCheckbox>
      </styles.Stack>
    </styles.Form>
  );
};

export default TermsAgreementField;
