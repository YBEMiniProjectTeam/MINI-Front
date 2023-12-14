import styled from "styled-components";
import theme from "@theme";

export const UserInfoContainer = styled.div`
  padding: 1rem 1rem 1.6rem;
  color: ${theme.colors.gray[500]};
`;

export const UserInfoWrapperRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  padding: 0.3rem 0;

  &:last-child {
    margin: 0;
  }
`;
export const UserInfoLabel = styled.div`
  flex: auto;
  font-size: 0.9rem;
`;
export const UserInfoItem = styled.div`
  flex: 5;
  justify-content: flex-end;
  display: flex;
  font-size: 0.9rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
