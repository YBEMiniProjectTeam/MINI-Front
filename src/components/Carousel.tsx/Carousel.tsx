import React from "react";
import * as styled from './Carousel.styles';

export const Carousel = () => {
  return (
    <styled.CarouselOuter>
      <styled.CarouselWrapper>
        <styled.SwiperContainer>
          <styled.SwiperWrapper>
            <styled.CarouselItem></styled.CarouselItem>
          </styled.SwiperWrapper>
          <styled.SwiperPagination>
            <span>1</span>
            <span> / </span>
            <span>2</span>
          </styled.SwiperPagination>
        </styled.SwiperContainer>
      </styled.CarouselWrapper>
    </styled.CarouselOuter>
  );
};
