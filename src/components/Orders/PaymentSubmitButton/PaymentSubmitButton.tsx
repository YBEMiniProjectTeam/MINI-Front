import { useFormContext } from "react-hook-form";
import CustomForm from "@components/CustomForm/CustomForm";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
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

  const onSubmit = () => {
    const isDifferentUser = getValues("isDiffUser");

    const combinedData = {
      ...{ userData, cartIds },
      ...{ isDifferentUser, cartIds }
    };

    const queryString = cartIds
      .map((id) => `cartId=${encodeURIComponent(id)}`)
      .join("&");

    navigate(`/complete?${queryString}`);
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
