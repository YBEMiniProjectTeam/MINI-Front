import { Button } from "@chakra-ui/react";
import { CustomButtonProps } from "@components/CustomForm/CustomFrom.types.ts";

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

export default CustomButton;
