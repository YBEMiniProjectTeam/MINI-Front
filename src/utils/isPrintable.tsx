import { Box, Text, Divider } from "@chakra-ui/react";

const isPrintable = ({
  title,
  content
}: {
  title: string;
  content: string;
}) => {
  if (content !== ".") {
    return (
      <>
        <Box fontSize="26px" fontWeight={700} marginBottom="8px">
          {title}
        </Box>
        <Text fontSize="16px" marginBottom="3px" lineHeight={1.7}>
          {content}
        </Text>
        <Divider margin="40px 0" borderColor="#D9D9D9" />
      </>
    );
  }
};

export default isPrintable;
