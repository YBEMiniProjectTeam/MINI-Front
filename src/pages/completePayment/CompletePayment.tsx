import { getAuthLocalStorage } from "@utils/getAuthLocalStorage.ts";
import React from "react";
import * as styles from "./CompletePayment.styles";
import Card from "@components/Card/Card";
import ReservationInfo from "@components/Orders/ReservationInfo/ReservationInfo.tsx";
import SuccessMark from "@components/CompletePayment/SuccessCheck.tsx";
import PaymentInfo from "@components/Orders/PaymentInfo/PaymentInfo";
import { useCompletedPayment } from "@hooks/useCompletedPaymentQuery";
import CustomForm from "@components/CustomForm/CustomForm.tsx";
import { useNavigate, useSearchParams } from "react-router-dom";

const CompletePayment = () => {
  const navigate = useNavigate();
  const { headers } = getAuthLocalStorage();

  const handleNavigate = () => {
    navigate(`/reservations?Status=oncoming`);
  };

  const [searchParams] = useSearchParams();
  const orderIdString = searchParams.get("orderId");
  const orderId = orderIdString ? Number(orderIdString) : null;

  const { data } = useCompletedPayment(orderId!, headers);

  const dummyData = data.rawData;
  const reservationName = data.reservationName;
  const totalPrice = data.totalPrice;
  const reservationData = data.reservationData;

  console.log(dummyData);

  return (
    <styles.Container>
      <Card>
        <styles.SuccessInfoWrapper>
          <SuccessMark />
          {reservationName}님의 <br /> 결제가 완료되었습니다!
        </styles.SuccessInfoWrapper>
        {dummyData.map((reservation) => (
          <ReservationInfo
            key={reservation.accommodation_name}
            roomInfo={reservation.room_info}
          />
        ))}
      </Card>
      {data.reservationData.map((reservationGroup, index) => (
        <Card key={index}>
          <PaymentInfo data={reservationGroup} totalPrice={totalPrice} />
        </Card>
      ))}
      <CustomForm.Button width="100%" onClick={handleNavigate}>
        예약 확인
      </CustomForm.Button>
    </styles.Container>
  );
};

export default CompletePayment;
