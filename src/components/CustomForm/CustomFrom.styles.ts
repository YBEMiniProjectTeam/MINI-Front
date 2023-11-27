import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import { RadioCardProps } from "./CustomFrom.types";

export const StyledRadioCard = styled(Box)<RadioCardProps>`
  cursor: pointer;
  border-width: 1px;
  padding: 5px 3px;
  border-radius: md;
  box-shadow: md;
  transition:
    background-color 0.2s,
    border-color 0.2s;

  &[data-checked="true"] {
    background-color: ${(props) => props.checkedBgColor || "pink.600"};
    color: white;
    border-color: ${(props) => props.checkedBorderColor || "pink.600"};
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
  }
`;
