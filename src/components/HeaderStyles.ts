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
    a {
      font-size: 16px;
    }
  }
`;
