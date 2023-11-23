import React, { useState, useEffect } from "react";
import * as styles from "./ChooseDateModal.styles";
import { DisclosureProps } from "./ChooseDateModal.types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Icon,
  Button
} from "@chakra-ui/react";
import { RxDoubleArrowRight } from "react-icons/rx";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { convertDateFormat } from "../../utils/convertDateFormat";
import moment from "moment";

const ChooseDateModal = ({
  isOpen,
  onClose,
  setSelectedDate
}: DisclosureProps) => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null
  ]);

  // 타입지정 아무리해도 안돼서 any로 해놨음
  const handleDateChange = (value: any) => {
    if (Array.isArray(value)) {
      setDateRange([value[0], value[1] || null]);
    } else {
      setDateRange([value, null]);
    }
  };

  useEffect(() => {
    const formattedDates = dateRange.map((date) =>
      date ? date.toLocaleDateString() : ""
    );
    setSelectedDate(formattedDates);
  }, [dateRange]);

  const tileDisabled = ({ date }: { date: Date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(today.getDate());
    twoDaysAgo.setHours(0, 0, 0, 0);
    return date < twoDaysAgo;
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent maxW="720px" maxH="600px" overflow="auto">
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
              <styles.Date>
                {convertDateFormat(dateRange[0]?.toLocaleDateString())}
              </styles.Date>
            </styles.HeaderScheduleLeft>
            <styles.HeaderScheduleMid>
              <Icon as={RxDoubleArrowRight} width="100%" />
            </styles.HeaderScheduleMid>
            <styles.HeaderScheduleRight>
              <styles.CheckOutText>체크아웃</styles.CheckOutText>
              <styles.Date>
                {convertDateFormat(dateRange[1]?.toLocaleDateString())}
              </styles.Date>
            </styles.HeaderScheduleRight>
          </styles.HeaderScheduleWrapper>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          pb={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <styles.CalendarWrapper>
            <Calendar
              selectRange
              onChange={handleDateChange}
              value={dateRange}
              next2Label={null}
              prev2Label={null}
              calendarType="gregory"
              tileDisabled={tileDisabled}
              formatDay={(locale, date) => moment(date).format("DD")}
            />
          </styles.CalendarWrapper>
          <Button
            bg="#db074a"
            color="white"
            textAlign="center"
            borderRadius="5px"
            mt="1rem"
            width="100%"
            onClick={onClose}
          >
            설정하기
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ChooseDateModal;
