import {
  useRadioGroup,
  FormControl,
  FormLabel,
  HStack
} from "@chakra-ui/react";
import RadioOptions from "@components/Orders/VisitOptionsForm/RadioOptions.tsx";
import { useFormContext, Controller } from "react-hook-form";
import { FaWalking, FaCar } from "react-icons/fa";

const VisitOptionsForm = () => {
  const { control } = useFormContext();

  const options = [
    { label: "도보", value: "walk", icon: <FaWalking /> },
    { label: "차량", value: "vehicle", icon: <FaCar /> }
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "visitOption",
    defaultValue: options[0].value
  });

  const group = getRootProps();

  return (
    <Controller
      control={control}
      name="visitOption"
      render={({ field: { ref } }) => (
        <FormControl as="fieldset" isRequired>
          <FormLabel as="legend">방문 수단</FormLabel>
          <HStack {...group}>
            {options.map((option) => {
              const radio = getRadioProps({ value: option.value });
              return (
                <RadioOptions key={option.value} {...radio} ref={ref}>
                  {option.icon} {option.label}
                </RadioOptions>
              );
            })}
          </HStack>
        </FormControl>
      )}
    />
  );
};

export default VisitOptionsForm;
