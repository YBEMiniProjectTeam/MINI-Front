import { useState } from "react";
import * as styled from './MainCarousel.styles';
import Slider from "react-slick";

export const MainCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    slide: 'img',	
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number): void => setCurrentIndex(index),
  };

  // 임시 이미지
  const imageUrls = [ 
    "https://img.dailyhotel.me/resources/images/home_event/231120_main_1700108431.jpg",
    "https://yaimg.yanolja.com/v5/2022/08/22/10/6303603c981178.49851277.jpg",
    "https://yaimg.yanolja.com/v5/2022/09/07/18/6318e30fbf0735.43714064.jpg"
  ];

  return (
    <styled.CarouselOuter>
      <styled.CarouselWrapper>
        <styled.SwiperContainer>
          <styled.SwiperWrapper>
            <Slider {...settings}>
              {imageUrls.map((imageUrl, index) => (
                <styled.CarouselItem key={index} src={imageUrl} />
              ))}
            </Slider>
            <styled.SwiperPagination>
              <styled.SwiperPaginationTxt><strong>{currentIndex + 1}</strong></styled.SwiperPaginationTxt>
              <styled.SwiperPaginationTxt> | </styled.SwiperPaginationTxt>
              <styled.SwiperPaginationTxt>{imageUrls.length}</styled.SwiperPaginationTxt>
            </styled.SwiperPagination>
          </styled.SwiperWrapper>
        </styled.SwiperContainer>
      </styled.CarouselWrapper>
    </styled.CarouselOuter>
  );
};
