import styled from "styled-components";
import {
  Input,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  FormControl
} from "@chakra-ui/react";

export const styledFormControl = styled(FormControl)``;

export const FormField = styled.div`
  display: flex;

  & > label {
    display: flex;
    width: 100px;
    align-items: center;
    margin: 0;
  }
`;

export const StyledInput = styled(Input)`
  display: flex;
  align-items: center;
  text-align: end;
`;

export const StyledFormLabel = styled(FormLabel)``;

export const StyledFormErrorMessage = styled(FormErrorMessage)`
  justify-content: flex-end;
`;

export const styledFormHelperText = styled(FormHelperText)`
  justify-content: flex-end;
`;
