import React from "react";
import * as styles from "./CompletePayment.styles";
import Card from "@components/Card/Card";
import ReservationInfo from "@components/Orders/ReservationInfo/ReservationInfo.tsx";
import SuccessMark from "@components/CompletePayment/SuccessCheck.tsx";
import PaymentSummary from "@components/Orders/PaymentSummary/PaymentSummary.tsx";
import { useCompletePayment } from "@hooks/useCompletePaymentQuery.ts";
import CustomForm from "@components/CustomForm/CustomForm.tsx";
import { useNavigate } from "react-router-dom";

const CompletePayment: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/reservations?rStatus=oncoming`);
  };
  const { data, isLoading, error } = useCompletePayment();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const dummyData = data?.rawData.data;
  const reservationData = data?.reservationData;

  return (
    <styles.Container>
      <Card>
        <ReservationInfo dummyData={dummyData}>
          <styles.SuccessInfoWrapper>
            <SuccessMark />
            {dummyData.userInfo.name}님의 <br /> 결제가 완료되었습니다!
          </styles.SuccessInfoWrapper>
        </ReservationInfo>
      </Card>
      <Card>
        <PaymentSummary data={reservationData} price={dummyData.price} />
      </Card>
      <CustomForm.Button width="100%" onClick={handleNavigate}>
        예약 확인
      </CustomForm.Button>
    </styles.Container>
  );
};

export default CompletePayment;
