import React, { useState } from "react";
import Slider from "react-slick";
import * as styles from "./RoomCarousel.styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import type { RoomCarouselTypes, ArrowProps } from "./RoomCarousel.types";

const RoomCarousel = ({ images, onClick }: RoomCarouselTypes) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    appendDots: (dots: React.ReactNode[]) => (
      <styles.CustomDots>{dots}</styles.CustomDots>
    ),
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    swipe: true,
    adaptiveHeight: true,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
    nextArrow: <NextArrow active={currentSlide < images.length - 1} />,
    prevArrow: <PrevArrow active={currentSlide > 0} />
  };
  return (
    <styles.StyledSlider>
      <Slider {...settings}>
        {images.map((image, index) => (
          <styles.Carousel
            key={index}
            onClick={() => onClick && onClick(image.url)}
          >
            <img src={image.url} alt={`Image ${index}`} />
          </styles.Carousel>
        ))}
      </Slider>
    </styles.StyledSlider>
  );
};

export default RoomCarousel;

const PrevArrow: React.FC<ArrowProps & { active: boolean }> = ({
  onClick,
  active
}) => (
  <styles.Arrow
    onClick={onClick}
    style={{ left: "25px", display: active ? "block" : "none" }}
  >
    <IoIosArrowBack />
  </styles.Arrow>
);

const NextArrow: React.FC<ArrowProps & { active: boolean }> = ({
  onClick,
  active
}) => (
  <styles.Arrow
    onClick={onClick}
    style={{ right: "25px", display: active ? "block" : "none" }}
  >
    <IoIosArrowForward />
  </styles.Arrow>
);
