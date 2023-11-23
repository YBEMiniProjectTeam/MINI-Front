import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody
} from "@chakra-ui/react";
import { CustomModalType } from "./CustomModal.ts";
import * as styles from "./CustomModal.styles.ts";

const CustomModal: React.FC<CustomModalType> = ({
  isOpen,
  onClose,
  children,
  title
}) => {
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
