import * as styled from "./MainCategoryMenu.styles";
import { MdHotel as AllIcon } from "react-icons/md";
import { FaHotel as HotelIcon } from "react-icons/fa6";
import { FaBuildingColumns as ResortIcon } from "react-icons/fa6";
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
          title="모든 숙소" 
          category="all"
        />
        <MainCategoryMenuItem 
          icon={<HotelIcon />} 
          size="1.9rem" 
          title="호텔"
          category="hotel"
        />
        <MainCategoryMenuItem 
          icon={<ResortIcon />} 
          size="1.9rem" 
          title="리조트"
          category="resort"
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
          title="펜션" 
          category="pension"
        />
      </styled.CategoryMenuWrapper>
    </styled.CategoryWrapper>
  );
};