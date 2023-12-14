import { Box, Flex, Divider, Skeleton } from "@chakra-ui/react";

const ReservationsSkeleton = () => {
  return (
    <Flex bg="#F8F8F9" padding="20px" flexDirection="column" gap="20px">
      <Box
        border="1px solid #E7E7E7"
        borderRadius="6px"
        padding="20px"
        bg="#fff"
      >
        <Flex justifyContent="space-between" margin="0 15px">
          <Skeleton w="85px" h="23px" />
          <Skeleton w="72px" h="23px" />
        </Flex>
        <Divider margin="20px 0" borderColor="#D9D9D9" />
        <Flex margin="0 15px" justifyContent="space-between">
          <Flex
            flexDir="column"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Skeleton w="60px" h="24px" />
            <Box>
              <Skeleton w="200px" h="25px" marginBottom="2px" />
              <Skeleton w="200px" h="20px" />
            </Box>
            <Box>
              <Skeleton w="180px" h="22px" marginBottom="2px" />
              <Skeleton w="180px" h="22px" />
            </Box>
          </Flex>
          <Skeleton w="230px" h="130px" />
        </Flex>
      </Box>
      <Box
        border="1px solid #E7E7E7"
        borderRadius="6px"
        padding="20px"
        bg="#fff"
      >
        <Flex justifyContent="space-between" margin="0 15px">
          <Skeleton w="85px" h="23px" />
          <Skeleton w="72px" h="23px" />
        </Flex>
        <Divider margin="20px 0" borderColor="#D9D9D9" />
        <Flex margin="0 15px" justifyContent="space-between">
          <Flex
            flexDir="column"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Skeleton w="60px" h="24px" />
            <Box>
              <Skeleton w="200px" h="25px" marginBottom="2px" />
              <Skeleton w="200px" h="20px" />
            </Box>
            <Box>
              <Skeleton w="180px" h="22px" marginBottom="2px" />
              <Skeleton w="180px" h="22px" />
            </Box>
          </Flex>
          <Skeleton w="230px" h="130px" />
        </Flex>
      </Box>
    </Flex>
  );
};

export default ReservationsSkeleton;
