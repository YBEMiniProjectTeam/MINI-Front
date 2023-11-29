import { getAuthCookie } from "@utils/getAuthCookie.ts";
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
  const [searchParams] = useSearchParams();
  const cartIds = searchParams.getAll("cartId").map(Number);
  const { headers } = getAuthCookie();

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/reservations?Status=oncoming`);
  };

  // FIXME: api 변경 요청
  const reservationName = "예약자";

  const { data } = useCompletedPayment(cartIds, reservationName, headers);

  const dummyData = data.rawData;
  const reservationData = data.reservationData;

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
        <PaymentInfo data={reservationData} price={dummyData.price} />
      </Card>
      <CustomForm.Button width="100%" onClick={handleNavigate}>
        예약 확인
      </CustomForm.Button>
    </styles.Container>
  );
};

export default CompletePayment;
