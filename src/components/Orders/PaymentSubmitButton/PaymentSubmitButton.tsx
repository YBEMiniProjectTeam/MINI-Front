import React from "react";
import { useFormContext } from "react-hook-form";
import CustomForm from "@components/CustomForm/CustomForm";
import { dummyReservationInfo } from "@pages/payment/Payment.data";

const PaymentSubmitButton: React.FC = () => {
  const { handleSubmit } = useFormContext();

  const dummyData = dummyReservationInfo.data.price;

  const onSubmit = () => {
    console.log("결제하기 버튼 클릭됨");
  };

  return (
    <CustomForm.Button
      width="100%"
      type="submit"
      onClick={handleSubmit(onSubmit)}
    >
      {dummyData} 결제하기
    </CustomForm.Button>
  );
};

export default PaymentSubmitButton;
