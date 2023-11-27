import * as styled from "./AccommodationGridView.styles";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { MainViewTitleWrapper, MainViewTitle, Title, Description } from "../AccommodationSingleView/AccommodationSingleView.styles";
import { AccommodationGridItem } from "./AccommodationGridItem";
import { useState } from "react";

export const AccommodationGridView = () => {
  const [activeTab, setActiveTab] = useState('펜션'); 
  
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // 활성화 할 데이터
  // const activedData = activeTab === "펜션" ? pensionData : hotelData;

  return (
    <styled.GridViewWrapper>
      <MainViewTitleWrapper>
        <MainViewTitle>
          <Title>제주도</Title>
          <Description>나랑 귤 따러 가지 않을래? 🍊</Description>
        </MainViewTitle>
      </MainViewTitleWrapper>
      <styled.Border />
      <styled.CategoryTapWrapper>
        <styled.CategoryTapContainer>
          <styled.CategoryTap>
            <styled.CategoryTapItem onClick={() => handleTabClick('펜션')}>
              <styled.TabItem $isActive={activeTab === '펜션'} onClick={() => handleTabClick('펜션')}>
                {activeTab === '펜션' && <styled.ActivedBar />}
                펜션
              </styled.TabItem>
            </styled.CategoryTapItem>
            <styled.CategoryTapItem onClick={() => handleTabClick('호텔')}>
              <styled.TabItem $isActive={activeTab === '호텔'}>
                {activeTab === '호텔' && <styled.ActivedBar />}
                호텔
              </styled.TabItem>
            </styled.CategoryTapItem>
          </styled.CategoryTap>
        </styled.CategoryTapContainer>
      </styled.CategoryTapWrapper>
      <styled.Border />
      <styled.GridWrapper>
        <AccommodationGridItem
          imageUrl='https://yaimg.yanolja.com/v5/2023/01/12/17/63c0474bdc5902.06272388.jpg'
          summary='제주 | 펜션'
          name='서귀포 모이라 펜션'
          price={69000}
        />
        <AccommodationGridItem
          imageUrl='https://yaimg.yanolja.com/v5/2022/10/11/14/6345795b600849.89763742.jpg'
          summary='제주 | 펜션'
          name='제주 들멍놀멍펜션'
          price={180000}
        />
      </styled.GridWrapper>
      <styled.GridWrapper>
        <AccommodationGridItem
          imageUrl='https://yaimg.yanolja.com/v5/2023/09/13/11/6501a212894bb6.59640283.jpg'
          summary='제주 | 펜션'
          name='서귀포 상상나무키즈펜션'
          price={79000}
        />
        <AccommodationGridItem
          imageUrl='https://yaimg.yanolja.com/v5/2023/10/10/11/65253885eb92b2.62972396.jpg'
          summary='제주 | 펜션'
          name='제주 패밀리가든빌리지펜션'
          price={300000}
        />
      </styled.GridWrapper>
      <styled.MoreButtonWrapper>
        <a>
          <styled.MoreButton>
            <styled.MoreButtonTxt>모두 보기</styled.MoreButtonTxt>
            <ArrowForwardIcon />
          </styled.MoreButton>
        </a>
      </styled.MoreButtonWrapper>
    </styled.GridViewWrapper>
  );
};
