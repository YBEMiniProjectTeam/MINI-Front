import { Box, useRadio } from "@chakra-ui/react";
import { forwardRef } from "react";
import * as styles from "./RadioOptions.styles";

const RadioOptions = forwardRef(({ ...props, ref }) => {
  const { getInputProps, htmlProps } = useRadio(props);
  const input = getInputProps();

  return (
    <styles.RadioContainer
      as="label"
      checked={props.isChecked}
      {...htmlProps}
      ref={ref}
    >
      <input {...input} style={{ display: "none" }} />
      {props.children}
    </styles.RadioContainer>
  );
});

export default RadioOptions;
