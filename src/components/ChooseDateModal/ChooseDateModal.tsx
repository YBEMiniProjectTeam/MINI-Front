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
import moment from "moment";
import { Nullable } from "@/types/nullable";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

const ChooseDateModal = ({
  isOpen,
  onClose,
  setSelectedDate,
  isFromSearchResult,
  personCount,
  setPersonCount,
  refetch
}: DisclosureProps) => {
  const [dateRange, setDateRange] = useState<[Nullable<Date>, Nullable<Date>]>([
    null,
    null
  ]);

  // Calendar 컴포넌트의 property 타입
  type CalendarProps = Parameters<typeof Calendar>[0];

  const handleDateChange: CalendarProps["onChange"] = (value) => {
    if (Array.isArray(value)) {
      const [startDate, endDate] = value;
      setDateRange([startDate, endDate]);
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
      date ? date.toLocaleDateString("ko-KR") : ""
    );

    setSelectedDate(formattedDates);
  }, [dateRange]);

  const tileDisabled = ({ date }: { date: Date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date < today;
  };

  const handleClick = () => {
    if (refetch) {
      refetch();
    }
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent maxW="720px" maxH="700px" overflow="auto">
        {isFromSearchResult ? null : (
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
                color={personCount === 1 ? "gray" : "pink"}
                opacity={personCount === 1 ? "0.5" : "1"}
                onClick={handleMinusClick}
                isDisabled={personCount === 1}
                userSelect="none"
                _hover={{ cursor: "pointer" }}
              />
              <styles.HeaderPersonCount>{personCount}</styles.HeaderPersonCount>
              <Icon
                as={CiCirclePlus}
                backgroundColor="white"
                width="2rem"
                height="2rem"
                color="pink"
                onClick={handlePlusClick}
                userSelect="none"
                _hover={{ cursor: "pointer" }}
              />
            </styles.HeaderPersonWrapper>
          </ModalHeader>
        )}

        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt="2rem"
        >
          일정
          <styles.HeaderScheduleWrapper>
            <styles.HeaderSchedule>
              <styles.CheckInText>체크인</styles.CheckInText>
              <styles.Date>
                {dateRange[0] &&
                  format(dateRange[0], "MM.dd (E)", {
                    locale: ko
                  })}
              </styles.Date>
            </styles.HeaderSchedule>
            <styles.HeaderScheduleMid>
              <Icon as={RxDoubleArrowRight} width="100%" />
            </styles.HeaderScheduleMid>
            <styles.HeaderSchedule>
              <styles.CheckOutText>체크아웃</styles.CheckOutText>
              <styles.Date>
                {dateRange[1] &&
                  format(dateRange[1], "MM.dd (E)", {
                    locale: ko
                  })}
              </styles.Date>
            </styles.HeaderSchedule>
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
              formatDay={(locale, date) => {
                locale = locale;
                return moment(date).format("DD");
              }}
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
