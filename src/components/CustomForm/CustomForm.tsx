import { Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Select,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Stack,
  Radio
} from "@chakra-ui/react";
import type {
  CustomInputProps,
  CustomSelectProps,
  CustomCheckboxProps,
  CustomButtonProps,
  CustomRadioProps
} from "./CustomFrom.types";
import * as styles from "./CustomFrom.styles";

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

const CustomSelect = ({
  control,
  name,
  label,
  options,
  rules
}: CustomSelectProps) => {
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

const CustomRadio = ({
  control,
  name,
  label,
  options,
  rules,
  defaultValue,
  isRequired
}: CustomRadioProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <FormControl as="fieldset" isInvalid={!!error} isRequired={isRequired}>
          {label && <FormLabel as="legend">{label}</FormLabel>}
          <RadioGroup {...field}>
            <Stack direction="row">
              {options.map((option) => (
                <Radio key={option.value} value={option.value}>
                  {option.label}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
          <FormErrorMessage>{error?.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
};

const CustomButton = ({
  children,
  onClick,
  isLoading = false,
  type = "button",
  colorScheme = "pink",
  width,
  disabled
}: CustomButtonProps) => {
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
  Button: CustomButton,
  Radio: CustomRadio
};

export default CustomForm;
