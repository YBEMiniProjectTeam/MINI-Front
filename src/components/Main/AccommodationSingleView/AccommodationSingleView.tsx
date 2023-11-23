import React from "react";
import * as styled from './AccommodationSingleView.styles';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export const AccommodationSingleView = () => {
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
        <styled.LeftArrowButtonWrapper>
          <IoIosArrowBack size="1.2rem"/>
        </styled.LeftArrowButtonWrapper>
        <styled.SwiperWrapper>
          <styled.SwiperItem>
            <a href="/products/:productDetail">
              <img src="https://yaimg.yanolja.com/v5/2022/10/17/15/634d7563600ed4.17945107.jpg"></img>
            </a>
          </styled.SwiperItem>
          <styled.SwiperItem>
            <a href="/products/:productDetail">
              <img src="https://yaimg.yanolja.com/v5/2022/10/17/15/634d7563600ed4.17945107.jpg"></img>
            </a>
          </styled.SwiperItem>
          <styled.SwiperItem>
            <a href="/products/:productDetail">
              <img src="https://yaimg.yanolja.com/v5/2022/10/17/15/634d7563600ed4.17945107.jpg"></img>
            </a>
          </styled.SwiperItem>
        </styled.SwiperWrapper>
        <styled.RightArrowButtonWrapper>
          <IoIosArrowForward size="1.2rem"/>
        </styled.RightArrowButtonWrapper>
      </styled.SwiperContainer>
      <styled.InformationWrapper>
        <styled.InformationInner>
          <styled.InformationRegion>강원</styled.InformationRegion>
          <styled.InformationName>강릉 세인트존스 호텔</styled.InformationName>
          <div>
            <styled.InformationPrice>89,000</styled.InformationPrice>
            <styled.InformationPriceTxt>원부터</styled.InformationPriceTxt>
          </div>
        </styled.InformationInner>
      </styled.InformationWrapper>
    </styled.SingleViewWrapper>
  );
};
