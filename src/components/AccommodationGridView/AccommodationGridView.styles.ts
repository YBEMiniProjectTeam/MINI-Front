import styled from "styled-components";

export const GridViewWrapper = styled.div`
  display: block;
`;

export const Border = styled.div`
  margin: 0px 24px;
  width: auto;
  height: 1px;
  background: #E7E7E7;   
`;

export const CategoryTapWrapper = styled.div`
  position: relative;
  background: #fff;
  padding: 0px 24px 0px 0px;
  box-sizing: border-box;
  display: block;
  height: 44px;
`;

export const CategoryTapContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  z-index: 1;
  position: absolute;
  left: 24px;
`;

export const CategoryTap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;  
`;

export const CategoryTapItem = styled.div`
  margin-right: 16px;
  padding: 13px 5px;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #4d4d4d;
  font-weight: 500;
  width: auto;
  height: 44px;
  position: relative;
   
  &:hover {
    cursor: pointer;
  }
`;

export const ActivedItem = styled.span`
  color: #323232;
`;

export const InactivedItem = styled.span`
  color: #666666;
`;

export const ActivedBar = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background:#4d4d4d;;
  left: 0px;
  bottom: 0px;
`;

export const GridWrapper = styled.div`
  margin-top: 16px;
  padding: 0px 24px;
  display: block;
  height: 412px;
`;

export const GridItem = styled.div`
  float: left;
  width: 49%;
  margin-bottom: 20px;
  display: block;

  &:nth-child(2n+1) {
    margin-right: 1%;
  }

  &:nth-child(2n) {
    margin-left: 1%;
  }
`;

export const GridItemImageWrapper = styled.div`
  width: 100%;
  height: 282px;
  background: #E7E7E7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridItemImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export const InformationWrapper = styled.div`
  min-height: 101px;
  height: 100%;
  margin-top: 8px;
  display: block;
`;

export const InformationSummary = styled.p`
  font-size: 0.8rem;
  line-height: 14px;
  color: #888888;
  margin-bottom: 2px;
`;

export const InformationName = styled.p`
  color: #4D4D4D;
  line-height: 20px;
  font-weight: 500;
`;

export const InformationPrice = styled.span`
  margin-top: 4px;
  font-weight: 700;
  color: #333333;
`;

export const InformationPriceTxt = styled.span`
  color: #333333;
  font-size: 0.8rem;
  font-weight: 700;
  display: inline-block;
`;

export const MoreButtonWrapper = styled.div`
  padding: 0px 24px;
  margin-bottom: 20px;
`;

export const MoreButton = styled.button`
  border: 1px solid #DCDCDD;
  border-radius: 2px;
  display: block;
  width: 100%;
  height: 44px;
  background: #fff;
`;

export const MoreButtonTxt = styled.span`
  display: inline-block;
  line-height: 20px;
  color: #666666;
  font-weight: 500;
  position: relative;
  padding-right: 2px;
`;
