import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useUserInfo } from "@hooks/useUserInfoQuery";
import { usePayment } from "@hooks/usePaymentQuery";
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
import DiffUserCheckbox from "@components/Orders/DiffUserCheckbox/DiffUserCheckbox";
import PaymentOptionsForm from "@components/Orders/PaymentOptionsForm/PaymentOptionsForm";
import { getAuthLocalStorage } from "@utils/getAuthLocalStorage";

export const Payment = () => {
  const methods = useForm({
    mode: "onChange"
  });

  const [isDiffUser, setIsDiffUser] = useState(false);

  const [searchParams] = useSearchParams();
  const cartIds = searchParams.getAll("cartId").map(Number);

  const { headers } = getAuthLocalStorage();

  const { data: paymentData } = usePayment(cartIds, headers);
  const { data: userData } = useUserInfo(headers);

  const dummyData = paymentData.rawData;
  const reservationData = paymentData.reservationData;

  return (
    <styles.Container>
      <FormProvider {...methods}>
        <Card>
          {dummyData.map((accommodation) => (
            <>
              {accommodation.roomInfos.map((roomInfo) => (
                <ReservationInfo key={roomInfo.roomName} roomInfo={roomInfo}>
                  <AccommodationInfo
                    key={roomInfo.roomName}
                    hotelName={accommodation.accommodationName}
                    roomInfo={roomInfo}
                  />
                </ReservationInfo>
              ))}
            </>
          ))}
        </Card>
        <Card label="예약자 정보">
          <UserInfoForm userData={userData} />
          <DiffUserCheckbox setIsDiffUser={setIsDiffUser} />
          <Collapse in={isDiffUser} animateOpacity>
            {isDiffUser && <DiffUserInfoForm />}
          </Collapse>
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
        <PaymentSubmitButton
          totalPrice={reservationData[0].value}
          cartIds={cartIds}
          userData={userData}
        />
      </FormProvider>
    </styles.Container>
  );
};
