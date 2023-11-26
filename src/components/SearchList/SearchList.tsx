import React, { useEffect, useState } from "react";
import * as styles from "./SearchList.styles";
import { Accommodation } from "./SearchList.types";
import { SearchListProps } from "./SearchList.types";
import { Box, Image, Icon, Tag, Text, Spinner } from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useSearchList } from "@hooks/useSearchList";
import { useNavigate } from "react-router-dom";
import { converDateFormat4 } from "@/utils/converDateFormat4";

const SearchList = ({
  keyword,
  category,
  startDate,
  endDate
}: SearchListProps) => {
  const navigate = useNavigate();

  const [searchList, setSearchList] = useState<Accommodation[]>([]);
  const [page, setPage] = useState(1);

  const { data, error, isLoading, refetch } = useSearchList(
    keyword,
    null,
    null,
    null,
    category,
    page
  );

  if (error) {
    console.error("An error has occurred:", error.message);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (data) {
      setSearchList((prevSearchList) => [
        ...prevSearchList,
        ...data.data.accomodations
      ]);
    }
  }, [data]);

  const handleLikeClick = (index: number) => {
    const updatedSearchList = [...searchList];

    updatedSearchList[index] = {
      ...updatedSearchList[index],
      isWish: !updatedSearchList[index].isWish
    };

    setSearchList(updatedSearchList);

    // post 요청 필요
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      if (!data.data.last) {
        setPage((prevPage) => prevPage + 1);
        refetch();
      }
    }
  };

  const handleAccomodationClick = (id: number) => {
    navigate(
      `/products/${id}?startDate=${converDateFormat4(
        startDate
      )}&endDate=${converDateFormat4(endDate)}`
    );
  };

  return (
    <>
      {isLoading ? (
        <Spinner
          thickness="2px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#db074a"
          size="md"
        />
      ) : (
        searchList?.map((accomodation, index) => (
          <Box
            key={accomodation.id}
            width="100%"
            border="1px"
            borderColor="gray.200"
            overflow="hidden"
            backgroundColor="#f7fcfc"
            mb="1rem"
            onClick={() => handleAccomodationClick(accomodation.id)}
          >
            <styles.ImageWrapper>
              <Image
                src={accomodation.url}
                alt="이미지"
                width="100%"
                height="15rem"
                objectFit="cover"
                position="relative"
              />
              {accomodation.isWish ? (
                <Icon
                  as={FaHeart}
                  position="absolute"
                  top="1.325rem"
                  right="1.275rem"
                  width="1.5rem"
                  height="1.5rem"
                  color="red"
                  cursor="pointer"
                  onClick={() => handleLikeClick(index)}
                />
              ) : (
                <Icon
                  as={CiHeart}
                  position="absolute"
                  top="1rem"
                  right="1rem"
                  width="2rem"
                  height="2rem"
                  color="white"
                  cursor="pointer"
                  onClick={() => handleLikeClick(index)}
                />
              )}

              <Tag
                size="md"
                variant="outline"
                color="white"
                position="absolute"
                bottom="1rem"
                left="1rem"
              >
                {accomodation.type}
              </Tag>
            </styles.ImageWrapper>

            <Box pt="14px" pb="14px" ml="1rem">
              <Box
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                mb="1rem"
                pb="1px"
                pr="20px"
                fontSize="18px"
                lineHeight="21px"
                fontWeight="700"
              >
                {accomodation.name}
              </Box>

              <Box
                m="0"
                p="0"
                border="0"
                verticalAlign="initial"
                outline="none"
                boxSizing="border-box"
                color="#323232"
                display="flex"
                flexDirection="row"
              >
                <Text
                  fontSize="18px"
                  lineHeight="21px"
                  fontWeight="700"
                  mr="0.3rem"
                >
                  {accomodation.price}
                </Text>
                <Text>원</Text>
              </Box>
            </Box>
          </Box>
        ))
      )}
    </>
  );
};

export default SearchList;
