import styled from "styled-components";

export const Container = styled.div`
  background-color: #f8f8f9;
`;

export const SuccessInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 1rem 1.5rem 5rem;
`;

export const PaymentInfoWrapper = styled.div`
  margin-bottom: 1rem;
  padding: 1rem 0;
  background-color: #f8f8f9;
  border-radius: 6px;
  &:last-child {
    margin-bottom: 0;
  }
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
