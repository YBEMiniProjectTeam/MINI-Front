import * as styles from "./PaymentInfo.styles";
import type { PaymentInfoProps } from "./PaymentInfo.types";

const PaymentInfo = ({ data }: PaymentInfoProps) => {
  const totalPaymentItem = data?.find(
    (item) => item.key === "total" || item.key === "price"
  );

  const TotalPayment = totalPaymentItem?.value.toLocaleString() + "원" || "0원";

  const totalPaymentLabel =
    totalPaymentItem?.key === "total" ? "총 결제 금액" : "결제 금액";

  const items =
    data?.filter((item) => item.key !== "total" && item.key !== "price") || [];

  return (
    <styles.PaymentContainer>
      {items.map((item, index) => (
        <styles.PaymentWrapperRow key={index}>
          <styles.PaymentLabel>{item.label}</styles.PaymentLabel>
          <styles.PaymentItem>
            {item.key === "label" && typeof item.value === "number"
              ? item.value.toLocaleString() + "원"
              : item.value}
          </styles.PaymentItem>
        </styles.PaymentWrapperRow>
      ))}
      <styles.Divider />
      <styles.TotalPaymentPriceWrapper>
        <styles.Label>
          <span>{totalPaymentLabel}</span>
        </styles.Label>
        <styles.TotalPaymentPrice>{TotalPayment}</styles.TotalPaymentPrice>
      </styles.TotalPaymentPriceWrapper>
    </styles.PaymentContainer>
  );
};

export default PaymentInfo;
