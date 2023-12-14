import { Flex, Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { DataType } from "./Reservations.types";
import { useGetReservations } from "@hooks/useReservationsMutation";
import ReservationList from "@components/Reservations/ReservationList";

const Reservations = () => {
  const navigate = useNavigate();
  const { data } = useGetReservations();

  const handleHomeButton = () => {
    navigate(`/`);
  };

  if (!data || data.length === 0) {
    return (
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="calc(100vh - 72px)"
      >
        <Box fontSize="20px" fontWeight={600}>
          예약 내역이 없습니다.
        </Box>
        <Box
          color="#7F7F7F"
          fontSize="15px"
          fontWeight={500}
          marginBottom="20px"
        >
          나인스테이의 다양한 상품을 예약해보세요.
        </Box>
        <Button size="md" w="200px" onClick={handleHomeButton}>
          상품 둘러보기
        </Button>
      </Flex>
    );
  }
  console.log(`data: ${data.data}`);
  return (
    <Flex bg="#F8F8F9" padding="20px" flexDirection="column" gap="20px">
      {data.map((data: DataType, index: number) => {
        return <ReservationList key={index} data={data} />;
      })}
    </Flex>
  );
};

export default Reservations;
