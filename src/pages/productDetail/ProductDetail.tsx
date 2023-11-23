import React, { useState, useEffect } from "react";
import { getAccomodationInfo } from "../../api/accomodation/getAccomodationInfo";
import { Image } from "../../components/ProductDetail/Image/Image";
import { WishListButton } from "../../components/ProductDetail/WishListButton/WishListButton";
import { ChooseDetail } from "../../components/ProductDetail/ChooseDetail/ChooseDetail";
import { ChooseRoom } from "../../components/ProductDetail/ChooseRoom/ChooseRoom";
import { Accomodation } from "../../components/ProductDetail/ProductDetail.types";
import { Flex, Box, Divider } from "@chakra-ui/react";

export const ProductDetail: React.FC = () => {
  const [accomodationInfo, setAccomodationInfo] = useState<Accomodation>();
  const images = accomodationInfo?.accomodation_image || [];
  const { type, name } = accomodationInfo || {};

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = await getAccomodationInfo();
      setAccomodationInfo(data);
    };

    fetchData();
  }, []);

  return (
    <>
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
      <ChooseRoom />
    </>
  );
};
