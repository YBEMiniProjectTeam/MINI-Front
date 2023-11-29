import * as styled from "./AccommodationGridView.styles";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { MainViewTitleWrapper, MainViewTitle, Title, Description } from "../AccommodationSingleView/AccommodationSingleView.styles";
import { AccommodationGridItem } from "./AccommodationGridItem";
import { Suspense, startTransition, useState } from "react";
import { useSearchList } from "@/hooks/useSearchList";
import { Accommodation } from "./AccommodationGridView.types";
import { printCategory } from "@/utils/printCategory";
import { Spinner } from "@chakra-ui/react";
import { useNavigateToResultPage } from "@/hooks/useNavigateToResultPage";

export const AccommodationGridView = () => {
  const { navigateToResultPage } = useNavigateToResultPage();
  const [activeTab, setActiveTab] = useState('pension'); 
  
  const handleTabClick = (tab: string) => {
    startTransition(() => { 
      setActiveTab(tab);
    });
  };

  const { data, error } = useSearchList(
    '제주', 
    null,
    null,
    null,
    activeTab, // TODO: 쿼리 스트링 수정되면 데이터 잘 바뀌는지 확인
    0,
    4
  );

  if (error) {
    console.error("[ERROR] ", error.message);
  }

  return (
    <Suspense
      fallback={
          <Spinner
            thickness="2px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#db074a"
            size="md"
          />
      }
    >
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
            <styled.CategoryTapItem onClick={() => handleTabClick('pension')}>
              <styled.TabItem $isActive={activeTab === 'pension'} onClick={() => handleTabClick('pension')}>
                {activeTab === 'pension' && <styled.ActivedBar />}
                펜션
              </styled.TabItem>
            </styled.CategoryTapItem>
            <styled.CategoryTapItem onClick={() => handleTabClick('hotel')}>
              <styled.TabItem $isActive={activeTab === 'hotel'}>
                {activeTab === 'hotel' && <styled.ActivedBar />}
                호텔
              </styled.TabItem>
            </styled.CategoryTapItem>
          </styled.CategoryTap>
        </styled.CategoryTapContainer>
      </styled.CategoryTapWrapper>
      <styled.Border />
      <styled.GridWrapper>
        {data?.accommodations?.map((accommodation: Accommodation, index: number) => (
          <AccommodationGridItem
            key={index}
            imageUrl={accommodation.thumbnail}
            summary={`${accommodation.region} | ${printCategory(accommodation.type)}`}
            name={accommodation.name}
            price={accommodation.min_price}
          />
        ))}
      </styled.GridWrapper>
      <styled.MoreButtonWrapper>
        <a>
          <styled.MoreButton onClick={() => navigateToResultPage(activeTab, 'jeju')}>
            <styled.MoreButtonTxt>모두 보기</styled.MoreButtonTxt>
            <ArrowForwardIcon />
          </styled.MoreButton>
        </a>
      </styled.MoreButtonWrapper>
    </styled.GridViewWrapper>
    </Suspense>
  );
};