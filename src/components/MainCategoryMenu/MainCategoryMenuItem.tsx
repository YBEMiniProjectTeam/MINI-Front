import React from "react";
import * as styled from "./MainCategoryMenu.styles";
import { MainCategoryMenuItemProps } from "./MainCategoryMenu.types";

export const MainCategoryMenuItem: React.FC<MainCategoryMenuItemProps> = ({ icon, size, title, iconColor = '#6c6c6c' }) => (
  <styled.CategoryMenuItem>
    {React.cloneElement(icon, { size, color: iconColor })}
    <styled.MenuTitle>{title}</styled.MenuTitle>
  </styled.CategoryMenuItem>
);