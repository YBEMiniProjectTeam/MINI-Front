import { useDisclosure } from "@chakra-ui/react";
import { ImageProps } from "./Image.types";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";

const Image = ({ images }: ImageProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      w="100%"
      h="380px"
      p={0}
      margin="0 auto"
      bgImage={images[0]}
      position="relative"
    >
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="720px" maxH="600px" overflow="auto">
          <ModalHeader>이미지 전체보기</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {images?.map((image, index) => (
              <Box
                key={index}
                bgImage={image}
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
    </Box>
  );
};

export default Image;
