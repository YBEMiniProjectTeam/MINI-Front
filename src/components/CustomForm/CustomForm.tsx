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
  CheckboxGroup,
  RadioGroup,
  Stack,
  Radio,
  Box,
  useRadio,
  HStack,
  useRadioGroup
} from "@chakra-ui/react";
import type {
  CustomInputProps,
  CustomSelectProps,
  CustomCheckboxProps,
  CustomButtonProps,
  CustomRadioProps,
  RadioCardProps,
  CustomRadioBoxProps
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
  isRequired = false
}: CustomInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <FormControl isInvalid={!!error} isRequired={isRequired}>
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

const RadioCard = ({
  children,
  checkedBgColor,
  checkedBorderColor,
  ...props
}: RadioCardProps) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <styles.StyledRadioCard
        {...checkbox}
        checkedBgColor={checkedBgColor}
        checkedBorderColor={checkedBorderColor}
        data-checked={input.checked}
      >
        {children}
      </styles.StyledRadioCard>
    </Box>
  );
};

const CustomRadioBox = ({
  control,
  rules,
  name,
  label,
  options,
  defaultValue,
  isRequired,
  checkedBgColor,
  checkedBorderColor
}: CustomRadioBoxProps) => {
  const { getRootProps, getRadioProps } = useRadioGroup({ name, defaultValue });

  const group = getRootProps();
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <FormControl as="fieldset" isInvalid={!!error} isRequired={isRequired}>
          {label && <FormLabel as="legend">{label}</FormLabel>}
          <HStack {...group}>
            {options.map((option) => {
              const radio = getRadioProps({ value: option.value });
              return (
                <RadioCard
                  checkedBgColor={checkedBgColor}
                  checkedBorderColor={checkedBorderColor}
                  key={option.value}
                  {...radio}
                  onChange={(e) => {
                    if (radio.onChange) {
                      radio.onChange(e);
                    }
                    field.onChange(e);
                  }}
                >
                  {option.label}
                </RadioCard>
              );
            })}
          </HStack>
        </FormControl>
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
  Radio: CustomRadio,
  RadioBox: CustomRadioBox
};

export default CustomForm;
