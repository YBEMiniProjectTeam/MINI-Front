import * as styles from "./PaymentInfo.styles";
import type { PaymentInfoProps } from "./PaymentInfo.types";

const PaymentInfo = ({ data }: PaymentInfoProps) => {
  const price = data.find((item) => item.key === "price");
  const paymentItems = data.filter((item) => item.key === "label");

  return (
    <styles.PaymentContainer>
      {paymentItems.map((item, index) => (
        <styles.PaymentWrapperRow key={index}>
          <styles.PaymentLabel>{item.label}</styles.PaymentLabel>
          <styles.PaymentItem>{item.value}</styles.PaymentItem>
        </styles.PaymentWrapperRow>
      ))}
      <styles.Divider />
      <styles.TotalPaymentPriceWrapper>
        <styles.Label>
          <span>{price?.label}</span>
        </styles.Label>
        <styles.TotalPaymentPrice>
          {price?.value.toLocaleString() + "원"}
        </styles.TotalPaymentPrice>
      </styles.TotalPaymentPriceWrapper>
    </styles.PaymentContainer>
  );
};

export default PaymentInfo;
