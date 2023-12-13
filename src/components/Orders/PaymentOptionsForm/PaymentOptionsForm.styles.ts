import theme from "@theme";
import styled from "styled-components";
import { Radio, RadioGroup } from "@chakra-ui/react";

export const Container = styled.div`
  padding: 0 1rem;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  border: 1px solid ${theme.colors.primary[100]};
  padding: 1.2rem;
`;

export const StyledRadio = styled(Radio)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledItem = styled.div<{ $isChecked?: boolean }>`
  background-color: ${({ $isChecked }) =>
    $isChecked ? `${theme.colors.primary[100]}` : "transparent"};
  border-radius: 5px;
  padding: 0.9rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.div`
  display: flex;
`;

export const Text = styled.span`
  font-size: 1rem;
`;

export const Icon = styled.img`
  margin-right: 0.8rem;
  width: 20px;
  height: 20px;
`;
