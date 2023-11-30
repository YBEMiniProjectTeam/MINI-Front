import { useState, useEffect } from "react";
import { useRoomListQuery } from "@hooks/useRoomListQuery";
import ChooseRoom from "../ChooseRoom/ChooseRoom";
import ChooseDateModal from "@components/ChooseDateModal/ChooseDateModal";
import { ChooseDetailTypes } from "./ChooseDetail.types";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { CiCalendar } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { convertDateFormat } from "@utils/convertDateFormat";

const ChooseDetail = ({
  startDate,
  endDate
}: ChooseDetailTypes): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState<string[] | null>([
    startDate,
    endDate
  ]);
  const [guestNum, setGuestNum] = useState<number>(2);

  const {
    isOpen: isOpenChooseDateModal,
    onOpen: onOpenChooseDateModal,
    onClose: onCloseChooseDateModal
  } = useDisclosure();

  const { isLoading, isError, data, error } = useRoomListQuery(
    startDate,
    endDate,
    guestNum
  );

  if (isLoading) {
    return;
  }

  useEffect(() => {
    setSelectedDate([startDate, endDate]);
  }, [startDate, endDate]);

  return (
    <>
      <ChooseDateModal
        isOpen={isOpenChooseDateModal}
        onClose={onCloseChooseDateModal}
        setSelectedDate={setSelectedDate}
        isFromSearchResult={false}
        personCount={guestNum}
        setPersonCount={setGuestNum}
      />
      <Box marginTop="10px">
        <Flex gap="10px">
          <Box
            as="button"
            display="flex"
            alignItems="center"
            gap="5px"
            bg="white"
            borderRadius="25px"
            border="1px solid #D9D9D9"
            padding="10px 17px"
            color="#4B4B4B"
            fontWeight={600}
            onClick={onOpenChooseDateModal}
          >
            <CiCalendar />
            {selectedDate &&
              `${convertDateFormat(selectedDate[0])} - ${convertDateFormat(
                selectedDate[1]
              )}`}
          </Box>
          <Box
            as="button"
            display="flex"
            alignItems="center"
            gap="5px"
            bg="white"
            borderRadius="25px"
            border="1px solid #D9D9D9"
            padding="10px 17px"
            color="#4B4B4B"
            fontWeight={600}
            onClick={onOpenChooseDateModal}
          >
            <BsPeople />
            {guestNum}명
          </Box>
        </Flex>
      </Box>
      <ChooseRoom />
    </>
  );
};

export default ChooseDetail;
