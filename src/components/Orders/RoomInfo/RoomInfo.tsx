import {
  Box,
  Flex,
  Text,
  HStack,
  Icon,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { calculateNights } from "@utils/calculateNights";
import { BsPerson } from "react-icons/bs";
import { RoomInfoProps } from "./RoomInfo.types";

const RoomInfo = ({ roomInfo }: RoomInfoProps) => {
  if (!roomInfo) return null;

  const nights = calculateNights(roomInfo.checkInDate!, roomInfo.checkOutDate!);

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
          <Text fontSize="md" fontWeight="bold">
            {roomInfo.checkInDate}
          </Text>
          <Text fontSize="lg">{roomInfo.checkInTime}</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="sm" color="gray.500">
            체크아웃
          </Text>
          <Text fontSize="md" fontWeight="bold">
            {roomInfo.checkOutDate}
          </Text>
          <Text fontSize="lg">{roomInfo.checkOutTime}</Text>
        </GridItem>
        <GridItem colSpan={2}>
          <HStack justifyContent="space-between" width="full">
            <HStack spacing="1" alignItems="center">
              <Icon as={BsPerson} />
              <Text fontSize="sm">
                기준 {roomInfo.capacity}명 / 최대 {roomInfo.capacityMax}명
              </Text>
            </HStack>
            {roomInfo.roomName && (
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
                  {nights}박
                </Box>
                <Text fontSize="lg" fontWeight="bold">
                  {roomInfo.price.toLocaleString()}원
                </Text>
              </Flex>
            )}
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default RoomInfo;
