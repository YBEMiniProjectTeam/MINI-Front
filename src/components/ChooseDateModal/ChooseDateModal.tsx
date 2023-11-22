import React, { useState } from "react";
import * as styles from "./ChooseDateModal.styles";
import { DisclosureProps, DateRange } from "./ChooseDateModal.types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Icon
} from "@chakra-ui/react";
import { RxDoubleArrowRight } from "react-icons/rx";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ChooseDateModal = ({ isOpen, onClose }: DisclosureProps) => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null
  ]);

  const handleDateChange = (value: any) => {
    if (Array.isArray(value)) {
      setDateRange([value[0], value[1] || null]);
    } else {
      setDateRange([value, null]);
    }
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
      scrollBehavior="inside"
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          position="relative"
          mt="2rem"
        >
          일정
          <styles.HeaderScheduleWrapper>
            <styles.HeaderScheduleLeft>
              <styles.CheckInText>체크인</styles.CheckInText>
              <styles.Date>12.1 (금)</styles.Date>
            </styles.HeaderScheduleLeft>
            <styles.HeaderScheduleMid>
              <Icon as={RxDoubleArrowRight} width="100%" />
            </styles.HeaderScheduleMid>
            <styles.HeaderScheduleRight>
              <styles.CheckOutText>체크아웃</styles.CheckOutText>
              <styles.Date>12.2 (토)</styles.Date>
            </styles.HeaderScheduleRight>
          </styles.HeaderScheduleWrapper>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <styles.StyledCalendar
            selectRange
            onChange={handleDateChange}
            value={dateRange}
          />
          <div>체크인 날짜: {dateRange[0]?.toLocaleDateString()}</div>
          <div>체크아웃 날짜: {dateRange[1]?.toLocaleDateString()}</div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ChooseDateModal;
