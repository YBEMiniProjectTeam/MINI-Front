import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Collapse } from "@chakra-ui/react";
import * as styles from "./Payment.styles";
import DiffUserInfoField from "@components/Orders/DiffUserInfoField/DiffUserInfoField.tsx";
import ReservationInfo from "@components/Orders/ReservationInfo/ReservationInfo";
import UserInfoField from "@components/Orders/UserInfoField/UserInfoField.tsx";
import PaymentSummary from "@components/Orders/PaymentSummary/PaymentSummary";
import Card from "@components/Card/Card";
import TermsAgreementField from "@components/Orders/TermsAgreementField/TermsAgreementField.tsx";
import PaymentSubmitButton from "@components/Orders/PaymentSubmitButton/PaymentSubmitButton.tsx";

export const Payment: React.FC = () => {
  // const reservationData = location.state;
  // const { roomId, name, price, capacity, capacityMax } = reservationData;

  const methods = useForm({
    mode: "onChange"
  });

  const [isDiffUser, setIsDiffUser] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsDiffUser(e.target.checked);
  };

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  return (
    <styles.Container>
      <FormProvider {...methods}>
        <Card>
          <ReservationInfo />
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
              <DiffUserInfoField />
            </Collapse>
          </styles.CardContent>
        </Card>
        <Card>
          <styles.Label>
            <span>결제 금액</span>
          </styles.Label>
          <PaymentSummary />
        </Card>
        <Card>
          <TermsAgreementField />
        </Card>
        <PaymentSubmitButton />
      </FormProvider>
    </styles.Container>
  );
};
