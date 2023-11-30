import { getAuthLocalStorage } from "@utils/getAuthLocalStorage.ts";
import { useEffect, useState, Suspense } from "react";
import * as styles from "./SearchList.styles";
import { Accommodation, SearchListProps } from "./SearchList.types";
import { Box, Image, Icon, Tag, Text, Spinner } from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useSearchList } from "@hooks/useSearchList";
import { useNavigate } from "react-router-dom";
import { convertDateFormat4 } from "@utils/convertDateFormat4";
import { debounce } from "lodash";
import { checkInAndOutDateState } from "@recoil/checkInAndOutDate";
import {
  districtState,
  categoryState,
  isRefetchedState
} from "@recoil/searchStates";
import { useRecoilValue } from "recoil";
import { usePostWish, useDeleteWish } from "@hooks/useWishMutation";
import { sliceAccommodationName } from "@utils/sliceAccommodationName";
import { formatPrice } from "@utils/priceFormatter";
import { toast } from "react-hot-toast";

const SearchList = ({ keyword }: SearchListProps) => {
  const navigate = useNavigate();

  const { startDate, endDate } = useRecoilValue(checkInAndOutDateState);
  const selectedDistrict = useRecoilValue(districtState);
  const selectedCategory = useRecoilValue(categoryState);
  const isRefetched = useRecoilValue(isRefetchedState);

  const [searchList, setSearchList] = useState<Accommodation[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { data, error, refetch } = useSearchList(
    keyword,
    selectedDistrict,
    startDate,
    endDate,
    selectedCategory,
    page,
    10
  );

  const { accessTokenCookie, headers } = getAuthLocalStorage();

  const { mutate: postWish } = usePostWish();
  const { mutate: deleteWish } = useDeleteWish();

  if (error) {
    console.error("An error has occurred:", error.message);
  }

  // 모듈화
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.documentElement.scrollTop = 0;

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [totalPage]);

  useEffect(() => {
    setSearchList((prevSearchList) => [
      ...prevSearchList,
      ...data.accommodations
    ]);
    setTotalPage(data.total_pages);
    setIsLoadingMore(false);
  }, [page]);

  useEffect(() => {
    setSearchList(() => [...data.accommodations]);
    setTotalPage(data.total_pages);
    setIsLoadingMore(false);
  }, [isRefetched]);

  const handleLikeClick = (index: number, accommodationId: number) => {
    if (!accessTokenCookie) {
      toast.error("로그인이 필요한 서비스입니다.");
    }
    const updatedSearchList = [...searchList];

    updatedSearchList[index] = {
      ...updatedSearchList[index],
      isWish: !updatedSearchList[index].isWish
    };

    setSearchList(updatedSearchList);

    // post 요청 필요
    if (updatedSearchList[index].isWish === true) {
      postWish({ accommodationId, headers });
    } else {
      deleteWish({ accommodationId, headers });
    }
  };

  // 모듈화
  const handleScroll = debounce(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 50) {
      if (page < totalPage) {
        setPage((prevPage) => prevPage + 1);
        setIsLoadingMore(true);
        refetch();
      }
    }
  }, 200);

  const handleAccomodationClick = (id: number) => {
    navigate(
      `/products?id=${id}&startDate=${convertDateFormat4(
        startDate
      )}&endDate=${convertDateFormat4(endDate)}`
    );
  };

  return (
    <Suspense
      fallback={
        <styles.SpinnerWrapper>
          <Spinner
            thickness="2px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#db074a"
            size="md"
          />
        </styles.SpinnerWrapper>
      }
    >
      {searchList?.length === 0 ? (
        <Text textAlign="center" mt="1rem">
          검색 결과가 없습니다.
        </Text>
      ) : null}
      {searchList?.map((accomodation, index) => (
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
                onClick={() => handleLikeClick(index, accomodation.id)}
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
                onClick={() => handleLikeClick(index, accomodation.id)}
              />
            )}

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
            cursor="pointer"
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
    </Suspense>
  );
};

export default SearchList;
