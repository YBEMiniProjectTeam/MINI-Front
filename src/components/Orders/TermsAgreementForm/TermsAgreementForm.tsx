import { useFormContext, Controller } from "react-hook-form";
import * as styles from "./TermsAgreementForm.styles";
import { useEffect, useState } from "react";

const TermsAgreementForm = () => {
  const { control, setValue, watch } = useFormContext();
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const termsAgreement = watch("termsAgreement");

  useEffect(() => {
    const allChecked = checkedItems.every(Boolean);

    if (termsAgreement !== allChecked) {
      setValue("termsAgreement", allChecked);
    }
  }, [checkedItems, setValue, termsAgreement]);

  return (
    <styles.Form>
      <Controller
        name="termsAgreement"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, ref, value } }) => (
          <styles.StyledCheckbox
            ref={ref}
            isChecked={value}
            onChange={(e) => {
              onChange(e.target.checked);
              setCheckedItems(checkedItems.map(() => e.target.checked));
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
              const allChecked = newCheckedItems.every(Boolean);
              setValue("termsAgreement", allChecked, { shouldValidate: true });
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

export default TermsAgreementForm;
