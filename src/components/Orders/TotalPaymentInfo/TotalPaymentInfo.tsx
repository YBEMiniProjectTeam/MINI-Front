import * as styles from "@components/Orders/PaymentInfo/PaymentInfo.styles.ts";
import { TotalPaymentInfoProps } from "./TotalPaymentInfo.types";

const TotalPaymentInfo = ({ totalPrice, children }: TotalPaymentInfoProps) => {
  const TotalPayment = totalPrice.toLocaleString();

  return (
    <styles.PaymentContainer>
      <styles.PaymentWrapperRow>
        <styles.PaymentLabel>총 상품 금액</styles.PaymentLabel>
        <styles.PaymentItem className="total-price">
          {TotalPayment}원
        </styles.PaymentItem>
      </styles.PaymentWrapperRow>
      <styles.PaymentWrapperRow>
        <styles.PaymentLabel>총 할인 금액</styles.PaymentLabel>
        <styles.PaymentItem>0원</styles.PaymentItem>
      </styles.PaymentWrapperRow>
      <styles.Divider />
      <styles.TotalPaymentPriceWrapper>
        <styles.Label>
          <span>총 결제 금액</span>
          {children}
        </styles.Label>
        <styles.TotalPaymentPrice>{TotalPayment}원</styles.TotalPaymentPrice>
      </styles.TotalPaymentPriceWrapper>
    </styles.PaymentContainer>
  );
};

export default TotalPaymentInfo;
