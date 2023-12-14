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
    const guestName = isDifferentUser ? formData.name : userData!.name;
    const guestEmail = isDifferentUser ? formData.email : userData!.email;

    if (!guestName || !guestEmail) return;
    sendPayment({
      guest_name: guestName,
      guest_email: guestEmail,
      cart_ids: cartIds
    });
  };

  return (
    <CustomButton
      width="100%"
      type="submit"
      onClick={handleSubmit(onSubmit)}
      disabled={!isValid}
      colorScheme={isValid ? "primary" : "disabled"}
    >
      {totalPrice.toLocaleString()}원 결제하기
    </CustomButton>
  );
};

export default PaymentSubmitButton;
