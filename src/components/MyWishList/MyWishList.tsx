import { getAuthLocalStorage } from "@utils/getAuthLocalStorage.ts";
import { Suspense } from "react";
import * as styles from "./MyWishList.styles";
import { useWishList } from "@hooks/useWishList";
import { Box, Image, Icon, Tag, Text, Spinner } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDeleteWish } from "@hooks/useWishMutation";
import { sliceAccommodationName } from "@utils/sliceAccommodationName";
import { formatPrice } from "@utils/priceFormatter";

const MyWishList = () => {
  const navigate = useNavigate();

  const { accessTokenCookie } = getAuthLocalStorage();

  if (!accessTokenCookie) {
    navigate("/notLogin");
  }

  const { data: wishList } = useWishList();
  const { mutate: deleteWish } = useDeleteWish();

  const handleLikeClick = async (accommodationId: number) => {
    await deleteWish({ accommodationId });
  };

  const handleAccomodationClick = (id: number) => {
    navigate(`/products?id=${id}`);
  };

  return (
    <Suspense
      fallback={
        <styles.SpinnerWrapper>
          <Spinner
            thickness="2px"
            speed="0.65s"
            emptyColor="gray.200"
            color="pink"
            size="md"
          />
        </styles.SpinnerWrapper>
      }
    >
      {wishList.length === 0 ? (
        <Text textAlign="center" mt="1rem">
          위시리스트가 없습니다.
        </Text>
      ) : null}
      {wishList.map((accomodation, index) => (
        <Box
          key={index}
          width="100%"
          border="1px"
          borderColor="gray.200"
          overflow="hidden"
          backgroundColor="#f7fcfc"
          mb="1rem"
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
              loading="lazy"
            />
            <styles.WishButton onClick={() => handleLikeClick(accomodation.id)}>
              <Icon
                as={FaHeart}
                width="1.5rem"
                height="1.5rem"
                color="primary.500"
              />
            </styles.WishButton>
            {accomodation.type !== "NOT_CLASSIFIED" && (
              <Tag
                size="md"
                variant="solid"
                color="white"
                position="absolute"
                bottom="1rem"
                left="1rem"
                userSelect="none"
                backgroundColor="rgba(0, 0, 0, 0.5)"
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
              {sliceAccommodationName(accomodation.name)}
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
                  ? formatPrice(accomodation.min_price)
                  : "정보 없음"}
              </Text>
              <Text>{accomodation.min_price !== 0 ? "원" : ""}</Text>
            </Box>
          </Box>
        </Box>
      ))}
    </Suspense>
  );
};

export default MyWishList;
