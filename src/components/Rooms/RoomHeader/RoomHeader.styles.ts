import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
`;

export const RoomTitle = styled.span`
  display: block;
  font-size: 1.8rem;
  line-height: 1.6;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  color: rgb(17, 17, 17);
  margin: 1rem 0 0.5rem;
`;

export const RoomDesc = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  color: rgb(102, 102, 102);
  font-weight: 400;
`;

export const RoomType = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-top: 1px solid rgb(240, 240, 240);
  border-bottom: 1px solid rgb(240, 240, 240);
  margin-top: 2rem;
`;

export const RoomItem = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  gap: 0.3rem;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  font-size: 0.86rem;
  font-weight: 400;
  text-align: center;
  white-space: pre-wrap;
  letter-spacing: -0.2px;

  & > svg {
    width: 1.3rem;
    height: 1.3rem;
  }
`;
