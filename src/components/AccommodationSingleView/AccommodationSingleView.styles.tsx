import styled from "styled-components";

export const SingleViewWrapper = styled.div`
  padding: 16px 0px 0px;
  display: block;
`;

export const MainViewTitleWrapper = styled.div`
  position: relative;
  margin-left: 24px;
  padding: 0px 64px 0px 0px;
`;

export const MainViewTitle = styled.div`
  padding: 16px 0px;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 24px;
  color: #4D4D4D;
`;

export const Description = styled.div`
  font-size: 0.85rem;
  line-height: 18px;
  color: #4D4D4D;
`;

export const MoreButtonWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 24px;
  margin-bottom: 18px;
`;

export const MoreButtonTxt = styled.div`
  display: inline-block;
  font-size: 0.75rem;
  color: #666666;
  margin-right: 4px;
`;

export const SwiperContainer = styled.div`
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;
`;

export const SwiperWrapper = styled.div`
  display: flex;
  justify-content:center;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
`;

const ArrowButtonWrapper = styled.button`
  border-radius: 50%;
  padding: 0.25rem;
  display: flex;
  position: absolute;
  top: 50%;
  z-index: 2;

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.07);
  }
`;

export const LeftArrowButtonWrapper = styled(ArrowButtonWrapper)`
  left: 12px;
  transform: translate(-50%, -50%);
`;

export const RightArrowButtonWrapper = styled(ArrowButtonWrapper)`
  right: 12px;
  transform: translate(50%, -50%);
`;

export const SwiperItem = styled.div`
  flex: 0 0 calc(684px + 10px); 
  margin: 0 12px;
  position: relative;
`;

export const InformationWrapper = styled.div`
  position: relative;
  margin: 0px 24px 16px;
  height: 83px;
  background-color: #fff;
`;

export const InformationInner = styled.div`
  position: absolute;
  z-index: 1;
  top: -16px;
  left: -1px;
  width: 100%;
  padding: 0px 4px 0px 8px;
  background-color: #fff;
`;

export const InformationRegion = styled.p`
  margin: 12px 0px 3px;
  font-size: 0.85rem;
  line-height: 1;
  color: #323232;
`;

export const InformationName = styled.p`
  margin: 0px 0px 4px;
  line-height: 22px;
  font-weight: 500;
  color: #4D4D4D;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const InformationPrice = styled.span`
  font-weight: 700;
  color: #333333;
  line-height: 22px;
`;

export const InformationPriceTxt = styled.span`
  display: inline-block;
  margin: 0px 0px 0px 1px;
  vertical-align: text-bottom;
  font-size: 0.85rem;
  line-height: 16px;
  font-weight: 500;
  color: #4D4D4D;
`;

