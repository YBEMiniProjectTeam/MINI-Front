import { Flex, Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotLogin = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <>
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="calc(100vh - 72px)"
      >
        <Box fontSize="20px" fontWeight={600} mb={5}>
          로그인이 필요한 서비스입니다.
        </Box>
        <Button size="md" w="200px" onClick={handleClick}>
          로그인하러 가기
        </Button>
      </Flex>
    </>
  );
};

export default NotLogin;
