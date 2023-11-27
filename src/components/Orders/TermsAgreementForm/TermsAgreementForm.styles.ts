import styled from "styled-components";
import { Checkbox } from "@chakra-ui/react";

export const Form = styled.form`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const StyledCheckbox = styled(Checkbox)`
  border-color: #e2e8f0;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
`;

export const Item = styled.div`
  font-size: 0.9rem;
`;
