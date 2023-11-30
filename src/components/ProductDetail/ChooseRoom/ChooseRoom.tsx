import { ChooseRoomProps } from "./ChooseRoom.types";
import FacilitiesModal from "../FacilitiesModal/FacilitiesModal";
import { getAuthLocalStorage } from "@utils/getAuthLocalStorage";
import { usePostCart } from "@hooks/useCartMutation";
import { usePostPayment } from "@hooks/usePaymentMutation";
import { formatPrice } from "@utils/priceFormatter";
import { Box, Flex, useDisclosure, Button } from "@chakra-ui/react";
import { IoBedOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const ChooseRoom = ({
  room,
  checkInDate,
  checkOutDate
}: ChooseRoomProps): JSX.Element => {
  const { accessTokenCookie, headers } = getAuthLocalStorage();
  const { mutate: postCart } = usePostCart();
  const { mutate: postPayment } = usePostPayment();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    id,
    name,
    price,
    capacity,
    capacity_max,
    stock_quantity,
    description
  } = room;

  const body = {
    room_id: id,
    check_in_date: checkInDate,
    check_out_date: checkOutDate
  };

  const handleCartButton = () => {
    if (!accessTokenCookie) {
      alert("로그인이 필요한 서비스입니다!");
      return;
    }
    postCart({ body, headers });
  };

  const handlePayButton = () => {
    if (!accessTokenCookie) {
      alert("로그인이 필요한 서비스입니다!");
      return;
    }
    postPayment({ body, headers });
  };

  return (
    <>
      <FacilitiesModal
        isOpen={isOpen}
        onClose={onClose}
        description={description}
      />
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        border="1px solid #D9D9D9"
        borderRadius="6px"
        marginTop="20px"
        padding="30px"
      >
        <Box display="flex" justifyContent="space-between" w="100%">
          <Flex flexDirection="column" justifyContent="space-between">
            <Flex flexDirection="column">
              <Box fontSize="26px" fontWeight={700}>
                {name}
              </Box>
              {stock_quantity > 0 ? (
                <Box color="#D53F8C" fontSize="14px" fontWeight={700}>
                  남은 객실 {stock_quantity}개
                </Box>
              ) : (
                <Box
                  w="60px"
                  textAlign="center"
                  bg="#EDF2F7"
                  color="#7F7F7F"
                  fontSize="13px"
                  fontWeight={600}
                  padding="2px 5px"
                  borderRadius="5px"
                >
                  예약 완료
                </Box>
              )}
            </Flex>
            <Flex flexDirection="column">
              <Flex fontSize="15px" alignItems="center" gap="5px">
                <IoBedOutline />
                체크인시 배정
              </Flex>
              <Flex fontSize="15px" alignItems="center" gap="5px">
                <BsPerson />
                {capacity}인 기준 / 최대 {capacity_max}인
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDirection="column" justifyContent="space-between">
            <Box
              as="button"
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              gap="2px"
              color="#166FA7"
              fontWeight={700}
              onClick={onOpen}
            >
              객실 편의시설
              <IoIosArrowForward size="19px" />
            </Box>
            <Flex flexDirection="column" alignItems="flex-end" marginTop="20px">
              <Box fontSize="14px">숙박</Box>
              <Box fontSize="20px" fontWeight={800} marginBottom="3px">
                {formatPrice(price)}원
              </Box>
            </Flex>
            {stock_quantity ? (
              <Flex gap="10px">
                <Box
                  as="button"
                  border="1px solid #D9D9D9"
                  borderRadius="5px"
                  padding="5px"
                  onClick={handleCartButton}
                >
                  <IoCartOutline size="20px" />
                </Box>
                <Button size="sm" w="130px" onClick={handlePayButton}>
                  결제하기
                </Button>
              </Flex>
            ) : (
              <Flex gap="10px">
                <Box
                  as="button"
                  border="1px solid #EDF2F7"
                  bg="#EDF2F7"
                  borderRadius="5px"
                  padding="5px"
                >
                  <IoCartOutline size="20px" />
                </Box>
                <Button
                  colorScheme="gray"
                  border="1px solid #EDF2F7"
                  size="sm"
                  w="130px"
                >
                  결제하기
                </Button>
              </Flex>
            )}
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default ChooseRoom;
