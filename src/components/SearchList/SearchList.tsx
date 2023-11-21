import React, { useEffect, useState } from "react";
import * as styles from "./SearchList.styles";
import { Product } from "./SearchList.types";
import { Box, Image, Icon, Tag, Text } from "@chakra-ui/react";
import { getSearchList } from "../../api/getSearchList";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const SearchList = () => {
  const [searchListData, setSearchListData] = useState<Product[]>([]);
  const [isWish, setIsWish] = useState<boolean[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSearchList();
        console.log("searchList data: ", data);
        setSearchListData(data);
        setIsWish(data.map((item) => item.isWish));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLikeClick = (index: number) => {
    const updatedIsLiked = [...isWish];
    updatedIsLiked[index] = !updatedIsLiked[index];
    setIsWish(updatedIsLiked);
    // post 요청 필요
  };

  return (
    <>
      {searchListData?.map((product, index) => (
        <Box
          key={product.id}
          width="100%"
          border="1px"
          borderColor="gray.200"
          overflow="hidden"
          backgroundColor="#f7fcfc"
          mb="1rem"
        >
          <styles.ImageWrapper>
            <Image
              src={product.url}
              alt="이미지"
              width="100%"
              height="15rem"
              objectFit="cover"
              position="relative"
            />
            {isWish[index] ? (
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
              {product.type}
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
              {product.name}
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
                {product.price}
              </Text>
              <Text>원</Text>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default SearchList;
