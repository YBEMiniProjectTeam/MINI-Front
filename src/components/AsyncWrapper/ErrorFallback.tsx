import getErrorMessage from "@utils/getErrorMessage.ts";
import { useNavigate } from "react-router-dom";
import type { FallbackProps } from "./AsyncWrapper.types";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const navigate = useNavigate();
  const { title, content } = getErrorMessage(error);
  const isNotAuthorized =
    error?.response?.status === 401 || error?.response?.status === 403;
  const buttonMessage = isNotAuthorized ? "로그인" : "새로고침";

  const onClickHandler = () => {
    if (isNotAuthorized) {
      navigate("/login");
    } else {
      resetErrorBoundary();
    }
  };

  return (
    <Box padding="4rem 0 2rem">
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Text fontSize="1.75rem" fontWeight="700">
          {title}
        </Text>
        <Text fontSize="1.15rem" fontWeight="500" color="gray.500">
          {content}
        </Text>
        <Box margin="1.5rem 0">
          <Button padding="0 1.5rem" onClick={onClickHandler}>
            {buttonMessage}
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default ErrorFallback;
