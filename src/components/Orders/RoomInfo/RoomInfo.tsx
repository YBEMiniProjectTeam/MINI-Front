import {
  Box,
  Flex,
  Text,
  HStack,
  Icon,
  Grid,
  GridItem,
  Tooltip
} from "@chakra-ui/react";
import { calculateNights } from "@utils/calculateNights";
import { BsPerson } from "react-icons/bs";
import { RoomInfoProps } from "./RoomInfo.types";
import * as styles from "./RoomInfo.styles";
import { CiCircleInfo } from "react-icons/ci";

const RoomInfo = ({ roomInfo }: RoomInfoProps) => {
  if (!roomInfo) return null;

  const checkInDate = roomInfo.checkIn?.split(" ")[0] || roomInfo.checkInDate;
  const checkInTime = roomInfo.checkIn?.split(" ")[1] || roomInfo.checkInTime;
  const checkOutDate =
    roomInfo.checkOut?.split(" ")[0] || roomInfo.checkOutDate;
  const checkOutTime =
    roomInfo.checkOut?.split(" ")[1] || roomInfo.checkOutTime;

  const nights = calculateNights({
    checkInDate,
    checkOutDate,
    checkInTime,
    checkOutTime
  });

  return (
    <Box width="full">
      <Text fontSize="16px" fontWeight="bold" mb="2">
        {roomInfo.roomName}
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap="4" alignItems="end">
        <GridItem>
          <Text fontSize="sm" color="gray.500">
            체크인
          </Text>
          <Text fontSize="md" fontWeight="500">
            {checkInDate}
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            {checkInTime}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="sm" color="gray.500">
            체크아웃
          </Text>
          <Text fontSize="md" fontWeight="500">
            {checkOutDate}
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            {checkOutTime}
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <HStack justifyContent="space-between" width="full">
            <HStack spacing="1" alignItems="center">
              <Icon as={BsPerson} />
              <Text fontSize="sm">
                기준 {roomInfo.capacity}명 / 최대 {roomInfo.capacityMax}명
              </Text>
            </HStack>
            {roomInfo.checkInDate && ( // 결제페이지 & 결제완료페이지 조건부 렌더링
              <Flex alignItems="center" gap="8px">
                <Box
                  display="inline-block"
                  bg="#FDDCEC"
                  color="#D63F8B"
                  fontSize="sm"
                  fontWeight={600}
                  padding="0.1rem 0.5rem"
                  borderRadius="5px"
                >
                  {nights}
                </Box>
                <Text fontSize="lg" fontWeight="bold">
                  {(roomInfo.price * roomInfo.quantity).toLocaleString()}원
                </Text>
                <Tooltip
                  label={`${roomInfo.price.toLocaleString()} * ${
                    roomInfo.quantity
                  }개`}
                  closeOnClick={false}
                  placement="top-end"
                  fontSize="sm"
                  padding="0.5rem 0.9rem"
                  marginBottom="5px"
                  borderRadius="5px"
                  bg="gray.100"
                  color="gray.500"
                  arrowSize={15}
                  hasArrow
                >
                  <styles.InfoButton>
                    <CiCircleInfo />
                  </styles.InfoButton>
                </Tooltip>
              </Flex>
            )}
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default RoomInfo;
