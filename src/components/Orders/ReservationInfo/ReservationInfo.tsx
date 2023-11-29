import { Box, Divider, Flex } from "@chakra-ui/react";
import * as styles from "./ReservationInfo.styles";
import type { ReservationInfoProps } from "./ReservationInfo.types";
import { calculateNights } from "@utils/calculateNights";

const ReservationInfo = ({ children, roomInfo }: ReservationInfoProps) => {
  if (!roomInfo) return;

  const checkInDate = roomInfo.check_in?.split(" ")[0] || roomInfo.checkInDate;
  const checkInTime = roomInfo.check_in?.split(" ")[1] || roomInfo.checkInTime;
  const checkOutDate =
    roomInfo.check_out?.split(" ")[0] || roomInfo.checkOutDate;
  const checkOutTime =
    roomInfo.check_out?.split(" ")[1] || roomInfo.checkOutTime;

  const nights = calculateNights(checkInDate!, checkOutDate!);

  console.log(roomInfo);
  return (
    <styles.Container>
      <styles.TopContainer>{children}</styles.TopContainer>
      <Flex justifyContent="space-evenly" alignItems="center">
        <Flex flexDir="column" alignItems="center">
          <Box color="#7F7F7F" fontSize="0.9rem" fontWeight={500}>
            체크인
          </Box>
          <Box fontSize="1rem" fontWeight={500}>
            {checkInDate}
          </Box>
          <Box fontSize="1.1rem" fontWeight={800}>
            {checkInTime}
          </Box>
        </Flex>
        <Box
          display="inline-block"
          bg="#FDDCEC"
          color="#D63F8B"
          fontSize="0.8rem"
          fontWeight={600}
          padding="0.2rem 0.6rem"
          borderRadius="5px"
        >
          {nights}박
        </Box>
        <Flex flexDir="column" alignItems="center">
          <Box color="#7F7F7F" fontSize="0.9rem" fontWeight={500}>
            체크아웃
          </Box>
          <Box fontSize="1rem" fontWeight={500}>
            {checkOutDate}
          </Box>
          <Box fontSize="1.1rem" fontWeight={800}>
            {checkOutTime}
          </Box>
        </Flex>
      </Flex>
      <Divider margin="1rem 0" borderColor="rgb(240, 240, 240)" />
      <styles.PriceLabel>
        <styles.PriceItem>
          <b>{roomInfo.price?.toLocaleString()}</b>원
        </styles.PriceItem>
        <styles.PriceDesc>취소 및 환불불가</styles.PriceDesc>
      </styles.PriceLabel>
    </styles.Container>
  );
};

export default ReservationInfo;
