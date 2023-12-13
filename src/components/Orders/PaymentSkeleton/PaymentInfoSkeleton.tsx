import { Flex, Skeleton, Stack } from "@chakra-ui/react";

const PaymentInfoSkeleton = () => {
  return (
    <Stack padding="0 1rem">
      <Skeleton w="100px" h="18px" />
      <Flex padding="1rem 0rem 1rem" gap="0.5rem" flexDirection="column">
        <Flex justifyContent="space-between">
          <Skeleton w="20%" h="16px" />
          <Skeleton w="40%" h="16px" />
        </Flex>
        <Flex justifyContent="space-between">
          <Skeleton w="20%" h="16px" />
          <Skeleton w="40%" h="16px" />
        </Flex>
      </Flex>
      <Flex justifyContent="space-between">
        <Skeleton w="30%" h="16px" />
        <Skeleton w="40%" h="16px" />
      </Flex>
    </Stack>
  );
};

export default PaymentInfoSkeleton;
