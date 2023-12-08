import styled from "styled-components";

export const Container = styled.div`
  background-color: #f8f8f9;
`;

export const CardContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #f8f8f9;
  padding: 0 1rem;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;
