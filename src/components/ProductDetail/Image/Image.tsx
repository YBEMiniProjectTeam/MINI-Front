import { useDisclosure } from "@chakra-ui/react";
import { ImageProps } from "./Image.types";
import {
  Box,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";

const Image = ({ images }: ImageProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const imageUrl1 = images[0]?.url;
  const imageUrl2 = images[1]?.url;
  const imageUrl3 = images[2]?.url;

  return (
    <Box w="100%" p={0} margin="0 auto">
      <Grid
        templateColumns="1.7fr 1fr"
        autoRows="190px"
        gap={1}
        position="relative"
      >
        <GridItem
          bgImage={imageUrl1 || undefined}
          bgSize="cover"
          bgPosition="center"
          gridColumn="1 / 2"
          gridRow="1 / 3"
          _hover={{
            filter: "brightness(90%)"
          }}
        />
        <GridItem
          bgImage={imageUrl2 || undefined}
          bgSize="cover"
          bgPosition="center"
          gridColumn={2}
          gridRow={1}
          _hover={{
            filter: "brightness(90%)"
          }}
        />
        <GridItem
          bgImage={imageUrl3 || undefined}
          bgSize="cover"
          bgPosition="center"
          gridColumn={2}
          gridRow="2 / 3"
          _hover={{
            filter: "brightness(90%)"
          }}
        />
        <Box
          as="button"
          bg="white"
          borderRadius="5px"
          border="1px solid #5A5A5A"
          padding="5px 15px"
          position="absolute"
          right="20px"
          bottom="20px"
          fontSize="13px"
          onClick={onOpen}
        >
          사진 모두 보기
        </Box>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxW="720px" maxH="600px" overflow="auto">
            <ModalHeader>이미지 전체보기</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {images?.map((image, index) => (
                <Box
                  key={index}
                  bgImage={image.url}
                  bgSize="cover"
                  bgPosition="center"
                  w="100%"
                  h="300px"
                  marginBottom="20px"
                />
              ))}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Grid>
    </Box>
  );
};

export default Image;
