import { Box, Spinner } from "@chakra-ui/react";

const SuspenseFallback = () => {
  return (
    <Box
      position="fixed"
      left="0"
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" size="xl" />
    </Box>
  );
};

export default SuspenseFallback;
