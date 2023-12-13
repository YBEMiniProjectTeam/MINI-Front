import { Control, FieldValues, RegisterOptions } from "react-hook-form";

export interface CustomInputProps {
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

export interface CustomSelectProps {
  control: Control<FieldValues>;
  name: string;
  label: string;
  options: { value: string; label: string }[];
  rules?: RegisterOptions;
}

export interface CustomCheckboxProps {
  control?: Control<FieldValues, object>;
  name: string;
  label: string;
  rules?: RegisterOptions;
}

export interface CustomRadioProps {
  control: Control<FieldValues, object>;
  name: string;
  label?: string;
  options: { value: string; label: string }[];
  rules?: RegisterOptions;
  defaultValue?: string;
  isRequired?: boolean;
}

export interface CustomButtonProps {
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
