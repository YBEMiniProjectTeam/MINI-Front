import { useState } from "react";
import * as styled from './MainCarousel.styles';
import Slider from "react-slick";
import img1 from "@assets/image/main_carousel1.png";
import img2 from "@assets/image/main_carousel2.png";

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
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number): void => setCurrentIndex(index),
  };

  const imageUrls = [img1, img2];

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
