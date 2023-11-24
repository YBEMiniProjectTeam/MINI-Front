import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Inner = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 3.6%;
`;

export const Divider = styled.hr`
  position: relative;
  left: 0px;
  border: 0px;
  display: block;
  width: 100%;
  height: 1px;
  margin: 2rem 0px;
  background: rgba(0, 0, 0, 0.07);
`;

export const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h2 {
    font-size: 1.5rem;
    line-height: 1.4;
    letter-spacing: -0.5px;
    font-weight: 700;
    padding-bottom: 1rem;
  }
`;
