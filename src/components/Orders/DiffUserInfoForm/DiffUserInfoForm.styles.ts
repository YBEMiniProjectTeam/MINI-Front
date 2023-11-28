import { FormControl, FormLabel } from "@chakra-ui/react";
import styled from "styled-components";

export const FieldsetContainer = styled(FormControl)`
  padding: 0.3rem 1rem;
`;

export const StyledLabel = styled(FormLabel)`
  font-size: 0.9rem;
  padding: 0.9rem 0;

  & > span {
    font-size: 0.9rem;
    color: #a0aec0;
  }
`;
