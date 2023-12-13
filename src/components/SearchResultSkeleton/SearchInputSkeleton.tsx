import { Skeleton } from '@chakra-ui/react';
import * as styles from "./SearchResultSkeleton.styles";

export const SearchInputSkeleton = () => (
  <>
    <Skeleton h="40px" mb="16px" />
    <styles.InputItemsWrapper>
      <Skeleton w="245px" h="40px"/>
      <Skeleton w="245px" h="40px"/>
      <Skeleton w="245px" h="40px"/>
    </styles.InputItemsWrapper>
    <Skeleton h="40px" mb="16px" />
  </>
);