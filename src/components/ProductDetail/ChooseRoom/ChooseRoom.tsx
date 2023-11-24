import { Box, Flex } from "@chakra-ui/react";
import { IoBedOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";

export const ChooseRoom = (): JSX.Element => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      w="100%"
      border="1px solid #D9D9D9"
      borderRadius="6px"
      marginTop="20px"
      padding="20px"
      _hover={{ cursor: "pointer" }}
    >
      <Box display="flex" justifyContent="space-between" gap="10px" w="100%">
        <Flex flexDirection="column" flexGrow={1}>
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
          <Flex bg="#F9F9F9" flexDirection="column" padding="10px">
            <Box fontSize="14px">숙박</Box>
            <Box fontSize="20px" fontWeight={800}>
              110,000원
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
