import { getAuthCookie } from "@utils/getAuthCookie";
import { usePaymentDetailsQuery } from "@hooks/useReservationsQuery";
import { Image, Flex, Box, Divider } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { formatPrice } from "@utils/priceFormatter";

export const ReservationDetails = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const thumbnail = searchParams.get("image");

  const { headers } = getAuthCookie();
  const { data } = usePaymentDetailsQuery(id, { headers });
  const {
    accommodation_name,
    check_in,
    check_out,
    guest_email,
    guest_name,
    price,
    reservation_no,
    reservation_user_email,
    reservation_user_name,
    room_name
  } = data;

  return (
    <>
      <Image
        src={thumbnail as string}
        objectFit="cover"
        w="100%"
        h="200px"
        loading="lazy"
      />
      <Flex gap="15px" color="#7F7F7F" fontWeight={500} marginTop="30px">
        <Box
          fontSize="14px"
          marginBottom="10px"
          position="relative"
          _before={{
            content: '"|"',
            color: "#D9D9D9",
            position: "absolute",
            left: "54px"
          }}
        >
          예약 번호
        </Box>
        <Box fontSize="14px">{reservation_no}</Box>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Box fontSize="30px" fontWeight={700}>
          {accommodation_name}
        </Box>
        {/* <Box as="button">
          <RxDoubleArrowRight size="25px" />
        </Box> */}
      </Flex>
      <Box color="#7F7F7F" fontSize="20px" fontWeight={600}>
        {room_name}
      </Box>
      <Divider margin="30px 0" borderColor="#D9D9D9" />
      <Flex justifyContent="space-evenly" alignItems="center">
        <Flex flexDir="column" alignItems="center">
          <Box color="#7F7F7F" fontSize="14px" fontWeight={500}>
            체크인
          </Box>
          <Box fontSize="18px" fontWeight={500}>
            {check_in}
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
            {check_out}
          </Box>
        </Flex>
      </Flex>
      <Divider margin="30px 0" borderColor="#D9D9D9" />
      <Flex flexDir="column" gap="10px">
        <Box fontSize="22px" fontWeight={700}>
          예약자 정보
        </Box>
        <Flex justifyContent="space-between">
          <Box color="#7F7F7F" fontSize="18px" fontWeight={500}>
            이름
          </Box>
          <Box fontSize="18px" fontWeight={500}>
            {reservation_user_name}
          </Box>
        </Flex>
        <Flex justifyContent="space-between">
          <Box color="#7F7F7F" fontSize="18px" fontWeight={500}>
            이메일
          </Box>
          <Box fontSize="18px">{reservation_user_email}</Box>
        </Flex>
      </Flex>
      <Divider margin="30px 0" borderColor="#D9D9D9" />
      <Flex flexDir="column" gap="10px">
        <Box fontSize="22px" fontWeight={700}>
          이용자 정보
        </Box>
        <Flex justifyContent="space-between">
          <Box color="#7F7F7F" fontSize="18px" fontWeight={500}>
            이름
          </Box>
          <Box fontSize="18px" fontWeight={500}>
            {guest_name || reservation_user_name}
          </Box>
        </Flex>
        <Flex justifyContent="space-between">
          <Box color="#7F7F7F" fontSize="18px" fontWeight={500}>
            이메일
          </Box>
          <Box fontSize="18px">{guest_email || reservation_user_email}</Box>
        </Flex>
      </Flex>
      <Divider margin="30px 0" borderColor="#D9D9D9" />
      <Flex flexDir="column" gap="10px">
        <Box fontSize="22px" fontWeight={700}>
          결제 금액
        </Box>
        <Flex justifyContent="space-between">
          <Box color="#7F7F7F" fontSize="18px" fontWeight={500}>
            총 결제 금액
          </Box>
          <Box fontSize="20px" fontWeight={700}>
            {formatPrice(price)}원
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
