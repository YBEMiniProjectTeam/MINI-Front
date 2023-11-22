import styled from "styled-components";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: end;

  z-index: 100;
`;
export const ModalContainer = styled.div`
  width: 768px;
  height: 40%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #fff;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  padding: 12px 24px;

  label span:nth-of-type(1) {
    border: 2px solid #e7e7e7;
  }
`;
