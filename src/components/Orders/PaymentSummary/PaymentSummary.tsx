import React from "react";
import * as styles from "./PaymentSummary.styles";
import type { PaymentSummaryProps } from "./PaymentSummary.types";

const PaymentSummary: React.FC<PaymentSummaryProps> = ({ data, price }) => {
  const calculateTotal = () => {
    return data?.reduce((total, item) => {
      if (typeof item.value === "number") {
        return total + item.value;
      }
      return total;
    }, 0);
  };

  const totalAmount = price ?? calculateTotal();
  const formattedTotalAmount = totalAmount?.toLocaleString() + "원";

  return (
    <styles.PaymentContainer>
      {data?.map((item, index) => (
        <styles.PaymentWrapperRow key={index}>
          <styles.PaymentLabel>{item.label}</styles.PaymentLabel>
          <styles.PaymentItem>
            {typeof item.value === "number"
              ? item.value.toLocaleString() + "원"
              : item.value}
          </styles.PaymentItem>
        </styles.PaymentWrapperRow>
      ))}
      <styles.Divider />
      <styles.TotalPaymentPriceWrapper>
        <styles.Label>
          <span>총 결제 금액</span>
        </styles.Label>
        <styles.TotalPaymentPrice>
          {formattedTotalAmount}
        </styles.TotalPaymentPrice>
      </styles.TotalPaymentPriceWrapper>
    </styles.PaymentContainer>
  );
};

export default PaymentSummary;
