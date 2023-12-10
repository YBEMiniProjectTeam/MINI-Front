import { Flex, Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { DataType } from "./Reservations.types";
import { getAuthLocalStorage } from "@utils/getAuthLocalStorage";
import useReservationsQuery from "@hooks/useReservationsQuery";
import ReservationList from "@components/Reservations/ReservationList";

const Reservations = () => {
  const navigate = useNavigate();
  const { headers } = getAuthLocalStorage();
  const { data } = useReservationsQuery({ headers });
  console.log(`reservation data: ${data}`);
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

  return data.map((data: DataType, index: number) => {
    console.log(`[${index + 1}]`, data);
    return <ReservationList key={index} data={data} />;
  });
};

export default Reservations;
