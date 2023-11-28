import { Button, useDisclosure } from "@chakra-ui/react";
import type { RoomInfoSectionTypes } from "./RoomInfoSection.types.ts";
import CustomModal from "@components/CustomModal/CustomModal.tsx";
import * as styles from "./RoomInfoSection.styles.ts";

const RoomInfoSection = ({
  title,
  content,
  previewLength = 100
}: RoomInfoSectionTypes) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const contentString = content.join("\n");

  const previewContent =
    contentString.length > previewLength
      ? contentString.substring(0, previewLength) + "..."
      : contentString;

  const buttonLabel = `${title} 모두 보기`;

  return (
    <styles.InfoContainer>
      <styles.PreviewContent>{previewContent}</styles.PreviewContent>
      {contentString.length > previewLength && (
        <Button
          colorScheme="gray"
          variant="outline"
          width="100%"
          onClick={onOpen}
        >
          {buttonLabel}
        </Button>
      )}
      <CustomModal isOpen={isOpen} onClose={onClose} title={title}>
        <p>{contentString}</p>
      </CustomModal>
    </styles.InfoContainer>
  );
};

export default RoomInfoSection;
