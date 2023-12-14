import { Flex, Divider, Skeleton } from "@chakra-ui/react";

const ReservationDetailsSkeleton = () => {
  return (
    <>
      <Skeleton w="100%" h="200px" />
      <Flex gap="15px" marginTop="30px">
        <Skeleton
          w="50px"
          h="21px"
          _before={{
            content: '"|"',
            color: "#D9D9D9",
            position: "absolute",
            left: "54px"
          }}
        />
        <Skeleton w="300px" h="21px" />
      </Flex>
      <Flex flexDir="column" gap="1px" marginTop="10px">
        <Skeleton w="250px" h="43px" marginBottom="2px" />
        <Skeleton w="270px" h="30px" />
      </Flex>
      <Divider margin="30px 0" borderColor="#D9D9D9" />
      <Flex justifyContent="space-evenly" alignItems="center">
        <Flex flexDir="column" alignItems="center">
          <Skeleton w="50px" h="20px" marginBottom="1px" />
          <Skeleton w="150px" h="27px" />
        </Flex>
        <Skeleton w="37px" h="30px" />
        <Flex flexDir="column" alignItems="center">
          <Skeleton w="50px" h="20px" marginBottom="1px" />
          <Skeleton w="150px" h="27px" />
        </Flex>
      </Flex>
      <Divider margin="30px 0" borderColor="#D9D9D9" />
      <Flex flexDir="column" gap="10px">
        <Skeleton w="100px" h="33px" />
        <Flex justifyContent="space-between">
          <Skeleton w="50px" h="33px" />
          <Skeleton w="70px" h="33px" />
        </Flex>
        <Flex justifyContent="space-between">
          <Skeleton w="70px" h="33px" />
          <Skeleton w="130px" h="33px" />
        </Flex>
      </Flex>
      <Divider margin="30px 0" borderColor="#D9D9D9" />
      <Flex flexDir="column" gap="10px">
        <Skeleton w="100px" h="33px" />
        <Flex justifyContent="space-between">
          <Skeleton w="50px" h="33px" />
          <Skeleton w="70px" h="33px" />
        </Flex>
        <Flex justifyContent="space-between">
          <Skeleton w="70px" h="33px" />
          <Skeleton w="130px" h="33px" />
        </Flex>
      </Flex>
      <Divider margin="30px 0" borderColor="#D9D9D9" />
      <Flex flexDir="column" gap="10px">
        <Skeleton w="100px" h="33px" />
        <Flex justifyContent="space-between">
          <Skeleton w="70px" h="33px" />
          <Skeleton w="130px" h="33px" />
        </Flex>
      </Flex>
    </>
  );
};

export default ReservationDetailsSkeleton;
