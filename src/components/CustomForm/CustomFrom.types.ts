import { RadioProps } from "@chakra-ui/react";
import { Control, FieldValues, RegisterOptions } from "react-hook-form";

interface CustomInputProps {
  control: Control<FieldValues>;
  name: string;
  label: string;
  rules?: RegisterOptions;
  placeholder?: string;
  helperText?: string;
  defaultValue?: string;
  isRequired?: boolean;
  variant?: "outline" | "filled" | "flushed" | "unstyled";
}

interface CustomSelectProps {
  control: Control<FieldValues>;
  name: string;
  label: string;
  options: { value: string; label: string }[];
  rules?: RegisterOptions;
}

interface CustomCheckboxProps {
  control?: Control<FieldValues, object>;
  name: string;
  label: string;
  rules?: object;
}

interface CustomRadioProps {
  control: Control<FieldValues, object>;
  name: string;
  label?: string;
  options: { value: string; label: string }[];
  rules?: object;
  defaultValue?: string;
  isRequired?: boolean;
}

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  colorScheme?: string;
  width?: string | number;
  disabled?: boolean;
}

export interface Option {
  label: string;
  value: string;
}

interface CustomRadioBoxProps {
  control: Control<FieldValues>;
  rules?: RegisterOptions;
  name: string;
  label: string;
  options: Option[];
  defaultValue?: string;
  isRequired?: boolean;
  checkedBgColor: string;
  checkedBorderColor: string;
}

interface RadioCardProps extends RadioProps {
  children: React.ReactNode;
  checkedBgColor: string;
  checkedBorderColor: string;
}

export type {
  CustomInputProps,
  CustomSelectProps,
  CustomCheckboxProps,
  CustomRadioProps,
  CustomButtonProps,
  RadioCardProps,
  CustomRadioBoxProps
};
