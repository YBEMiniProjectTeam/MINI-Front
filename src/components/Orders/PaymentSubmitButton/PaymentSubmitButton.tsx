import { useFormContext } from "react-hook-form";
import CustomForm from "@components/CustomForm/CustomForm";
import { useNavigate, useParams } from "react-router-dom";

const PaymentSubmitButton = ({ price }: { price: number }) => {
  const {
    handleSubmit,
    formState: { isValid }
  } = useFormContext();
  const { orderId } = useParams();
  const navigate = useNavigate();

  const onSubmit = () => {
    console.log("결제하기 버튼 클릭됨");
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
