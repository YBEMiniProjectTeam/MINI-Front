import { Box, Divider, Flex } from "@chakra-ui/react";
import * as styles from "./ReservationInfo.styles.ts";
import type { ReservationInfoProps } from "./ReservationInfo.types";

const ReservationInfo = ({ children, roomInfo }: ReservationInfoProps) => {
  return (
    <styles.Container>
      <styles.TopContainer>{children}</styles.TopContainer>
      <Flex justifyContent="space-evenly" alignItems="center">
        <Flex flexDir="column" alignItems="center">
          <Box color="#7F7F7F" fontSize="14px" fontWeight={500}>
            체크인
          </Box>
          <Box fontSize="18px" fontWeight={500}>
            {roomInfo?.checkInDate}
          </Box>
          <Box fontSize="22px" fontWeight={800}>
            {roomInfo?.checkInTime}
          </Box>
        </Flex>
        <Box
          display="inline-block"
          bg="#FDDCEC"
          color="#D63F8B"
          fontSize="13px"
          fontWeight={600}
          padding="5px 10px"
          borderRadius="5px"
        >
          1박
        </Box>
        <Flex flexDir="column" alignItems="center">
          <Box color="#7F7F7F" fontSize="14px" fontWeight={500}>
            체크아웃
          </Box>
          <Box fontSize="18px" fontWeight={500}>
            {roomInfo?.checkOutDate}
          </Box>
          <Box fontSize="22px" fontWeight={800}>
            {roomInfo?.checkOutTime}
          </Box>
        </Flex>
      </Flex>
      <Divider margin="1rem 0" borderColor="rgb(240, 240, 240)" />
      <styles.PriceLabel>
        <styles.PriceItem>
          <b>{roomInfo?.price.toLocaleString()}</b>원
        </styles.PriceItem>
        <styles.PriceDesc>취소 및 환불불가</styles.PriceDesc>
      </styles.PriceLabel>
    </styles.Container>
  );
};

export default ReservationInfo;

// import * as styles from "./ReservationInfo.styles.ts";
// import type { ReservationInfoProps } from "./ReservationInfo.types";
//
// const ReservationInfo = ({ children, roomInfo }: ReservationInfoProps) => {
//   return (
//     <styles.Container>
//       <styles.TopContainer>{children}</styles.TopContainer>
//       <styles.StayPeriodContainer>
//         <styles.StayPeriodDetail>2박</styles.StayPeriodDetail>
//         <styles.StayPeriodBox>
//           <span className="type">체크인</span>
//           <div className="date">{roomInfo?.checkInDate}</div>
//           <div className="time">{roomInfo?.checkInTime}</div>
//         </styles.StayPeriodBox>
//         <styles.StayPeriodBox>
//           <span className="type">체크아웃</span>
//           <div className="date">{roomInfo?.checkOutDate}</div>
//           <div className="time">{roomInfo?.checkOutTime}</div>
//         </styles.StayPeriodBox>
//       </styles.StayPeriodContainer>
//       <styles.PriceLabel>
//         <styles.PriceItem>
//           <b>{roomInfo?.price.toLocaleString()}</b>원
//         </styles.PriceItem>
//         <styles.PriceDesc>취소 및 환불불가</styles.PriceDesc>
//       </styles.PriceLabel>
//     </styles.Container>
//   );
// };
//
// export default ReservationInfo;
