import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Divider = styled.hr`
  opacity: 0.6;
  border-style: solid;
  border-bottom-width: 1px;
  width: 100%;
  margin: 1rem 0;
  border-color: rgb(240, 240, 240);

  &:last-child {
    border: none;
  }
`;
