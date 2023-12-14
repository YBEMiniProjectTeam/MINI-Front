import { useGetPaymentDetails } from "@hooks/useReservationsMutation";
import { useDeleteReservation } from "@hooks/useReservationsMutation";
import {
  Image,
  Flex,
  Box,
  Divider,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { formatPrice } from "@utils/priceFormatter";

const ReservationDetails = () => {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const thumbnail = searchParams.get("image");

  const { data } = useGetPaymentDetails(id);
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
  const { mutate: deleteReservation } = useDeleteReservation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const today = new Date();
  const reservedDate = new Date(check_in);

  const handleDeleteReservation = () => {
    deleteReservation({ id });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" marginTop="20px">
            예약을 취소하시겠습니까?
          </ModalHeader>
          <ModalFooter display="flex" justifyContent="center" gap="20px">
            <Button mr={3} onClick={handleDeleteReservation}>
              확인
            </Button>
            <Button variant="ghost" onClick={onClose}>
              취소
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
      {today > reservedDate ? (
        <Button colorScheme="gray" size="md" marginTop="20px">
          예약 취소
        </Button>
      ) : (
        <Button size="md" marginTop="20px" onClick={onOpen}>
          예약 취소
        </Button>
      )}
    </>
  );
};

export default ReservationDetails;
