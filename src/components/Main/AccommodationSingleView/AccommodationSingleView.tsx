import { useState } from "react";
import * as styled from './AccommodationSingleView.styles';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useSearchList } from "@/hooks/useSearchList";
import { Spinner } from "@chakra-ui/react";

type Accommodation = {
  id: number;
  name: string;
  type: string;
  thumbnail: string;
  min_price: number;
  isWish: boolean;
};


export const AccommodationSingleView = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "28px",
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    nextArrow: (
      <styled.RightArrowButtonWrapper>
        <IoIosArrowForward color="#4D4D4D" size="2rem"/>
      </styled.RightArrowButtonWrapper>
    ),
    prevArrow: (
      <styled.LeftArrowButtonWrapper>
        <IoIosArrowBack color="#4D4D4D" size="2rem"/>
      </styled.LeftArrowButtonWrapper>
    ),
  };

  const { data, error, isLoading } = useSearchList(
    null,
    null,
    null,
    null,
    '호텔',
    4,
    10
  );

  if (error) {
    console.error("[ERROR] ", error.message);
  }

  // console.log(data);

  const printCategory = (type: string) => {
    let category = '';

    switch (type) {
    case 'HOTEL':
      category = '호텔';
      break;
    case 'RESORT':
      category = '리조트';
      break;
    case 'MOTEL':
      category = '모텔';
      break;
    case 'PENSION':
      category = '펜션';
      break;
    default:
      category = '';
    }

    return category;
  };

  // TODO:
  // 지역 response 추가
  // 쿼리 스트링 잘 되는지 확인
  // page num, size 결정

  return (
    <styled.SingleViewWrapper>
      <styled.MainViewTitleWrapper>
        <styled.MainViewTitle>
          <styled.Title>호캉스</styled.Title>
          <styled.Description>지친 이번주, 호캉스는 어떠세요?</styled.Description>
        </styled.MainViewTitle>
        <styled.MoreButtonWrapper>
          <a href="/searchResult">
            <styled.MoreButtonTxt>모두 보기</styled.MoreButtonTxt>
            <ArrowForwardIcon color={"#666666"}/>
          </a>
        </styled.MoreButtonWrapper>
      </styled.MainViewTitleWrapper>
      {
        isLoading ? (
          <Spinner
            thickness="2px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#db074a"
            size="md"
          />
        ) : (
          <>
            <styled.SwiperContainer>
              <styled.StyledSlider {...settings}>
                {data['accommodations'].map((item: Accommodation, index: number) => (
                  <styled.SwiperItem key={index}>
                    <img src={item.thumbnail} alt={`Slide ${index + 1}`} />
                  </styled.SwiperItem>
                ))}
              </styled.StyledSlider>
            </styled.SwiperContainer>
            <styled.InformationWrapper>
              <styled.InformationInner>
                <styled.InformationRegion>
                  {data['accommodations'][currentSlide].region} | {printCategory(data['accommodations'][currentSlide].type)}
                </styled.InformationRegion>
                <styled.InformationName>
                  {data['accommodations'][currentSlide].name}
                </styled.InformationName>
                <div>
                  <styled.InformationPrice>
                    {data['accommodations'][currentSlide].min_price}
                  </styled.InformationPrice>
                  <styled.InformationPriceTxt>원부터</styled.InformationPriceTxt>
                </div>
              </styled.InformationInner>
            </styled.InformationWrapper>
          </>
        )}
    </styled.SingleViewWrapper>
  );
};