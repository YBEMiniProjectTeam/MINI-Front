import styled from "styled-components";
export const Header = styled.div`
  width: 100%;
  height: 72px;

  display: flex;
  justify-content: center;
`;
export const HeaderContainer = styled.div`
  position: fixed;

  width: 1280px;
  height: 72px;

  padding: 0px 24px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  z-index: 10;

  background-color: #fff;

  .header-title {
    font-size: 24px;
    font-weight: 700;
  }

  .menu-container {
    height: inherit;

    display: flex;
    align-items: center;
    gap: 16px;

    .menu-wrap {
      position: relative;

      border-radius: 8px;

      padding: 10px 12px;

      cursor: pointer;
    }
    .menu-wrap:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
    .user-menu {
      height: inherit;
      display: flex;
      align-items: center;
      .relative {
        position: relative;
      }
      .sub-menu {
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
      .sub-menu--visible {
        visibility: visible;
      }
    }
  }
`;
export const InputContainer = styled.form`
  .input-container {
    position: relative;
    margin: 0px 32px;

    input[type="text"] {
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

    .delete-button {
      position: absolute;
      right: 64px;
      bottom: 10px;
    }
    .search-button {
      position: absolute;
      right: 16px;
      bottom: 10px;
    }
  }
`;
