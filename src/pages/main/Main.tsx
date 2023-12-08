import * as styled from "./Main.styles";
import { MainCarousel } from "@components/Main/MainCarousel/MainCarousel";
import { MainCategoryMenu } from "@components/Main/MainCategoryMenu/MainCategoryMenu";
import { AccommodationSingleView } from "@components/Main/AccommodationSingleView/AccommodationSingleView";
import { AccommodationGridView } from "@components/Main/AccommodationGridView/AccommodationGridView";

export const Main = () => {
  // 메인 페이지 그리드 뷰에 보여줄 지역에 해당되는 데이터
  const accommodationData = {
    region: "서귀포시",
    title: "상큼한 제주",
    description: "제철 귤 따러 제주로 떠나보세요! 🍊",
    cottagePageNumber: 2,
    hotelPageNumber: 3,
    dataSize: 4,
  }

  return (
    <styled.PageContainer>
      <styled.PageWrapper>
        <styled.shortHeightDiv/>
        <styled.shortHeightDiv/>
        <MainCarousel />
        <styled.heightDiv/>
        <MainCategoryMenu />
        <styled.shortHeightDiv/>
        <AccommodationSingleView/>
        <styled.shortHeightDiv/>
        <AccommodationGridView
          region={accommodationData.region}  
          title={accommodationData.title}
          description={accommodationData.description}
          cottagePageNumber={accommodationData.cottagePageNumber}
          hotelPageNumber={accommodationData.hotelPageNumber}
          dataSize={accommodationData.dataSize}
        />
        <styled.shortHeightDiv/>
        <styled.shortHeightDiv/>
      </styled.PageWrapper> 
    </styled.PageContainer>
  );
};
