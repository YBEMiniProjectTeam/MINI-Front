import React from "react";
import * as styled from "./MainCategoryMenu.styles";
import { MainCategoryMenuItemProps } from "./MainCategoryMenu.types";
import { useNavigateToResultPage } from "@/hooks/useNavigateToResultPage";

export const MainCategoryMenuItem: React.FC<MainCategoryMenuItemProps> = ({ icon, size, title, category, iconColor = '#6c6c6c' }) => {
  const { navigateToResultPage } = useNavigateToResultPage();

  return (
    <styled.CategoryMenuItem
      onClick={() => navigateToResultPage(category)}
    >
      {React.cloneElement(icon, { size, color: iconColor })}
      <styled.MenuTitle>{title}</styled.MenuTitle>
    </styled.CategoryMenuItem>
  );
};