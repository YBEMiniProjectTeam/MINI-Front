import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody
} from "@chakra-ui/react";
import type { CustomModalType } from "./CustomModal";
import * as styles from "./CustomModal.styles";

const CustomModal = ({ isOpen, onClose, children, title }: CustomModalType) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <styles.Wrapper>
          <ModalBody>{children}</ModalBody>
        </styles.Wrapper>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
