import { Box, Flex } from "@chakra-ui/react";
import { CiCalendar } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";

export const ChooseDetail = (): JSX.Element => {
  return (
    <Box marginTop="10px">
      <Flex gap="10px">
        <Box
          as="button"
          display="flex"
          alignItems="center"
          gap="5px"
          bg="white"
          borderRadius="25px"
          border="1px solid #D9D9D9"
          padding="10px 17px"
        >
          <CiCalendar />
          11.22-11.23, 1박
        </Box>
        <Box
          as="button"
          display="flex"
          alignItems="center"
          gap="5px"
          bg="white"
          borderRadius="25px"
          border="1px solid #D9D9D9"
          padding="10px 17px"
        >
          <BsPeople />
          2명
        </Box>
      </Flex>
    </Box>
  );
};
