import * as styled from "./Main.styles";
import { MainCarousel } from "@components/Main/MainCarousel/MainCarousel";
import { MainCategoryMenu } from "@components/Main/MainCategoryMenu/MainCategoryMenu";
import { AccommodationSingleView } from "@components/Main/AccommodationSingleView/AccommodationSingleView";
import { AccommodationGridView } from "@components/Main/AccommodationGridView/AccommodationGridView";

export const Main = () => {
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
        <AccommodationGridView/>
        <styled.shortHeightDiv/>
        <styled.shortHeightDiv/>
      </styled.PageWrapper> 
    </styled.PageContainer>
  );
};
