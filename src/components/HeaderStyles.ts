import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 1280px;
  height: 72px;

  padding: 0px 24px;

  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: hsla(0, 0%, 92.9%, 0);

  .Title {
    font-size: 24px;
    font-weight: 700;
  }
  .inputContainer {
    position: relative;
    margin: 0px 32px;

    Input[type="text"] {
      width: 518px;
      height: 44px;

      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 6px;

      padding: 10px 16px;

      font-size: 16px;
      color: rgba(0, 0, 0, 0.92);
    }
    input[type="text"]:focus {
      outline: none;

      border: 1px solid black;
    }

    .deleteButton {
      position: absolute;
      right: 64px;
      bottom: 10px;
    }
    .searchButton {
      position: absolute;
      right: 16px;
      bottom: 10px;
    }
  }
  .menuContainer {
    height: inherit;

    display: flex;
    align-items: center;
    gap: 16px;
    * {
      font-size: 16px;
    }
    .menuWrap {
      position: relative;

      border-radius: 8px;

      padding: 10px 12px;

      cursor: pointer;
    }
    .menuWrap:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
    .userMenu {
      height: inherit;
      display: flex;
      align-items: center;
      .relative {
        position: relative;
      }
      .subMenu {
        width: 200px;

        position: absolute;
        top: 56px;
        left: 0;

        padding: 12px 0px;

        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 6px;

        box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 16px;

        visibility: hidden;
        background-color: #fff;
        li {
          padding: 10px 24px;
        }
        li:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
      }
      .visible {
        visibility: visible;
      }
    }
  }
`;
