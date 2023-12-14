import { Skeleton, Flex, Box, Divider } from "@chakra-ui/react";

const ProductDetailSkeleton = () => {
  return (
    <Box w="720px">
      <Skeleton w="100%" h="380px" />
      <Flex marginTop="30px" justifyContent="space-between" alignItems="center">
        <Box>
          <Skeleton w="60px" h="20px" marginBottom="5px" />
          <Skeleton w="400px" h="45px" />
        </Box>
        <Skeleton w="50px" h="25px" marginTop="14px" padding="5px 10px" />
      </Flex>
      <Divider margin="30px 0" borderColor="#D9D9D9" />
      <Flex alignItems="flex-end" gap="14px">
        <Skeleton w="95px" h="40px" />
        <Skeleton w="100px" h="20px" />
      </Flex>
      <Box marginTop="10px">
        <Flex gap="10px">
          <Skeleton w="205px" h="45px" borderRadius="25px" />
          <Skeleton w="80px" h="45px" borderRadius="25px" />
        </Flex>
      </Box>
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
          <Flex flexDirection="column" justifyContent="space-between">
            <Flex flexDirection="column">
              <Skeleton w="230px" h="40px" />
              <Skeleton w="100px" h="10px" marginTop="2px" />
            </Flex>
            <Flex flexDirection="column">
              <Skeleton w="200px" h="22px" marginBottom="1px" />
              <Skeleton w="200px" h="22px" />
            </Flex>
          </Flex>
          <Flex flexDirection="column" justifyContent="space-between">
            <Flex justifyContent="flex-end">
              <Skeleton w="130px" h="24px" />
            </Flex>
            <Flex flexDirection="column" alignItems="flex-end" marginTop="20px">
              <Skeleton w="24px" h="18px" marginBottom="3px" />
              <Skeleton w="90px" h="30px" marginBottom="3px" />
            </Flex>
            <Flex gap="10px">
              <Skeleton w="26px" h="26px" borderRadius="5px" />
              <Skeleton w="130px" h="26px" borderRadius="5px" />
            </Flex>
          </Flex>
        </Box>
      </Box>
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
          <Flex flexDirection="column" justifyContent="space-between">
            <Flex flexDirection="column">
              <Skeleton w="230px" h="40px" />
              <Skeleton w="100px" h="10px" marginTop="2px" />
            </Flex>
            <Flex flexDirection="column">
              <Skeleton w="200px" h="22px" marginBottom="1px" />
              <Skeleton w="200px" h="22px" />
            </Flex>
          </Flex>
          <Flex flexDirection="column" justifyContent="space-between">
            <Flex justifyContent="flex-end">
              <Skeleton w="130px" h="24px" />
            </Flex>
            <Flex flexDirection="column" alignItems="flex-end" marginTop="20px">
              <Skeleton w="24px" h="18px" marginBottom="3px" />
              <Skeleton w="90px" h="30px" marginBottom="3px" />
            </Flex>
            <Flex gap="10px">
              <Skeleton w="26px" h="26px" borderRadius="5px" />
              <Skeleton w="130px" h="26px" borderRadius="5px" />
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Divider margin="30px 0" borderColor="#D9D9D9" />
      <Skeleton w="100px" h="39px" marginBottom="8px" />
      <Skeleton w="100%" h="20px" marginBottom="2px" />
      <Skeleton w="100%" h="20px" marginBottom="2px" />
      <Skeleton w="100%" h="20px" marginBottom="2px" />
    </Box>
  );
};

export default ProductDetailSkeleton;
