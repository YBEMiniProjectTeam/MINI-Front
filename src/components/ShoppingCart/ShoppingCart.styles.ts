import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  padding-bottom: 32px;
  background-color: #f8f8f9;

  position: relative;

  .DeleteContainer {
    position: fixed;
    bottom: 5%;
    left: 50%;

    border: 4px solid #000;
    border-radius: 12px;
    padding: 10px;
    z-index: 100;

    background-color: white;
  }
  h3 {
    font-size: 24px;
    font-weight: 700;

    margin-bottom: 16px;
  }
  .title {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.5;

    margin-bottom: 32px;
  }
  .colorGray {
    color: gray;
  }

  .warningText {
    color: red;
    font-weight: 700;
  }

  .WrapStyle {
    background-color: #fff;

    padding: 16px;
    margin-top: 16px;
    Label span:nth-of-type(1) {
      border: 1px solid black;
    }
    &:nth-of-type(1) {
      margin: 0px 0px 16px;
    }
  }

  .selectCheckWrap {
    display: flex;
    justify-content: space-between;

    div:nth-of-type(2) {
      color: blue;
    }
  }

  .cartInfoContainer {
    position: relative;

    .titleWrap {
      padding: 16px 0px;

      border-bottom: 2px solid #e5e5e5;
    }

    .roomDeleteButton {
      position: absolute;
      right: 16px;
    }
    .roomListWrap {
      padding: 16px 0px;

      cursor: pointer;
    }
    .dataList {
      display: flex;
      gap: 16px;

      margin: 16px 0px;

      img {
        width: 120px;
        height: 120px;
      }
    }
    .priceWrap {
      display: flex;
      justify-content: end;

      text-align: right;
    }
  }

  .roomPrice {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 16px 0px;
  }

  .expectedPayment {
    border-top: 3px dashed #e5e5e5;
    div:last-of-type {
      font-size: 24px;
      font-weight: 700;
    }
  }

  .noneCartList {
    height: 300px;

    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .reservationButton {
    width: 100%;
  }
`;
