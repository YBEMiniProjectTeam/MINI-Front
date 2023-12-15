import { useState } from "react";
import { BsSearch, BsFillXCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import * as styles from "./Header.styles";

export interface HeaderProps {
  accessToken: string;
}

export const HeaderInput = ({ accessToken }: HeaderProps) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const isLogin = accessToken ? true : false;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleClickValueResetButton = () => {
    setInputValue("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate(`/searchResult?keyword=${inputValue}`);
  };
  return (
    <styles.InputContainer $isLogin={isLogin} onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          placeholder="지역이나 숙소, 레저를 검색해보세요."
          onChange={handleChangeInput}
          value={inputValue}
        ></input>

        {inputValue !== "" ? (
          <button
            className="delete-button"
            onClick={handleClickValueResetButton}
            type="button"
          >
            <BsFillXCircleFill size="24"></BsFillXCircleFill>
          </button>
        ) : null}

        <button className="search-button" type="submit">
          <BsSearch size="24"></BsSearch>
        </button>
      </div>
    </styles.InputContainer>
  );
};
