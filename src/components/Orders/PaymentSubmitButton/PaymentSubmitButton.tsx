import { useFormContext } from "react-hook-form";
import CustomForm from "@components/CustomForm/CustomForm";
import { useNavigate, useParams } from "react-router-dom";
import type { PaymentSubmitButtonProps } from "./PaymentSubmitButton.types";

const PaymentSubmitButton = ({ price, userData }: PaymentSubmitButtonProps) => {
  const {
    handleSubmit,
    formState: { isValid },
    getValues
  } = useFormContext();
  const { orderId } = useParams();
  const navigate = useNavigate();

  const onSubmit = (formData: any) => {
    const isDifferentUser = getValues("isDiffUser");

    const combinedData = {
      ...userData,
      ...(isDifferentUser && formData)
    };

    const { termsAgreement, isDiffUser, paymentOptions, ...decodedData } =
      combinedData;

    console.log("서버에 전송: ", decodedData);
    navigate(`/orders/${orderId}/complete`);
  };

  return (
    <CustomForm.Button
      width="100%"
      type="submit"
      onClick={handleSubmit(onSubmit)}
      disabled={!isValid}
      colorScheme={isValid ? "pink" : "grey"}
    >
      {price.toLocaleString()}원 결제하기
    </CustomForm.Button>
  );
};

export default PaymentSubmitButton;
