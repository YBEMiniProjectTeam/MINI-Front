import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { IoBedOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const ChooseRoom = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>객실 편의시설</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
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
          <Flex flexDirection="column">
            <Box fontSize="26px" fontWeight={700} marginBottom="50px">
              A동 전실
            </Box>
            <Flex
              fontSize="16px"
              alignItems="center"
              gap="5px"
              marginBottom="3px"
            >
              <IoBedOutline />
              체크인시 배정
            </Flex>
            <Flex
              fontSize="16px"
              alignItems="center"
              gap="5px"
              marginBottom="10px"
            >
              <BsPerson />
              2인 기준 / 최대 4인
            </Flex>
          </Flex>
          <Flex flexDirection="column" justifyContent="space-between">
            <Box
              as="button"
              display="flex"
              alignItems="center"
              gap="2px"
              color="#166FA7"
              fontWeight={600}
              onClick={onOpen}
            >
              객실 편의시설
              <IoIosArrowForward size="19px" />
            </Box>
            <Flex flexDirection="column" alignItems="flex-end">
              <Box fontSize="14px">숙박</Box>
              <Box fontSize="20px" fontWeight={800}>
                110,000원
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default ChooseRoom;
