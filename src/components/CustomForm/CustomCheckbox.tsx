import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { CustomCheckboxProps } from "@components/CustomForm/CustomFrom.types.ts";
import { Controller } from "react-hook-form";

const CustomCheckbox = ({
  control,
  name,
  label,
  rules
}: CustomCheckboxProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <CheckboxGroup>
          <Checkbox {...field}>{label}</Checkbox>
          {error && <p>{error.message}</p>}
        </CheckboxGroup>
      )}
    />
  );
};

export default CustomCheckbox;
