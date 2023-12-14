import {
  Box,
  Flex,
  Grid,
  GridItem,
  Skeleton,
  SkeletonText
} from "@chakra-ui/react";

const ReservationSkeleton = () => {
  return (
    <>
      <SkeletonText
        noOfLines={1}
        skeletonHeight="2rem"
        padding="0.5rem 1rem 1rem"
        w="8rem"
      />
      <Flex padding="0 1rem" gap="1rem">
        <Skeleton maxWidth="130px" w="100%" h="130px" borderRadius="5px" />
        <Flex
          flexDir="column"
          alignItems="flex-start"
          justifyContent="space-around"
          width="full"
        >
          <SkeletonText noOfLines={2} w="40%" skeletonHeight="13px" />
          <Box width="full" mt="1rem">
            <Grid templateColumns="repeat(2, 1fr)" gap={2} alignItems="end">
              <GridItem>
                <Skeleton w="50px" h="12px" mb={1} />
                <Skeleton w="90px" h="18px" mb={1} />
                <Skeleton w="70px" h="18px" mb={1} />
              </GridItem>
              <GridItem>
                <Skeleton w="50px" h="12px" mb={1} />
                <Skeleton w="90px" h="18px" mb={1} />
                <Skeleton w="70px" h="18px" mb={1} />
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default ReservationSkeleton;
