import { useState, useEffect } from "react";
import useRoomListQuery from "@hooks/useRoomListQuery";
import ChooseRoom from "../ChooseRoom/ChooseRoom";
import ChooseDateModal from "@components/ChooseDateModal/ChooseDateModal";
import { ChooseDetailTypes, RoomTypes } from "./ChooseDetail.types";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { CiCalendar } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

const ChooseDetail = ({
  id,
  startDate,
  endDate
}: ChooseDetailTypes): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState<string[]>([
    startDate,
    endDate
  ]);
  console.log(endDate);
  const [guestCnt, setguestCnt] = useState<number>(2);

  const {
    isOpen: isOpenChooseDateModal,
    onOpen: onOpenChooseDateModal,
    onClose: onCloseChooseDateModal
  } = useDisclosure();

  const { data: rooms, refetch } = useRoomListQuery({
    id,
    checkInDate: selectedDate[0],
    checkOutDate: selectedDate[1],
    guestCnt
  });

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
        personCount={guestCnt}
        setPersonCount={setguestCnt}
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
            {startDate &&
              `${format(new Date(selectedDate[0]), "MM.dd (EEEEE)", {
                locale: ko
              })} - ${format(new Date(selectedDate[1]), "MM.dd (EEEEE)", {
                locale: ko
              })}`}
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
            {guestCnt}명
          </Box>
        </Flex>
      </Box>
      {Array.isArray(rooms) && rooms.length > 0 ? (
        rooms.map((room: RoomTypes, index: number) => (
          <ChooseRoom
            key={index}
            room={room}
            startDate={selectedDate[0]}
            endDate={selectedDate[1]}
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
