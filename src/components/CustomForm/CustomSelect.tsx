import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { CustomSelectProps } from "@components/CustomForm/CustomFrom.types.ts";
import { Controller } from "react-hook-form";

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

export default CustomSelect;
