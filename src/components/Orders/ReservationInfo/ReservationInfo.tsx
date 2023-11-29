import { Box, Flex } from "@chakra-ui/react";
import type { ReservationInfoProps } from "./ReservationInfo.types";
import * as styles from "./ReservationInfo.styles";

const ReservationInfo = ({ hotelName, children }: ReservationInfoProps) => {
  return (
    <>
      <Box padding="1.5rem 1rem 0.8rem">
        <Flex flexDir="column" alignItems="flex-start">
          <Box fontSize="lg" fontWeight={700} lineHeight="1">
            {hotelName}
          </Box>
          {children}
        </Flex>
      </Box>
      <styles.Divider />
    </>
  );
};

export default ReservationInfo;
