import { useRef } from "react";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const OptionCarousel = (): JSX.Element => {
  const slider = useRef<Slider | null>(null);

  const NextArrow = (): JSX.Element => {
    return (
      <Box
        as="button"
        aria-label="right-arrow"
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={() => slider?.current?.slickNext()}
      >
        <IoIosArrowForward size="24" color="#F9F9F9" />
      </Box>
    );
  };

  const PrevArrow = (): JSX.Element => {
    return (
      <Box
        as="button"
        aria-label="left-arrow"
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={() => slider?.current?.slickPrev()}
      >
        <IoIosArrowBack size="24" color="#F9F9F9" />
      </Box>
    );
  };

  const images = [
    {
      url: "https://bit.ly/2Z4KKcF"
    },
    {
      url: "https://bit.ly/2Z4KKcF"
    }
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Box w="330px" h="220px" position="relative">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings} ref={slider}>
        {images.map((image, index) => (
          <Box
            key={index}
            bgImage={image.url}
            bgSize="cover"
            bgPosition="center"
            h="220px"
            marginBottom="20px"
          />
        ))}
      </Slider>
    </Box>
  );
};
