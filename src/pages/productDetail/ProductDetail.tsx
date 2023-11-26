import Image from "@components/ProductDetail/Image/Image";
import WishListButton from "@components/ProductDetail/WishListButton/WishListButton";
import ChooseDetail from "@components/ProductDetail/ChooseDetail/ChooseDetail";
import Map from "@components/ProductDetail/Map/Map";
import { useAccomodationQuery } from "@/hooks/useAccomodationQuery";
import { Flex, Box, Divider } from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";

export const ProductDetail: React.FC = () => {
  const { isLoading, isError, data, error } = useAccomodationQuery(1);

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
      <ChooseDetail />
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
