import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledSlider = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
`;

export const Carousel = styled.div`
  height: 350px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-clip: padding-box;
  background-color: rgba(255, 255, 255, 0.9);
  border-color: rgba(0, 0, 0, 0.08);
  box-shadow:
    0 0 0 1px transparent,
    0 0 0 4px transparent,
    0 2px 4px rgba(0, 0, 0, 0.18);
  transition: transform 0.25s cubic-bezier(0.2, 0, 0, 1);
  border-radius: 50%;
  padding: 0.5rem;
  z-index: 2;

  &:hover {
    border-color: rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    box-shadow:
      0 0 0 1px transparent,
      0 0 0 4px transparent,
      0 6px 16px rgba(0, 0, 0, 0.12);
    transform: translateY(-50%) scale(1.04);
  }

  &.slick-prev {
    left: 25px;
  }

  &.slick-next {
    right: 25px;
  }
`;

export const CustomDots = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  z-index: 3;

  li {
    display: inline-block;
    margin: 0 3px;
    button {
      border: none;
      background-color: #fff;
      opacity: 0.75;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      padding: 4.5px;

      &:hover,
      &:focus {
        opacity: 1;
      }

      &:before {
        content: none;
      }
    }
  }

  .slick-active button {
    opacity: 1;
  }
`;
