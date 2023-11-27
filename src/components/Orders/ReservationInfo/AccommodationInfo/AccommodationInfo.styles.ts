import styled from "styled-components";

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
