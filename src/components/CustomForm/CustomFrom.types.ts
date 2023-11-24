import { Control, FieldValues, RegisterOptions } from "react-hook-form";

interface CustomInputProps {
  control: Control<FieldValues>;
  name: string;
  label: string;
  rules?: RegisterOptions;
  placeholder?: string;
  helperText?: string;
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

interface CustomCheckboxGroupProps {
  control: Control<FieldValues, object>;
  parentName: string;
  children: React.ReactNode;
}

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  colorScheme?: string;
  width?: string | number;
}

export type {
  CustomInputProps,
  CustomSelectProps,
  CustomCheckboxProps,
  CustomCheckboxGroupProps,
  CustomButtonProps
};
