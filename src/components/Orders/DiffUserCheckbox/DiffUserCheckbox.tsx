import { Controller, useFormContext } from "react-hook-form";
import * as styles from "./DiffUserCheckbox.styles";
import { DiffUserCheckBoxProps } from "./DiffUserCheckBox.types";

const DiffUserCheckbox = ({ setIsDiffUser }: DiffUserCheckBoxProps) => {
  const { control } = useFormContext();

  return (
    <styles.Container>
      <Controller
        name="isDiffUser"
        control={control}
        render={({ field: { onChange, value, ref } }) => (
          <styles.StyledCheckBox
            ref={ref}
            isChecked={value}
            size="lg"
            onChange={(e) => {
              onChange(e.target.checked);
              setIsDiffUser(e.target.checked);
            }}
          >
            <styles.Item>예약자와 투숙자가 다릅니다.</styles.Item>
          </styles.StyledCheckBox>
        )}
      />
    </styles.Container>
  );
};

export default DiffUserCheckbox;
