import RoomInfo from "@components/Orders/RoomInfo/RoomInfo";
import TotalPaymentInfo from "@components/Orders/TotalPaymentInfo/TotalPaymentInfo";
import { getAuthLocalStorage } from "@utils/getAuthLocalStorage";
import Lottie from "lottie-react";
import * as styles from "./CompletePayment.styles";
import Card from "@components/Card/Card";
import ReservationInfo from "@components/Orders/ReservationInfo/ReservationInfo";
import PaymentInfo from "@components/Orders/PaymentInfo/PaymentInfo";
import { useCompletedPayment } from "@hooks/useCompletedPaymentQuery";
import CustomButton from "@components/CustomForm/CustomButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import successCheckLottie from "@assets/lottie/success_check.json";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image
} from "@chakra-ui/react";

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

  const rawData = data.rawData;
  const reservationName = data.reservationName;
  const totalPrice = data.totalPrice;
  const reservationData = data.reservationData;

  return (
    <styles.Container>
      <Card>
        <styles.SuccessInfoWrapper>
          <Lottie
            animationData={successCheckLottie}
            loop={false}
            style={{ width: 96, height: 96 }}
          />
          {reservationName}님의 <br /> 결제가 완료되었습니다!
        </styles.SuccessInfoWrapper>
        {rawData.map((accommodation, index) => (
          <styles.CardContainer key={index}>
            <Image
              src={accommodation.accommodation_thumbnail_url}
              w="130px"
              h="130px"
              objectFit="cover"
              loading="lazy"
              borderRadius="5px"
              marginRight="1rem"
            />
            <Box width="100%" key={index}>
              <ReservationInfo
                key={`${index}-${accommodation.room_info}`}
                hotelName={accommodation.accommodation_name}
                accommodationType={accommodation.accommodation_type}
              >
                <RoomInfo
                  key={`${index}-${accommodation.room_info.roomName}`}
                  roomInfo={accommodation.room_info}
                />
              </ReservationInfo>
            </Box>
          </styles.CardContainer>
        ))}
      </Card>
      <Card label="결제 정보">
        <Accordion allowToggle>
          <AccordionItem>
            <TotalPaymentInfo totalPrice={totalPrice}>
              <AccordionButton width="auto" borderRadius="5px">
                <AccordionIcon width="auto" />
              </AccordionButton>
            </TotalPaymentInfo>
            <AccordionPanel>
              {reservationData.map((reservationGroup, index) => (
                <styles.PaymentInfoWrapper key={index}>
                  <PaymentInfo data={reservationGroup} />
                </styles.PaymentInfoWrapper>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Card>
      <CustomButton width="100%" onClick={handleNavigate}>
        예약 확인
      </CustomButton>
    </styles.Container>
  );
};

export default CompletePayment;
