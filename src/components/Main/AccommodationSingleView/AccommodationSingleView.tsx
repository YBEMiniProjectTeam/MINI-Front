import { useState } from "react";
import * as styled from './AccommodationSingleView.styles';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

//
const AccommodationData = [
  {
    imageUrl: "https://yaimg.yanolja.com/v5/2022/10/17/15/634d7563600ed4.17945107.jpg",
    region: "강원",
    name: "강릉 세인트존스 호텔",
    price: "89,000",
  },
  {
    imageUrl: "https://yaimg.yanolja.com/v5/2022/09/02/16/63122c1e9ce9e4.94265324.jpg",
    region: "서울",
    name: "노보텔 스위트 앰배서더 서울 용산",
    price: "242,550",
  },
  {
    imageUrl: "https://yaimg.yanolja.com/v5/2022/09/27/20/633356449b6ed6.90935628.jpg",
    region: "제주",
    name: "해비치 호텔&리조트",
    price: "245,840",
  },
  {
    imageUrl: "https://yaimg.yanolja.com/v5/2022/10/27/17/635abceb287712.74610369.jpg",
    region: "경기",
    name: "라마다 앙코르 바이 윈덤 김포 한강 호텔",
    price: "115,000",
  },
  {
    imageUrl: "https://yaimg.yanolja.com/v5/2022/07/20/19/62d8568eb73523.97030183.jpg",
    region: "경기",
    name: "롤링힐스 호텔",
    price: "189,000",
  },
];

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
      <styled.SwiperContainer>
        <styled.StyledSlider {...settings}>
          {AccommodationData.map((item, index) => (
            <styled.SwiperItem key={index}>
              <img src={item.imageUrl} alt={`Slide ${index + 1}`} />
            </styled.SwiperItem>
          ))}
        </styled.StyledSlider>
      </styled.SwiperContainer>
      <styled.InformationWrapper>
        <styled.InformationInner>
          <styled.InformationRegion>
            {AccommodationData[currentSlide].region}
          </styled.InformationRegion>
          <styled.InformationName>
            {AccommodationData[currentSlide].name}
          </styled.InformationName>
          <div>
            <styled.InformationPrice>
              {AccommodationData[currentSlide].price}
            </styled.InformationPrice>
            <styled.InformationPriceTxt>원부터</styled.InformationPriceTxt>
          </div>
        </styled.InformationInner>
      </styled.InformationWrapper>
    </styled.SingleViewWrapper>
  );
};
