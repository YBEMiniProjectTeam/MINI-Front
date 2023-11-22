import React, { useState, useEffect } from "react";
import { getAccomodationInfo } from "../../api/accomodation/getAccomodationInfo";
import { Image } from "../../components/ProductDetail/Image/Image";
import { Accomodation } from "../../components/ProductDetail/ProductDetail.types";
import { Box } from "@chakra-ui/react";

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
      <Box marginTop="30px">
        <Box fontSize="14px">{type}</Box>
        <Box fontSize="30px" fontWeight={700}>
          {name}
        </Box>
      </Box>
    </>
  );
};
