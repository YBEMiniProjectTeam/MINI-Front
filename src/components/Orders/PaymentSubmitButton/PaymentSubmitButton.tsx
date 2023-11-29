import { useSendPaymentMutation } from "@hooks/useSendPaymentMutation.ts";
import { getAuthLocalStorage } from "@utils/getAuthLocalStorage.ts";
import { useFormContext } from "react-hook-form";
import CustomForm from "@components/CustomForm/CustomForm";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { mutate: sendPayment } = useSendPaymentMutation();
  const { headers } = getAuthLocalStorage();

  const onSubmit = (formData: { name?: string }) => {
    const isDifferentUser = getValues("isDiffUser");
    const reservationName = isDifferentUser ? formData.name : userData!.name;

    // FIXME: 에러 핸들링 필요
    if (!reservationName) return;

    sendPayment(
      { reservationName, cartIds, headers },
      {
        onSuccess: () => {
          const orderId = `orderId=${cartIds.length}`;
          navigate(`/reservationComplete?${orderId}`);
        }
      }
    );
  };

  return (
    <CustomForm.Button
      width="100%"
      type="submit"
      onClick={handleSubmit(onSubmit)}
      disabled={!isValid}
      colorScheme={isValid ? "pink" : "grey"}
    >
      {totalPrice.toLocaleString()}원 결제하기
    </CustomForm.Button>
  );
};

export default PaymentSubmitButton;
