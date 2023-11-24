import * as styled from "./MainCategoryMenu.styles";
import { MdHotel as AllIcon } from "react-icons/md";
import { FaHotel as HotelIcon } from "react-icons/fa6";
import { RiHotelFill as MotelIcon } from "react-icons/ri";
import { FaHouse as PensionIcon } from "react-icons/fa6";
import { MainCategoryMenuItem } from "./MainCategoryMenuItem";

export const MainCategoryMenu = () => {
  return (
    <styled.CategoryWrapper>
      <styled.CategoryMenuWrapper>
        <MainCategoryMenuItem 
          icon={<AllIcon />} 
          size="2.3rem" 
          title="국내 모든 숙소" 
          category="all"
        />
        <MainCategoryMenuItem 
          icon={<HotelIcon />} 
          size="1.9rem" 
          title="호텔/리조트"
          category="hotel"
        />
        <MainCategoryMenuItem 
          icon={<MotelIcon />} 
          size="2.4rem" 
          title="모텔" 
          category="motel"
        />
        <MainCategoryMenuItem 
          icon={<PensionIcon />} 
          size="2.2rem" 
          title="풀빌라/펜션" 
          category="pension"
        />
      </styled.CategoryMenuWrapper>
    </styled.CategoryWrapper>
  );
};
