import { FacilitiesModalProps } from "./FacilitiesModal.types";
import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import { LuAirVent } from "react-icons/lu";
import { LuShowerHead } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { LuUtensilsCrossed } from "react-icons/lu";
import { MdOutlineTableBar } from "react-icons/md";
import { LuWind } from "react-icons/lu";
import { LuProjector } from "react-icons/lu";
import { LuWifi } from "react-icons/lu";
import { LuMonitor } from "react-icons/lu";
import { LuRefrigerator } from "react-icons/lu";
import { LuSofa } from "react-icons/lu";
import { PiHandSoap } from "react-icons/pi";
import { LuTv } from "react-icons/lu";

const FacilitiesModal = ({
  isOpen,
  onClose,
  description
}: FacilitiesModalProps): JSX.Element => {
  const {
    airConditioner,
    bathFacility,
    bathtub,
    cookware,
    diningTable,
    hairDryer,
    homeTheater,
    internet,
    pc,
    refrigerator,
    sofa,
    toiletries,
    tv
  } = description;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>객실 편의시설</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexWrap="wrap"
          rowGap="20px"
          marginBottom="20px"
          overflow="auto"
        >
          {airConditioner && (
            <Flex alignItems="center" gap="13px" w="50%">
              <LuAirVent size="23px" />
              에어컨
            </Flex>
          )}
          {bathFacility && (
            <Flex alignItems="center" gap="13px" w="50%">
              <LuShowerHead size="23px" />
              목욕시설
            </Flex>
          )}
          {bathtub && (
            <Flex alignItems="center" gap="13px" w="50%">
              <LuBath size="23px" />
              욕조
            </Flex>
          )}
          {cookware && (
            <Flex alignItems="center" gap="13px" w="50%">
              <LuUtensilsCrossed size="23px" />
              조리도구
            </Flex>
          )}
          {diningTable && (
            <Flex alignItems="center" gap="13px" w="50%">
              <MdOutlineTableBar size="23px" />
              테이블
            </Flex>
          )}
          {hairDryer && (
            <Flex alignItems="center" gap="13px" w="50%">
              <LuWind size="23px" />
              헤어드라이기
            </Flex>
          )}
          {homeTheater && (
            <Flex alignItems="center" gap="13px" w="50%">
              <LuProjector size="23px" />
              홈시어터
            </Flex>
          )}
          {internet && (
            <Flex alignItems="center" gap="13px" w="50%">
              <LuWifi size="23px" />
              인터넷
            </Flex>
          )}
          {pc && (
            <Flex alignItems="center" gap="13px" w="50%">
              <LuMonitor size="23px" />
              PC
            </Flex>
          )}
          {refrigerator && (
            <Flex alignItems="center" gap="13px" w="50%">
              <LuRefrigerator size="23px" />
              냉장고
            </Flex>
          )}
          {sofa && (
            <Flex alignItems="center" gap="13px" w="50%">
              <LuSofa size="23px" />
              소파
            </Flex>
          )}
          {toiletries && (
            <Flex alignItems="center" gap="13px" w="50%">
              <PiHandSoap size="23px" />
              세면도구
            </Flex>
          )}
          {tv && (
            <Flex alignItems="center" gap="13px" w="50%">
              <LuTv size="23px" />
              TV
            </Flex>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FacilitiesModal;
