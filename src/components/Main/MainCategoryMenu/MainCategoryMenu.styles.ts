import styled from "styled-components";

export const CategoryWrapper = styled.nav`
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 24px;
`;

export const CategoryMenuWrapper = styled.ul`  
  height: 82px;
  display: flex;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 0px 8px 0px;
  margin: 8px 0px;
`;

export const CategoryMenuItem = styled.li`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &:hover {
    cursor: pointer;
  }
`;

export const MenuIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuTitle = styled.div`
  font-size: 0.85rem;
`;