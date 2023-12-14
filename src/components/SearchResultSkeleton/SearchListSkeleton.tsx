import { Skeleton } from '@chakra-ui/react';

export const SearchListSkeleton = () => {
  const skeletonData = Array.from({ length: 10 }); 

  return (
    <>
      {skeletonData.map(() => (
        <>
          <Skeleton h="240px" mb="1px" />
          <Skeleton h="90px" mb="16px" />
        </>
      ))}
    </>
  );
};
