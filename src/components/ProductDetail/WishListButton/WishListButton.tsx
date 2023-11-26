import { Box } from "@chakra-ui/react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const WishListButton = (): JSX.Element => {
  return (
    <>
      <Box
        as="button"
        display="flex"
        alignItems="center"
        gap="5px"
        marginTop="14px"
        padding="5px 10px"
        borderRadius="10px"
        transition="0.2s"
        _hover={{
          bg: "#F7F7F7"
        }}
      >
        <GoHeart />
        저장
      </Box>
      {/* 위시리스트에 있는 경우 */}
      {/* <Box
        as="button"
        display="flex"
        alignItems="center"
        gap="5px"
        marginTop="14px"
        padding="5px 10px"
        borderRadius="10px"
        transition="0.2s"
        _hover={{
          bg: "#F7F7F7"
        }}
      >
        <GoHeartFill color="#D53F8C" />
        취소
      </Box> */}
    </>
  );
};

export default WishListButton;
