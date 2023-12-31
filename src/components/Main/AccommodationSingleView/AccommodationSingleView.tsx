import { useMemo, useState } from "react";
import * as styled from "./AccommodationSingleView.styles";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useSearchList } from "@hooks/useSearchList";
import { Accommodation } from "../AccommodationGridView/AccommodationGridView.types";
import { printCategory } from "@utils/printCategory";
import { formatPrice } from "@utils/priceFormatter";
import { Button } from "@chakra-ui/react";
import { useNavigateToResultPage } from "@hooks/useNavigateToResultPage";
import { useNavigateToDetailPage } from "@hooks/useNavigateToDetailPage";
import { sliceAccommodationName } from "@utils/sliceAccommodationName";
import { SlickButtonFixProps } from "./AccommodationSingleView.types";

const SlickButtonFix = ({
  currentSlide,
  slideCount,
  children,
  ...props
}: SlickButtonFixProps) => <span {...props}>{children}</span>;

export const AccommodationSingleView = () => {
  const { navigateToResultPage } = useNavigateToResultPage();
  const { navigateToDetailPage } = useNavigateToDetailPage();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings = useMemo(
    () => ({
      dots: false,
      infinite: false,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      centerMode: true,
      centerPadding: "28px",
      slidesToScroll: 1,
      beforeChange: (_: number, next: number) => setCurrentSlide(next),
      nextArrow: (
        <SlickButtonFix>
          <styled.RightArrowButtonWrapper id="next-button">
            <IoIosArrowForward color="#4D4D4D" size="2rem" />
          </styled.RightArrowButtonWrapper>
        </SlickButtonFix>
      ),
      prevArrow: (
        <SlickButtonFix>
          <styled.LeftArrowButtonWrapper id="prev-button">
            <IoIosArrowBack color="#4D4D4D" size="2rem" />
          </styled.LeftArrowButtonWrapper>
        </SlickButtonFix>
      )
    }),
    []
  );

  // 메인 페이지 싱글 뷰에 보여줄 호텔 데이터
  const accommodationData = {
    category: "호텔",
    pageNumber: 60,
    dataSize: 7
  };

  const { data, error } = useSearchList(
    "",
    "",
    "",
    "",
    accommodationData.category,
    accommodationData.pageNumber,
    accommodationData.dataSize
  );

  if (error) {
    console.error("[ERROR] ", error.message);
  }

  return (
    <styled.SingleViewWrapper>
      <styled.MainViewTitleWrapper>
        <styled.MainViewTitle>
          <styled.Title>힐링 호캉스 타임</styled.Title>
          <styled.Description>
            지친 이번주, 호캉스는 어떠세요? 🌿
          </styled.Description>
        </styled.MainViewTitle>
        <styled.MoreButtonWrapper
          onClick={() => navigateToResultPage("호텔", "")}
        >
          <Button
            color="#666666"
            background="white"
            fontSize="0.8rem;"
            _hover={{ bg: "rgba(0, 0, 0, 0.05);" }}
            rightIcon={<ArrowForwardIcon color={"#666666"} />}
          >
            모두 보기
          </Button>
        </styled.MoreButtonWrapper>
      </styled.MainViewTitleWrapper>
      <styled.SwiperContainer>
        <styled.StyledSlider {...settings}>
          {data?.accommodations?.map((item: Accommodation, index: number) => (
            <styled.SwiperItem
              key={item.id}
              id="carousel-accommodation-item"
              onClick={() => navigateToDetailPage(item.id)}
            >
              <img
                src={item.thumbnail}
                alt={`Slide ${index + 1}`}
                loading="lazy"
              />
            </styled.SwiperItem>
          ))}
        </styled.StyledSlider>
      </styled.SwiperContainer>
      <styled.InformationWrapper>
        <styled.InformationInner>
          <styled.InformationRegion>
            {data?.accommodations?.[currentSlide].region} |{" "}
            {printCategory(data?.accommodations?.[currentSlide].type)}
          </styled.InformationRegion>
          <styled.InformationName id="carousel-accommodation-name">
            {sliceAccommodationName(
              data?.accommodations?.[currentSlide].name
            )}
          </styled.InformationName>
          <div>
            <styled.InformationPrice>
              {formatPrice(data?.accommodations?.[currentSlide].min_price)}
            </styled.InformationPrice>
            <styled.InformationPriceTxt>원부터</styled.InformationPriceTxt>
          </div>
        </styled.InformationInner>
      </styled.InformationWrapper>
    </styled.SingleViewWrapper>
  );
};
