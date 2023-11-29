import styled from "styled-components";

export const PaymentContainer = styled.div`
  padding: 0 1rem;
`;

export const PaymentWrapperRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  padding: 0.3rem 0;

  &:last-child {
    margin: 0;
  }
`;
export const PaymentLabel = styled.div`
  flex: auto;
  font-size: 0.9rem;
`;
export const PaymentItem = styled.div`
  flex: 5;
  justify-content: flex-end;
  display: flex;
  font-size: 0.9rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const TotalPaymentPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalPaymentPrice = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #de2e5f;
`;

export const Divider = styled.hr`
  border-bottom: 2px dashed #e6e6e6;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-top-width: 0px;
`;

export const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0;

  & > span {
    font-size: 1rem;
    letter-spacing: -0.5px;
    font-weight: 700;
  }
`;
