import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const TopContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

export const StayPeriodContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 104px;
`;

export const StayPeriodDetail = styled.span`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px 9px;
  background: rgb(237, 244, 244);
  border-radius: 8px;
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;
  color: rgb(68, 127, 121);
`;

export const StayPeriodBox = styled.div`
  text-align: center;
  padding: 0 2.1rem;

  .type {
    margin-top: 16px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: rgb(136, 136, 136);
  }
  .date {
    margin: 9px 0px 5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: rgb(51, 51, 51);
  }
  .time {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.5px;
    color: rgb(51, 51, 51);
  }
`;

export const PriceLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;
  border-radius: 7px;
  background-color: #f8f8f8;
`;

export const PriceItem = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const PriceDesc = styled.span`
  color: #dc0328;
  cursor: text;
  font-size: 0.8rem;
  font-weight: bold;
`;
