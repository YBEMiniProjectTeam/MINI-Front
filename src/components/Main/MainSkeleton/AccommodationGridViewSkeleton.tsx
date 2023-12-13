import { Skeleton } from '@chakra-ui/react';
import * as styles from "./MainSkeleton.styles";

export const AccommodationGridViewSkeleton = () => (
  <>
    <Skeleton h="24px" mb="8px" />
    <Skeleton h="18px" mb="16px" />
    <Skeleton h="44px" mb="16px" />
    <styles.GridItemsWrapper>
      <styles.GridItemWrapper>
        <Skeleton w="360px" h="282px" mb="8px" />
        <Skeleton w="360px" h="100px" mb="20px" />
      </styles.GridItemWrapper>
      <styles.GridItemWrapper>
        <Skeleton w="360px" h="282px" mb="8px" />
        <Skeleton w="360px" h="100px" mb="20px" />
      </styles.GridItemWrapper>
    </styles.GridItemsWrapper>
    <styles.GridItemsWrapper>
      <styles.GridItemWrapper>
        <Skeleton w="360px" h="282px" mb="8px" />
        <Skeleton w="360px" h="100px" mb="20px" />
      </styles.GridItemWrapper>
      <styles.GridItemWrapper>
        <Skeleton w="360px" h="282px" mb="8px" />
        <Skeleton w="360px" h="100px" mb="20px" />
      </styles.GridItemWrapper>
    </styles.GridItemsWrapper>
    <Skeleton h="42px" mb="60px" />
  </>
);