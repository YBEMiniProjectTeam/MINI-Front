import { useState, useEffect } from "react";
import { useRoomListQuery } from "@hooks/useRoomListQuery";
import ChooseRoom from "../ChooseRoom/ChooseRoom";
import ChooseDateModal from "@components/ChooseDateModal/ChooseDateModal";
import { ChooseDetailTypes, RoomTypes } from "./ChooseDetail.types";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { CiCalendar } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { convertDateFormat } from "@utils/convertDateFormat";
import { convertDateFormat5 } from "@utils/convertDateFormat5";

const ChooseDetail = ({
  id,
  startDate,
  endDate
}: ChooseDetailTypes): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState<string[] | null>([]);
  const [guestNum, setGuestNum] = useState<number>(2);

  const checkInDate = convertDateFormat5(startDate) as string;
  const checkOutDate = convertDateFormat5(startDate) as string;

  const {
    isOpen: isOpenChooseDateModal,
    onOpen: onOpenChooseDateModal,
    onClose: onCloseChooseDateModal
  } = useDisclosure();

  const { data: rooms, refetch } = useRoomListQuery(
    id,
    checkInDate,
    checkOutDate,
    guestNum
  );

  useEffect(() => {
    setSelectedDate([startDate, endDate]);
  }, []);

  return (
    <>
      <ChooseDateModal
        isOpen={isOpenChooseDateModal}
        onClose={onCloseChooseDateModal}
        setSelectedDate={setSelectedDate}
        isFromSearchResult={false}
        personCount={guestNum}
        setPersonCount={setGuestNum}
        refetch={refetch}
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
      {rooms ? (
        rooms.map((room: RoomTypes, index: number) => (
          <ChooseRoom
            key={index}
            room={room}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
          />
        ))
      ) : (
        <Flex
          w="100%"
          h="100px"
          marginTop="30px"
          justifyContent="center"
          alignItems="center"
          color="#7F7F7F"
          fontSize="20px"
          fontWeight={600}
        >
          해당하는 객실이 없습니다.
        </Flex>
      )}
    </>
  );
};

export default ChooseDetail;
