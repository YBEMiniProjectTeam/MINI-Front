import React from "react";
import * as styles from "./PaymentSummary.styles";
import { dummyReservationInfo } from "@pages/payment/Payment.data";

const PaymentSummary: React.FC = () => {
  const dummyData = dummyReservationInfo.data;
  return (
    <styles.PaymentContainer>
      <styles.PaymentWrapperRow>
        <styles.PaymentLabel>상품 금액</styles.PaymentLabel>
        <styles.PaymentItem>{dummyData.price}</styles.PaymentItem>
      </styles.PaymentWrapperRow>
      <styles.PaymentWrapperRow>
        <styles.PaymentLabel>할인 금액</styles.PaymentLabel>
        <styles.PaymentItem>0원</styles.PaymentItem>
      </styles.PaymentWrapperRow>
      <styles.PaymentWrapperRow>
        <styles.PaymentLabel>쿠폰 사용</styles.PaymentLabel>
        <styles.PaymentItem>0원</styles.PaymentItem>
      </styles.PaymentWrapperRow>
      <styles.Divider />
      <styles.TotalPaymentPriceWrapper>
        <styles.Label>
          <span>총 결제 금액</span>
        </styles.Label>
        <styles.TotalPaymentPrice>{dummyData.price}</styles.TotalPaymentPrice>
      </styles.TotalPaymentPriceWrapper>
    </styles.PaymentContainer>
  );
};

export default PaymentSummary;
