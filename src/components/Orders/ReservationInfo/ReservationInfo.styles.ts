import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #f3f3f4;
`;

export const TopContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 24px 24.5px;
`;

export const HotelName = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: rgb(17, 17, 17);
`;

export const RoomType = styled.div`
  font-size: 16px;
  padding: 8px 0px 0px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(51, 51, 51);
`;

export const BedType = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgb(51, 51, 51);
  padding-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 1rem;
    height: 1rem;
    margin-right: 4px;
  }
`;

export const GuestNum = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgb(51, 51, 51);
  padding-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 1rem;
    height: 1rem;
    margin-right: 4px;
  }
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
  padding: 0px 38px;

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
