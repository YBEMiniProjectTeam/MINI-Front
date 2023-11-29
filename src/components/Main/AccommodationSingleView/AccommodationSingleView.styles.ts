import styled from "styled-components";
import Slider from "react-slick";

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
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 24px;
  color: #4D4D4D;
`;

export const Description = styled.div`
  line-height: 18px;
  color: #4D4D4D;
`;

export const MoreButtonWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 24px;
  margin-bottom: 18px;
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
  position: absolute;
  top: 50%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.2rem;
  height: 2.2rem;

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const LeftArrowButtonWrapper = styled(ArrowButtonWrapper)`
  left: 12px;
`;

export const RightArrowButtonWrapper = styled(ArrowButtonWrapper)`
  right: 12px;
`;

export const StyledSlider = styled(Slider)`
  max-width: 768px; 

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

export const SwiperItem = styled.div`
  outline: none;
  
  &:hover {
    cursor: pointer;
  }

  img {
    width: 696px;
    height: 480px;
    object-fit: cover;
  }
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
  line-height: 1;
  color: #323232;
  font-size: 0.8rem;
`;

export const InformationName = styled.p`
  margin: 0px 0px 4px;
  line-height: 22px;
  font-weight: 500;
  font-size: 1.1rem;
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
  line-height: 16px;
  font-weight: 500;
  color: #4D4D4D;
  font-size: 0.8rem;
`;

export const LoadingWraaper = styled.div`
  display: flex;
  justify-content: center;
`;