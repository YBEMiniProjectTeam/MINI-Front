import { useSendPaymentMutation } from "@hooks/useSendPaymentMutation";
import { useFormContext } from "react-hook-form";
import CustomButton from "@components/CustomForm/CustomButton";
import type { PaymentSubmitButtonProps } from "./PaymentSubmitButton.types";

const PaymentSubmitButton = ({
  totalPrice,
  userData,
  cartIds
}: PaymentSubmitButtonProps) => {
  const {
    handleSubmit,
    formState: { isValid },
    getValues
  } = useFormContext();

  const { mutate: sendPayment } = useSendPaymentMutation();

  const onSubmit = (formData: { name?: string; email?: string }) => {
    const isDifferentUser = getValues("isDiffUser");
    const reservationName = isDifferentUser ? formData.name : userData!.name;
    const reservationEmail = isDifferentUser ? formData.email : userData!.email;

    if (!reservationName || !reservationEmail) return;
    sendPayment({
      guest_name: reservationName,
      guest_email: reservationEmail,
      cart_ids: cartIds
    });
  };

  return (
    <CustomButton
      width="100%"
      type="submit"
      onClick={handleSubmit(onSubmit)}
      disabled={!isValid}
      colorScheme={isValid ? "primary" : "grey"}
    >
      {totalPrice.toLocaleString()}원 결제하기
    </CustomButton>
  );
};

export default PaymentSubmitButton;
