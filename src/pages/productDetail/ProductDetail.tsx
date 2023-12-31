import { Suspense, useEffect, useState } from "react";
import Image from "@components/ProductDetail/Image/Image";
import WishListButton from "@components/ProductDetail/WishListButton/WishListButton";
import ChooseDetail from "@components/ProductDetail/ChooseDetail/ChooseDetail";
import Map from "@components/ProductDetail/Map/Map";
import { useSearchParams } from "react-router-dom";
import useAccomodationQuery from "@hooks/useAccomodationQuery";
import { sliceAccommodationName } from "@utils/sliceAccommodationName";
import { Spinner, Flex, Box, Divider } from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCarOutline } from "react-icons/io5";
import { PiCookingPot } from "react-icons/pi";
import { TOTAL_TIME_PER_DAY } from "./ProductDetail.constant";
import isPrintable from "@utils/isPrintable";
import OpenAI from "openai";
import { Nullable } from "@/types/nullable";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_CHATGPT_API_KEY,
  dangerouslyAllowBrowser: true
});

const ProductDetail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const startDateParam = searchParams.get("startDate");
  const endDateParam = searchParams.get("endDate");
  const [gptAnswer, setGptAnswer] = useState<Nullable<string>>("");

  const startDate =
    startDateParam != null && startDateParam != "null"
      ? new Date(startDateParam)
      : new Date();

  const endDate =
    endDateParam != null && endDateParam != "null"
      ? new Date(endDateParam)
      : new Date(startDate.getTime() + TOTAL_TIME_PER_DAY);

  const { data } = useAccomodationQuery(id);

  const {
    images,
    isWish,
    name,
    type,
    address,
    cooking,
    desc,
    latitude,
    longitude,
    others,
    parking
  } = data;

  const askRestaurant = async () => {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: data.name + "주변 맛집을 추천해줘" }
      ],
      model: "gpt-3.5-turbo"
    });

    setGptAnswer(completion.choices[0].message.content);
  };

  useEffect(() => {
    askRestaurant();
  }, [data]);

  return (
    <Suspense fallback={<Spinner />}>
      <Box w="720px">
        {images && <Image images={images} />}
        <Flex
          marginTop="30px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            {type !== "NOT_CLASSIFIED" && <Box fontSize="14px">{type}</Box>}
            <Box fontSize="30px" fontWeight={700}>
              {sliceAccommodationName(name)}
            </Box>
          </Box>
          <WishListButton id={id} wish={isWish} />
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
          id={id}
          startDate={startDate.toString()}
          endDate={endDate.toString()}
        />
        <Divider margin="40px 0" borderColor="#D9D9D9" />
        {isPrintable({ title: "숙소 설명", content: desc })}
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
        {isPrintable({ title: "부대시설", content: others })}
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
        {isPrintable({ title: "숙소 주변 맛집", content: gptAnswer })}
      </Box>
    </Suspense>
  );
};

export default ProductDetail;
