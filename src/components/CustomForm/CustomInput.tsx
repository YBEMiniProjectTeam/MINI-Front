import * as styles from "@components/CustomForm/CustomFrom.styles.ts";
import { CustomInputProps } from "@components/CustomForm/CustomFrom.types.ts";
import { Controller } from "react-hook-form";

const CustomInput = ({
  control,
  name,
  label,
  rules,
  placeholder,
  helperText,
  defaultValue,
  isRequired = false,
  variant = "outline"
}: CustomInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <styles.styledFormControl isInvalid={!!error} isRequired={isRequired}>
          <styles.FormField>
            <styles.StyledFormLabel htmlFor={name} fontSize="sm">
              {label}
            </styles.StyledFormLabel>
            <styles.StyledInput
              {...field}
              placeholder={placeholder}
              fontSize="sm"
              variant={variant}
            />
          </styles.FormField>
          {!error ? (
            <styles.styledFormHelperText>
              {helperText}
            </styles.styledFormHelperText>
          ) : (
            <styles.StyledFormErrorMessage>
              {error.message}
            </styles.StyledFormErrorMessage>
          )}
        </styles.styledFormControl>
      )}
    />
  );
};

export default CustomInput;
