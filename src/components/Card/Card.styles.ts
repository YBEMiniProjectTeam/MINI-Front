import styled from "styled-components";

export const CardContainer = styled.div`
  border-top: 1px solid rgb(240, 240, 240);
  border-bottom: 1px solid rgb(240, 240, 240);
  padding: 1.2rem 0;
  margin: 1rem 0;
  background: #fff;
`;

export const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 1rem;

  & > span {
    font-size: 1rem;
    line-height: 1.4;
    letter-spacing: -0.5px;
    font-weight: 700;
    padding-bottom: 1rem;
  }
`;
