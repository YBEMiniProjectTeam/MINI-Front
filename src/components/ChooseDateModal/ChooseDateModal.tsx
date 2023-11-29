import { useState, useEffect } from "react";
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
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { convertDateFormat } from "@utils/convertDateFormat";
import moment from "moment";

const ChooseDateModal = ({
  isOpen,
  onClose,
  setSelectedDate,
  isFromSearchResult,
  personCount,
  setPersonCount,
  refetch
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

  const handleMinusClick = () => {
    if (personCount && setPersonCount && personCount > 1) {
      setPersonCount(personCount - 1);
    }
  };

  const handlePlusClick = () => {
    if (personCount && setPersonCount) {
      setPersonCount(personCount + 1);
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

  const handleClick = () => {
    refetch();
    onClose();
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
      <ModalContent maxW="720px" maxH="700px" overflow="auto">
        {!isFromSearchResult ? (
          <ModalHeader
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt="3rem"
          >
            인원
            <styles.HeaderPersonWrapper>
              <Icon
                as={CiCircleMinus}
                backgroundColor="white"
                width="2rem"
                height="2rem"
                color={personCount === 1 ? "gray" : "#db074a"}
                opacity={personCount === 1 ? "0.5" : "1"}
                onClick={handleMinusClick}
                isDisabled={personCount === 1}
                userSelect="none"
              />
              <styles.HeaderPersonCount>{personCount}</styles.HeaderPersonCount>
              <Icon
                as={CiCirclePlus}
                backgroundColor="white"
                width="2rem"
                height="2rem"
                color="#db074a"
                onClick={handlePlusClick}
                userSelect="none"
              />
            </styles.HeaderPersonWrapper>
          </ModalHeader>
        ) : null}

        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
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
            lineHeight="10"
            onClick={handleClick}
          >
            설정하기
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ChooseDateModal;
