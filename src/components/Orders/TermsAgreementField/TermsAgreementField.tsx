import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import * as styles from "./TermsAgreementField.styles";

const TermsAgreementField: React.FC = () => {
  const { control } = useFormContext();
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);

  return (
    <styles.Form>
      <Controller
        name="termsAgreement"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, ref } }) => (
          <styles.StyledCheckbox
            ref={ref}
            isChecked={allChecked}
            onChange={(e) => {
              const newChecked = e.target.checked;
              onChange(newChecked);
              setCheckedItems([newChecked, newChecked]);
            }}
          >
            <styles.Title>필수 약관 전체 동의</styles.Title>
          </styles.StyledCheckbox>
        )}
      />
      <styles.Stack>
        {checkedItems.map((checked, index) => (
          <styles.StyledCheckbox
            key={index}
            isChecked={checked}
            onChange={(e) => {
              const newCheckedItems = [...checkedItems];
              newCheckedItems[index] = e.target.checked;
              setCheckedItems(newCheckedItems);
            }}
          >
            <styles.Item>
              {index === 0
                ? "[필수] 개인정보 수집 및 이용"
                : "[필수] 개인정보 제 3자 제공"}
            </styles.Item>
          </styles.StyledCheckbox>
        ))}
      </styles.Stack>
    </styles.Form>
  );
};

export default TermsAgreementField;
