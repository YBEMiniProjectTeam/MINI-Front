import React, { useState, useEffect } from "react";
import { getAccomodationInfo } from "../../api/accomodation/getAccomodationInfo";
import { Image } from "../../components/ProductDetail/Image/Image";
import { Accomodation } from "../../components/ProductDetail/ProductDetail.types";

export const ProductDetail: React.FC = () => {
  const [accomodationInfo, setAccomodationInfo] = useState<Accomodation>();
  const images = accomodationInfo?.accomodation_image || [];

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = await getAccomodationInfo();
      setAccomodationInfo(data);
    };

    fetchData();
  }, []);

  return <Image images={images} />;
};
