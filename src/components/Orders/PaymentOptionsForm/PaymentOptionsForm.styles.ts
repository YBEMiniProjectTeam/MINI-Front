import theme from "@theme";
import styled from "styled-components";
import { Radio, RadioGroup, Text } from "@chakra-ui/react";

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
  align-items: center;
`;

export const LabelText = styled(Text)`
  font-size: 1rem;
  margin-right: 1rem;
`;

export const EventText = styled(Text)`
  font-size: 0.8rem;
  letter-spacing: -0.1px;
  color: ${theme.colors.gray[500]};
`;

export const Icon = styled.img`
  margin-right: 0.8rem;
  width: 20px;
  height: 20px;
`;
