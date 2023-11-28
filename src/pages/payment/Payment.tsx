import DiffUserCheckbox from "@components/Orders/DiffUserCheckbox/DiffUserCheckbox.tsx";
import PaymentOptionsForm from "@components/Orders/PaymentOptionsForm/PaymentOptionsForm.tsx";
import VisitOptionsForm from "@components/Orders/VisitOptionsForm/VisitOptionsForm.tsx";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Collapse } from "@chakra-ui/react";
import * as styles from "./Payment.styles";
import DiffUserInfoForm from "@components/Orders/DiffUserInfoForm/DiffUserInfoForm.tsx";
import ReservationInfo from "@components/Orders/ReservationInfo/ReservationInfo";
import UserInfoForm from "@components/Orders/UserInfoForm/UserInfoForm.tsx";
import PaymentInfo from "@components/Orders/PaymentInfo/PaymentInfo";
import Card from "@components/Card/Card";
import TermsAgreementForm from "@components/Orders/TermsAgreementForm/TermsAgreementForm.tsx";
import PaymentSubmitButton from "@components/Orders/PaymentSubmitButton/PaymentSubmitButton";
import AccommodationInfo from "@components/Orders/ReservationInfo/AccommodationInfo/AccommodationInfo";
import { usePayment } from "@hooks/usePaymentQuery";
import { useParams } from "react-router-dom";
import { useUserInfo } from "@hooks/useUserInfoQuery";

export const Payment: React.FC = () => {
  const methods = useForm({
    mode: "onChange"
  });
  const [isDiffUser, setIsDiffUser] = useState(false);

  const { orderId } = useParams();
  const { data: paymentData } = usePayment(orderId!);
  const { data: userData } = useUserInfo();

  const dummyData = paymentData.rawData.data;
  const reservationData = paymentData.reservationData;

  const user = userData.data;

  return (
    <styles.Container>
      <FormProvider {...methods}>
        <Card>
          <ReservationInfo dummyData={dummyData}>
            <AccommodationInfo dummyData={dummyData} />
          </ReservationInfo>
          <Card label="예약자 정보">
            <UserInfoForm data={user} />
            <DiffUserCheckbox setIsDiffUser={setIsDiffUser} />
            <Collapse in={isDiffUser} animateOpacity>
              {isDiffUser && <DiffUserInfoForm />}
            </Collapse>
            {/*<VisitOptionsForm />*/}
          </Card>
        </Card>
        <Card label="결제 금액">
          <PaymentInfo data={reservationData} />
        </Card>
        <Card label="결제 수단">
          <PaymentOptionsForm />
        </Card>
        <Card>
          <TermsAgreementForm />
        </Card>
        <PaymentSubmitButton price={dummyData.price} userData={user} />
      </FormProvider>
    </styles.Container>
  );
};
