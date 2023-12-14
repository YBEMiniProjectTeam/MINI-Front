import { Box, Text, Divider } from "@chakra-ui/react";
import { Nullable } from "@/types/nullable";
import { Spinner } from "@chakra-ui/react";
import * as styles from "@components/MyWishList/MyWishList.styles";

const isPrintable = ({
  title,
  content
}: {
  title: string;
  content: Nullable<string>;
}) => {
  if (content !== ".") {
    return (
      <>
        <Box fontSize="26px" fontWeight={700} marginBottom="8px">
          {title}
        </Box>
        <Text fontSize="16px" marginBottom="3px" lineHeight={1.7}>
          {content ? (
            content
          ) : (
            <styles.SpinnerWrapper>
              <Spinner
                thickness="2px"
                speed="0.65s"
                emptyColor="gray.200"
                color="pink"
                size="md"
              />
            </styles.SpinnerWrapper>
          )}
        </Text>
        <Divider margin="40px 0" borderColor="#D9D9D9" />
      </>
    );
  }
};

export default isPrintable;
