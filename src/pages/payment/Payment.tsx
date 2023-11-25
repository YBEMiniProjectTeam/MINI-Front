import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Collapse } from "@chakra-ui/react";
import * as styles from "./Payment.styles";
import DiffUserInfoField from "@components/Orders/DiffUserInfoField/DiffUserInfoField.tsx";
import ReservationInfo from "@components/Orders/ReservationInfo/ReservationInfo.tsx";
import UserInfoField from "@components/Orders/UserInfoField/UserInfoField.tsx";
import PaymentSummary from "@components/Orders/PaymentInfo/PaymentInfotsx";
import Card from "@components/Card/Card";
import TermsAgreementField from "@components/Orders/TermsAgreementField/TermsAgreementField.tsx";
import PaymentSubmitButton from "@components/Orders/PaymentSubmitButton/PaymentSubmitButton.tsx";
import AccommodationInfo from "@components/Orders/ReservationInfo/AccommodationInfo/AccommodationInfo";
import { usePayment } from "@hooks/usePaymentQuery.ts";
import { useParams } from "react-router-dom";

export const Payment: React.FC = () => {
  const methods = useForm({
    mode: "onChange"
  });
  const [isDiffUser, setIsDiffUser] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsDiffUser(e.target.checked);
  };

  const { orderId } = useParams();
  const { data, isLoading, error } = usePayment(orderId!);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const dummyData = data?.rawData.data;
  const reservationData = data?.reservationData;

  return (
    <styles.Container>
      <FormProvider {...methods}>
        <Card>
          <ReservationInfo dummyData={dummyData}>
            <AccommodationInfo dummyData={dummyData} />
          </ReservationInfo>
          <styles.CardContent>
            <styles.Label>
              <span>예약자 정보</span>
            </styles.Label>
            <UserInfoField />
            <styles.UserInfoWhenDiffWrapper>
              <styles.StyledCheckBox size="lg" onChange={handleCheckboxChange}>
                <styles.Item>예약자와 투숙자가 다릅니다.</styles.Item>
              </styles.StyledCheckBox>
            </styles.UserInfoWhenDiffWrapper>
            <Collapse in={isDiffUser} animateOpacity>
              {isDiffUser && <DiffUserInfoField />}
            </Collapse>
          </styles.CardContent>
        </Card>
        <Card>
          <styles.Label>
            <span>결제 금액</span>
          </styles.Label>
          <PaymentSummary data={reservationData} />
        </Card>
        <Card>
          <TermsAgreementField />
        </Card>
        <PaymentSubmitButton price={dummyData.price} />
      </FormProvider>
    </styles.Container>
  );
};
