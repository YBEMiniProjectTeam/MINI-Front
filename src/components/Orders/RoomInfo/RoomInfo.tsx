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
  const nights = calculateNights({
    checkInDate: roomInfo.checkInDate,
    checkOutDate: roomInfo.checkOutDate,
    checkInTime: roomInfo.checkInTime,
    checkOutTime: roomInfo.checkOutTime
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
          <Text fontSize="md" fontWeight="500" className="check-in">
            {roomInfo.checkInDate}
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            {roomInfo.checkInTime}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="sm" color="gray.500">
            체크아웃
          </Text>
          <Text fontSize="md" fontWeight="500" className="check-out">
            {roomInfo.checkOutDate}
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            {roomInfo.checkOutTime}
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
            {roomInfo.checkInDate && (
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
                <Text fontSize="lg" fontWeight="bold" className="item-price">
                  {(roomInfo.price * roomInfo.quantity).toLocaleString()}원
                </Text>
                <Tooltip
                  label={`${roomInfo.price.toLocaleString()}원 x ${
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
