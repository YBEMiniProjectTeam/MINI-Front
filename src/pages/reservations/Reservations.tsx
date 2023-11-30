import {
  Flex,
  Box,
  // Button,
  Divider,
  Image,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";

export const Reservations = (): JSX.Element => {
  // const handleClick = () => {
  //   navigate(`/`);
  // };

  return (
    <>
      {/* 예약 내역이 없는 경우 */}
      {/* <Flex
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
          데일리호텔의 다양한 상품을 예약해보세요.
        </Box>
        <Button size="md" w="200px" onClick={handleClick}>
          상품 둘러보기
        </Button>
      </Flex> */}

      <Box bg="#F8F8F9" padding="20px">
        <Box
          border="1px solid #E7E7E7"
          borderRadius="6px"
          padding="20px"
          bg="#fff"
        >
          <Flex justifyContent="space-between" margin="0 15px">
            <Box fontSize="15px" fontWeight={600}>
              2023.06.21 (수)
            </Box>
            <Box
              as="button"
              display="flex"
              gap="5px"
              alignItems="center"
              color="#166FA7"
              fontSize="15px"
              fontWeight={600}
            >
              상세보기
              <FaArrowRightLong />
            </Box>
          </Flex>
          <Divider margin="20px 0" borderColor="#D9D9D9" />
          <Flex margin="0 15px" justifyContent="space-between">
            <Flex
              flexDir="column"
              alignItems="flex-start"
              justifyContent="space-between"
            >
              {/* 이용 날짜가 지난 경우 */}
              {/* <Box
              display="inline-block"
              bg="#CFCFCF"
              fontSize="13px"
              fontWeight={600}
              padding="2px 5px"
              borderRadius="5px"
            >
              이용 완료
            </Box> */}
              <Box
                display="inline-block"
                bg="#D63F8B"
                color="#fff"
                fontSize="13px"
                fontWeight={600}
                padding="2px 5px"
                borderRadius="5px"
              >
                이용 예정
              </Box>
              <Box>
                <Box fontSize="18px" fontWeight={600}>
                  해비치 호텔&리조트
                </Box>
                <Box fontSize="14px" fontWeight={600} color="#7F7F7F">
                  슈페리어 트윈 빌리지
                </Box>
              </Box>
              <Grid templateColumns="60px 200px" templateRows="20px 20px">
                <GridItem fontSize="14px" fontWeight={600} color="#7F7F7F">
                  체크인
                </GridItem>
                <GridItem fontSize="14px" fontWeight={500}>
                  2023.12.21 (목) 17:00
                </GridItem>
                <GridItem fontSize="14px" fontWeight={600} color="#7F7F7F">
                  체크아웃
                </GridItem>
                <GridItem fontSize="14px" fontWeight={500}>
                  2023.12.22 (금) 14:00
                </GridItem>
              </Grid>
            </Flex>
            <Image
              src="https://bit.ly/2Z4KKcF"
              w="230px"
              h="130px"
              objectFit="cover"
              loading="lazy"
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
};
