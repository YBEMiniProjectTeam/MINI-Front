import React, { useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { Collapse } from "@chakra-ui/react";
import * as styles from "./Payment.styles";
import DiffUserInfoField from "@components/Orders/DiffUserInfoField/DiffUserInfoField";
import ReservationInfo from "@components/Orders/ReservationInfo/ReservationInfo";
import UserInfoField from "@components/Orders/UserInfoField/UserInfoField";
import PaymentInfo from "@components/Orders/PaymentInfo/PaymentInfo";
import Card from "@components/Card/Card";
import TermsAgreementField from "@components/Orders/TermsAgreementField/TermsAgreementField";
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
  const { data: paymentData, isLoading, error } = usePayment(orderId!);
  const { data: userData } = useUserInfo();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const dummyData = paymentData?.rawData.data;
  const reservationData = paymentData?.reservationData;

  const user = userData.data;

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
            <UserInfoField data={user} />
            <styles.UserInfoWhenDiffWrapper>
              <Controller
                name="isDiffUser"
                control={methods.control}
                render={({ field: { onChange, value, ref } }) => (
                  <styles.StyledCheckBox
                    ref={ref}
                    isChecked={value}
                    size="lg"
                    onChange={(e) => {
                      onChange(e.target.checked);
                      setIsDiffUser(e.target.checked);
                    }}
                  >
                    <styles.Item> 예약자와 투숙자가 다릅니다.</styles.Item>
                  </styles.StyledCheckBox>
                )}
              />
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
          <PaymentInfo data={reservationData} />
        </Card>
        <Card>
          <TermsAgreementField />
        </Card>
        <PaymentSubmitButton price={dummyData.price} userData={user} />
      </FormProvider>
    </styles.Container>
  );
};
