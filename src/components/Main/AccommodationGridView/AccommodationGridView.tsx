import * as styled from "./AccommodationGridView.styles";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  MainViewTitleWrapper,
  MainViewTitle,
  Title,
  Description
} from "../AccommodationSingleView/AccommodationSingleView.styles";
import { AccommodationGridItem } from "./AccommodationGridItem";
import { Suspense, startTransition, useEffect, useState } from "react";
import { useSearchList } from "@hooks/useSearchList";
import { Accommodation, RegionProps } from "./AccommodationGridView.types";
import { printCategory } from "@utils/printCategory";
import { Button, Spinner } from "@chakra-ui/react";
import { useNavigateToResultPage } from "@hooks/useNavigateToResultPage";
import { getAuthLocalStorage } from "@utils/getAuthLocalStorage";

export const AccommodationGridView = ({ region, title, description, cottagePageNumber, hotelPageNumber, dataSize }: RegionProps) => {
  const categoryTab = {
    cottage: "펜션",
    hotel: "호텔",
  };
  const { navigateToResultPage } = useNavigateToResultPage();
  const [activeTab, setActiveTab] = useState(categoryTab.cottage);


  const handleTabClick = (tab: string) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  const { headers } = getAuthLocalStorage();

  const { data, error, refetch } = useSearchList(
    "",
    region,
    "",
    "",
    activeTab,
    activeTab === categoryTab.cottage ? cottagePageNumber : hotelPageNumber,
    dataSize,
    null,
    headers
  );

  if (error) {
    console.error("[ERROR] ", error.message);
  }

  // console.log(data);
  
  useEffect(() => {
    refetch();
  }, [activeTab]);

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
            <Title>{title}</Title>
            <Description>{description}</Description>
          </MainViewTitle>
        </MainViewTitleWrapper>
        <styled.Border />
        <styled.CategoryTapWrapper>
          <styled.CategoryTapContainer>
            <styled.CategoryTap>
              <styled.CategoryTapItem onClick={() => handleTabClick(categoryTab.cottage)}>
                <styled.TabItem
                  role="tab"
                  aia-selected={activeTab === categoryTab.cottage}
                  $isActive={activeTab === categoryTab.cottage}
                >
                  {activeTab === categoryTab.cottage && <styled.ActivedBar />}
                  펜션
                </styled.TabItem>
              </styled.CategoryTapItem>
              <styled.CategoryTapItem onClick={() => handleTabClick(categoryTab.hotel)}>
                <styled.TabItem 
                role="tab"
                aia-selected={activeTab === categoryTab.hotel}
                $isActive={activeTab === categoryTab.hotel}
                >
                  {activeTab === categoryTab.hotel && <styled.ActivedBar />}
                  호텔
                </styled.TabItem>
              </styled.CategoryTapItem>
            </styled.CategoryTap>
          </styled.CategoryTapContainer>
        </styled.CategoryTapWrapper>
        <styled.Border />
        <styled.GridWrapper>
          {data?.accommodations?.map(
            (accommodation: Accommodation) => (
              <AccommodationGridItem
                key={accommodation.id}
                id={accommodation.id}
                imageUrl={accommodation.thumbnail}
                summary={`${accommodation.region} | ${printCategory(
                  accommodation.type
                )}`}
                name={accommodation.name}
                price={accommodation.min_price}
              />
            )
          )}
        </styled.GridWrapper>
        <styled.MoreButtonWrapper
          onClick={() => navigateToResultPage(activeTab, region)}
        >
          <Button
            color="#666666"
            bg="white"
            border="1px solid #DCDCDD;"
            w="100%"
            h="44px;"
            _hover={{ bg: "rgba(0, 0, 0, 0.05);" }}
            rightIcon={<ArrowForwardIcon />}
          >
            모두 보기
          </Button>
        </styled.MoreButtonWrapper>
      </styled.GridViewWrapper>
    </Suspense>
  );
};
