import { useNavigate } from "react-router-dom";
import { ReservationListProps } from "./ReservationList.types";

import { Box, Flex, Divider, Grid, GridItem, Image } from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";

const ReservationList = ({
  data
}: {
  data: ReservationListProps;
}): JSX.Element => {
  const navigate = useNavigate();

  const { accommodation_name, room_info } = data;
  const { checkIn, checkOut, payAt, paymentId, roomName, thumbnail } =
    room_info;

  const today = new Date();
  const reservedDate = new Date(checkIn);

  const handleDetailsButton = () => {
    navigate(`/reservationDetails?id=${paymentId}&image=${thumbnail}`);
  };
  return (
    <Box bg="#F8F8F9" padding="20px">
      <Box
        border="1px solid #E7E7E7"
        borderRadius="6px"
        padding="20px"
        bg="#fff"
      >
        <Flex justifyContent="space-between" margin="0 15px">
          <Box fontSize="15px" fontWeight={600}>
            {payAt}
          </Box>
          <Box
            as="button"
            display="flex"
            gap="5px"
            alignItems="center"
            color="#166FA7"
            fontSize="15px"
            fontWeight={600}
            onClick={handleDetailsButton}
          >
            상세보기
            <FaArrowRightLong />
          </Box>
        </Flex>
        <Divider margin="20px 0" borderColor="#D9D9D9" />
        <Flex margin="0 15px" justifyContent="space-between">
          <Flex
            flexDir="column"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            {today > reservedDate ? (
              <Box
                display="inline-block"
                bg="#CFCFCF"
                fontSize="13px"
                fontWeight={600}
                padding="2px 5px"
                borderRadius="5px"
              >
                이용 완료
              </Box>
            ) : (
              <Box
                display="inline-block"
                bg="#D63F8B"
                color="#fff"
                fontSize="13px"
                fontWeight={600}
                padding="2px 5px"
                borderRadius="5px"
              >
                이용 예정
              </Box>
            )}
            <Box>
              <Box fontSize="18px" fontWeight={600}>
                {accommodation_name}
              </Box>
              <Box fontSize="14px" fontWeight={600} color="#7F7F7F">
                {roomName}
              </Box>
            </Box>
            <Grid templateColumns="60px 200px" templateRows="20px 20px">
              <GridItem fontSize="14px" fontWeight={600} color="#7F7F7F">
                체크인
              </GridItem>
              <GridItem fontSize="14px" fontWeight={500}>
                {checkIn}
              </GridItem>
              <GridItem fontSize="14px" fontWeight={600} color="#7F7F7F">
                체크아웃
              </GridItem>
              <GridItem fontSize="14px" fontWeight={500}>
                {checkOut}
              </GridItem>
            </Grid>
          </Flex>
          <Image
            src={thumbnail}
            w="230px"
            h="130px"
            objectFit="cover"
            loading="lazy"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default ReservationList;
