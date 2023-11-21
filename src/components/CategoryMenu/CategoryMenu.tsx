import React, { ReactElement } from "react";
import * as styled from './CategoryMenu.styles';
import { MdHotel as AllIcon } from "react-icons/md";
import { FaHotel as HotelIcon } from "react-icons/fa6";
import { RiHotelFill as MotelIcon } from "react-icons/ri";
import { FaHouse as VillaIcon } from "react-icons/fa6";

interface CategoryMenuItemProps {
  icon: ReactElement;
  size: string;
  title: string;
  iconColor?: string;
}

const CategoryMenuItem: React.FC<CategoryMenuItemProps> = ({ icon, size, title, iconColor = '#6c6c6c' }) => (
  <styled.CategoryMenuItem>
    {React.cloneElement(icon, { size, color: iconColor })}
    <styled.MenuTitle>{title}</styled.MenuTitle>
  </styled.CategoryMenuItem>
);

export const CategoryMenu = () => {
  return (
    <styled.CategoryWrapper>
      <styled.CategoryMenuWrapper>
        <CategoryMenuItem 
          icon={<AllIcon />} 
          size="2.3rem" 
          title="국내 모든 숙소" 
        />
        <CategoryMenuItem 
          icon={<HotelIcon />} 
          size="1.9rem" 
          title="호텔/리조트"
        />
        <CategoryMenuItem 
          icon={<MotelIcon />} 
          size="2.4rem" 
          title="모텔" 
        />
        <CategoryMenuItem 
          icon={<VillaIcon />} 
          size="2.2rem" 
          title="풀빌라/펜션" 
        />
      </styled.CategoryMenuWrapper>
    </styled.CategoryWrapper>
  );
};
