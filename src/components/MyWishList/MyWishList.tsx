import React, { useEffect, useState } from "react";
import * as styles from "./MyWishList.styles";
import { Accommodation } from "@components/SearchList/SearchList.types";
import { useWishList } from "@/hooks/useWishLIst";
import { Box, Image, Icon, Tag, Text, Spinner } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MyWishList = () => {
  const navigate = useNavigate();

  const [wishList, setWishList] = useState<Accommodation[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { data, error, isLoading, refetch } = useWishList(page, 10);

  if (error) {
    console.error("An error has occurred:", error.message);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.documentElement.scrollTop = 0;

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (data) {
      setWishList(data.filter((item: Accommodation) => item.isWish));
      setTotalPage(data.total_pages);
      setIsLoadingMore(false);
    }
  }, [data, setWishList, setTotalPage, setIsLoadingMore]);

  const handleLikeClick = (index: number) => {
    const updatedWishList = wishList.filter((item, i) => i !== index);

    setWishList(updatedWishList);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 50) {
      // total page null인 현상 해결 필요
      if (page < 1000) {
        setPage((prevPage) => prevPage + 1);
        setIsLoadingMore(true);

        refetch();
      }
    }
  };

  const handleAccomodationClick = (id: number) => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      {isLoading ? (
        <styles.SpinnerWrapper>
          <Spinner
            thickness="2px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#db074a"
            size="md"
          />
        </styles.SpinnerWrapper>
      ) : (
        wishList?.map((accomodation, index) => (
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
                src={accomodation.thumbnail}
                alt="이미지"
                width="100%"
                height="15rem"
                objectFit="cover"
                position="relative"
                userSelect="none"
                cursor="pointer"
                onClick={() => handleAccomodationClick(accomodation.id)}
              />

              <Icon
                as={FaHeart}
                position="absolute"
                top="1.325rem"
                right="1.275rem"
                width="1.5rem"
                height="1.5rem"
                color="red"
                cursor="pointer"
                zIndex="1000"
                onClick={() => handleLikeClick(index)}
              />

              {accomodation.type !== "NOT_CLASSIFIED" && (
                <Tag
                  size="md"
                  variant="outline"
                  color="white"
                  position="absolute"
                  bottom="1rem"
                  left="1rem"
                  userSelect="none"
                >
                  {accomodation.type}
                </Tag>
              )}
            </styles.ImageWrapper>

            <Box
              pt="14px"
              pb="14px"
              ml="1rem"
              onClick={() => handleAccomodationClick(accomodation.id)}
            >
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
                  {accomodation.min_price !== 0
                    ? accomodation.min_price
                    : "정보 없음"}
                </Text>
                <Text>{accomodation.min_price !== 0 ? "원" : ""}</Text>
              </Box>
            </Box>
          </Box>
        ))
      )}
      {isLoadingMore ? (
        <styles.SpinnerWrapper>
          <Spinner
            thickness="2px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#db074a"
            size="md"
          />
        </styles.SpinnerWrapper>
      ) : null}
    </>
  );
};

export default MyWishList;
