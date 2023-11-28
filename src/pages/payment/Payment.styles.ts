import styled from "styled-components";

export const Container = styled.div`
  background-color: #f8f8f9;
`;

export const CardContent = styled.div`
  padding: 1rem 0;
`;

export const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 1rem;
  border-bottom: 1px solid #f3f3f4;

  & > span {
    font-size: 1rem;
    letter-spacing: -0.5px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 0.7rem;
  }
`;
