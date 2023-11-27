import Image from "@components/ProductDetail/Image/Image";
import WishListButton from "@components/ProductDetail/WishListButton/WishListButton";
import ChooseDetail from "@components/ProductDetail/ChooseDetail/ChooseDetail";
import Map from "@components/ProductDetail/Map/Map";
import { useSearchParams } from "react-router-dom";
import { useAccomodationQuery } from "@/hooks/useAccomodationQuery";
import { Flex, Box, Divider, Text } from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCarOutline } from "react-icons/io5";
import { PiCookingPot } from "react-icons/pi";

export const ProductDetail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const { isLoading, isError, data, error } = useAccomodationQuery(Number(id));

  if (isLoading) {
    return;
  }

  const { accommodation_image: images, description, isWish, name, type } = data;
  const {
    address,
    cooking,
    description: desc,
    latitude,
    longitude,
    others,
    parking
  } = description;

  return (
    <Box w="720px">
      <Image images={images} />
      <Flex marginTop="30px" justifyContent="space-between" alignItems="center">
        <Box>
          <Box fontSize="14px">{type}</Box>
          <Box fontSize="30px" fontWeight={700}>
            {name}
          </Box>
        </Box>
        <WishListButton />
      </Flex>
      <Divider margin="30px 0" borderColor="#D9D9D9" />
      <Flex alignItems="flex-end" gap="14px">
        <Box fontSize="26px" fontWeight={700}>
          객실 선택
        </Box>
        <Box
          fontSize="14px"
          fontWeight={500}
          color="#7F7F7F"
          marginBottom="5px"
        >
          세금 / 봉사료 포함
        </Box>
      </Flex>
      <ChooseDetail
        startDate={startDate || Date()}
        endDate={endDate || Date()}
      />
      <Divider margin="40px 0" borderColor="#D9D9D9" />
      <Box fontSize="26px" fontWeight={700} marginBottom="8px">
        숙소 설명
      </Box>
      <Text fontSize="16px" marginBottom="3px" lineHeight={1.7}>
        {desc}
      </Text>
      <Divider margin="40px 0" borderColor="#D9D9D9" />
      <Box fontSize="26px" fontWeight={700} marginBottom="10px">
        숙소 정보
      </Box>
      <Flex gap="70px">
        <Flex alignItems="center" gap="10px">
          <IoCarOutline size="28px" />
          <Box fontSize="16px">{parking ? "주차 가능" : "주차 불가"}</Box>
        </Flex>
        <Flex alignItems="center" gap="10px">
          <PiCookingPot size="28px" />
          <Box fontSize="16px">{cooking ? "조리 가능" : "조리 불가"}</Box>
        </Flex>
      </Flex>
      <Divider margin="40px 0" borderColor="#D9D9D9" />
      <Box fontSize="26px" fontWeight={700} marginBottom="8px">
        부대시설
      </Box>
      <Text fontSize="16px" marginBottom="3px" lineHeight={1.7}>
        {others.split(" ").join(", ")}
      </Text>
      <Divider margin="40px 0" borderColor="#D9D9D9" />
      <Flex flexDir="column" alignItems="flex-start" gap="5px">
        <Box fontSize="26px" fontWeight={700}>
          숙소 위치
        </Box>
        <Flex
          alignItems="center"
          gap="5px"
          fontSize="16px"
          fontWeight={500}
          color="#7F7F7F"
          marginBottom="5px"
        >
          <IoLocationOutline />
          {address}
        </Flex>
      </Flex>
      <Map lat={Number(latitude)} lng={Number(longitude)} />
    </Box>
  );
};
