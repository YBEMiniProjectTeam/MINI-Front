import { Image, Flex, Box, Divider, Button } from "@chakra-ui/react";
import { RxDoubleArrowRight } from "react-icons/rx";

export const ReservationDetails = (): JSX.Element => {
  return (
    <>
      <Image
        src="https://bit.ly/2Z4KKcF"
        objectFit="cover"
        w="100%"
        h="200px"
      />
      <Flex gap="15px" color="#7F7F7F" fontWeight={500} marginTop="30px">
        <Box
          fontSize="14px"
          marginBottom="10px"
          position="relative"
          _before={{
            content: '"|"',
            color: "#D9D9D9",
            position: "absolute",
            left: "54px"
          }}
        >
          예약번호
        </Box>
        <Box fontSize="14px">15519267</Box>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Box fontSize="30px" fontWeight={700}>
          해비치 호텔&리조트
        </Box>
        <Box as="button">
          <RxDoubleArrowRight size="25px" />
        </Box>
      </Flex>
      <Box color="#7F7F7F" fontSize="20px" fontWeight={600}>
        슈페리어 트윈 빌리지
      </Box>
      <Divider margin="30px 0" borderColor="#D9D9D9" />
      <Flex justifyContent="space-evenly" alignItems="center">
        <Flex flexDir="column" alignItems="center">
          <Box color="#7F7F7F" fontSize="14px" fontWeight={500}>
            체크인
          </Box>
          <Box fontSize="18px" fontWeight={500}>
            2023.12.21 (목)
          </Box>
          <Box fontSize="22px" fontWeight={800}>
            17:00
          </Box>
        </Flex>
        <Box
          display="inline-block"
          bg="#FDDCEC"
          color="#D63F8B"
          fontSize="13px"
          fontWeight={600}
          padding="5px 10px"
          borderRadius="5px"
        >
          1박
        </Box>
        <Flex flexDir="column" alignItems="center">
          <Box color="#7F7F7F" fontSize="14px" fontWeight={500}>
            체크아웃
          </Box>
          <Box fontSize="18px" fontWeight={500}>
            2023.12.22 (금)
          </Box>
          <Box fontSize="22px" fontWeight={800}>
            14:00
          </Box>
        </Flex>
      </Flex>
      <Divider margin="30px 0" borderColor="#D9D9D9" />
      <Flex flexDir="column" gap="10px">
        <Box fontSize="22px" fontWeight={700}>
          예약자 정보
        </Box>
        <Flex justifyContent="space-between">
          <Box color="#7F7F7F" fontSize="18px" fontWeight={500}>
            이름
          </Box>
          <Box fontSize="18px" fontWeight={500}>
            한은지
          </Box>
        </Flex>
        <Flex justifyContent="space-between">
          <Box color="#7F7F7F" fontSize="18px" fontWeight={500}>
            이메일
          </Box>
          <Box fontSize="18px">abcd@gmail.com</Box>
        </Flex>
      </Flex>
      <Divider margin="30px 0" borderColor="#D9D9D9" />
      <Flex flexDir="column" gap="10px">
        <Box fontSize="22px" fontWeight={700}>
          이용자 정보
        </Box>
        <Flex justifyContent="space-between">
          <Box color="#7F7F7F" fontSize="18px" fontWeight={500}>
            이름
          </Box>
          <Box fontSize="18px" fontWeight={500}>
            홍길동
          </Box>
        </Flex>
        <Flex justifyContent="space-between">
          <Box color="#7F7F7F" fontSize="18px" fontWeight={500}>
            이메일
          </Box>
          <Box fontSize="18px">abcd@gmail.com</Box>
        </Flex>
      </Flex>
      <Divider margin="30px 0" borderColor="#D9D9D9" />
      <Flex flexDir="column" gap="10px">
        <Box fontSize="22px" fontWeight={700}>
          결제 금액
        </Box>
        <Flex justifyContent="space-between">
          <Box color="#7F7F7F" fontSize="18px" fontWeight={500}>
            상품 금액
          </Box>
          <Box fontSize="18px">30,000원</Box>
        </Flex>
        <Flex justifyContent="space-between">
          <Box color="#7F7F7F" fontSize="18px" fontWeight={500}>
            할인 금액
          </Box>
          <Box fontSize="18px">-3,000원</Box>
        </Flex>
        <Flex justifyContent="space-between">
          <Box color="#7F7F7F" fontSize="18px" fontWeight={500}>
            총 결제 금액
          </Box>
          <Box fontSize="20px" fontWeight={700}>
            27,000원
          </Box>
        </Flex>
      </Flex>
      <Button w="100%" size="md" marginTop="20px">
        예약 취소하기
      </Button>
    </>
  );
};
