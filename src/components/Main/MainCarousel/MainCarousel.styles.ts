import styled from "styled-components";
import Slider from "react-slick";

export const CarouselOuter = styled.div`
  padding: 0px 24px;
  display: block;
`;

export const CarouselWrapper = styled.div`
  display: block;
  width: 720px;
  height: 288px;
`;

export const SwiperContainer = styled.div`
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  padding: 0;
  z-index: 1;
  width: 720px;
  height: 288px;
`;

export const SwiperWrapper = styled.div`
  position: relative;
`;

export const StyledSlider = styled(Slider)`
  width: 720px;
  height: 288px;

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  .slick-slide {
    float: left;
  }
`;

export const CarouselItem = styled.img`
  display: flex;
  width: 720px;
  height: 288px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #dfdfdf;
`;

export const SwiperPagination = styled.div`
  position: absolute;
  bottom: 12px;
  left: auto;
  right: 12px;
  width: 48px;
  height: 21px;
  padding: 0px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 0.8rem;
  color: white;
  line-height: 21px;
  text-align: center;
`;

export const SwiperPaginationTxt = styled.span`
  font-size: 0.8rem;
`;