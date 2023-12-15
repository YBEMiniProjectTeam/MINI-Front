import { Box, Flex, Text } from "@chakra-ui/react";
import type { ReservationInfoProps } from "./ReservationInfo.types";
import * as styles from "./ReservationInfo.styles";

const ReservationInfo = ({
  hotelName,
  accommodationType,
  children
}: ReservationInfoProps) => {
  return (
    <>
      <Flex flexDir="column" alignItems="flex-start">
        <Text
          display="inline-block"
          color="#bf4673"
          fontSize="12px"
          fontWeight={600}
        >
          {accommodationType || "정보없음"}
        </Text>
        <Box fontSize="lg" fontWeight={700} lineHeight="1">
          <span className="hotel-name">{hotelName}</span>
        </Box>
        {children}
      </Flex>
      <styles.Divider />
    </>
  );
};

export default ReservationInfo;
