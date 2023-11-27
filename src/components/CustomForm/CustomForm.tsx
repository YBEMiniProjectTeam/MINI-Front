import { Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Select,
  Checkbox,
  CheckboxGroup
} from "@chakra-ui/react";
import type {
  CustomInputProps,
  CustomSelectProps,
  CustomCheckboxProps,
  CustomButtonProps
} from "./CustomFrom.types";

const CustomInput = ({
  control,
  name,
  label,
  rules,
  placeholder,
  helperText
}: CustomInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <FormControl isInvalid={!!error}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Input {...field} placeholder={placeholder} />
          {!error ? (
            <FormHelperText>{helperText}</FormHelperText>
          ) : (
            <FormErrorMessage>{error.message}</FormErrorMessage>
          )}
        </FormControl>
      )}
    />
  );
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  control,
  name,
  label,
  options,
  rules
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <FormControl>
          <FormLabel>{label}</FormLabel>
          <Select {...field}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  control,
  name,
  label,
  rules
}) => {
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

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  isLoading = false,
  type = "button",
  colorScheme = "pink",
  width,
  disabled
}) => {
  return (
    <Button
      onClick={onClick}
      isLoading={isLoading}
      type={type}
      colorScheme={colorScheme}
      width={width}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

const CustomForm = {
  Input: CustomInput,
  Select: CustomSelect,
  Checkbox: CustomCheckbox,
  Button: CustomButton
};

export default CustomForm;
