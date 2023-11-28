import { Box, Divider, Flex } from "@chakra-ui/react";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { AccommodationInfoProps } from "./AccommodationInfo.types";

const AccommodationInfo = ({ roomInfo, hotelName }: AccommodationInfoProps) => {
  return (
    <>
      <Flex alignItems="center">
        <Box fontSize="1.3rem" fontWeight={700}>
          {hotelName}
        </Box>
      </Flex>
      <Box color="#7F7F7F" fontSize="1rem" fontWeight={500}>
        {roomInfo.roomName}
      </Box>
      <Flex
        alignItems="center"
        color="#7F7F7F"
        fontSize="0.9rem"
        marginTop="0.5rem"
      >
        <LiaUserFriendsSolid /> 기준 {roomInfo.capacity}명 / 최대{" "}
        {roomInfo.capacityMax}명
      </Flex>
      <Divider margin="1rem 0" borderColor="rgb(240, 240, 240)" />
    </>
  );
};

export default AccommodationInfo;
