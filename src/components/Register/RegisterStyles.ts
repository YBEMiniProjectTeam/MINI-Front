import styled from "styled-components";

export const LoginFormContainer = styled.div`
  width: 100%;

  h3 {
    font-size: 20px;
    margin: 51px 0px 14px;
  }
  label {
    margin-top: 16px;
  }
  input {
    height: 52px;
    border: 1px solid #e7e7e7;
    &:focus {
      border: none;
    }

    &::placeholder {
      color: #c5c5c5;
    }
  }

  button {
    width: 100%;
    height: 52px;

    margin: 18px 0px 18px;
    padding: 16px 0px 12px;

    font-size: 18px;
  }

  .errorText {
    color: #f13d2b;
  }
`;
