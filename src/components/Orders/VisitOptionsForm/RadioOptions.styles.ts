import styled from "styled-components";

export const RadioContainer = styled.label<{ checked: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  transition:
    background-color 0.2s,
    border-color 0.2s,
    color 0.2s;

  /* Apply the checked styles if the checked prop is true */
  ${({ checked }) =>
    checked &&
    `
    background-color: pink.100;
    color: pink.600;
    border-color: pink.600;
  `}
`;

export const Radio = styled.div``;
