import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 1.4rem 1.4rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  line-height: 1.4;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

export const Badge = styled.span`
  display: flex;
  align-items: center;

  & > span {
    color: rgb(219, 7, 74);
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.8;
    border-radius: 0.2rem;
    padding: 0 0.6rem;
    background: rgba(219, 7, 74, 0.1);
  }
`;

export const Title = styled.span`
  letter-spacing: -0.5px;

  & > h3 {
    font-size: 1.26rem;
    font-weight: 700;
  }
`;

export const RoomItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem 0;
  font-size: 0.99rem;

  & > svg {
    margin-right: 0.3rem;
  }
`;

export const PriceWrapper = styled.div`
  position: absolute;
  right: 24px;
  bottom: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const TotalPrice = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: -0.5px;
`;
export const ButtonWrapper = styled.div`
  margin-top: 16px;
`;

export const Button = styled.button`
  width: auto;
  display: flex;
  background: rgb(247, 247, 247);
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  overflow: hidden;
  font-size: 0.9rem;
  padding: 0.3rem 0.6rem;
  margin: 0.3rem 0;
  color: rgb(219, 7, 74);

  & > svg {
    margin-left: 0.5rem;
    color: #666666;
  }
`;
