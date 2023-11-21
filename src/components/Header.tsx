import React, { useState } from "react";
import * as S from "./HeaderStyles";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch, BsFillXCircleFill } from "react-icons/bs";

export const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleClickValueResetButton = () => {
    setInputValue("");
  };

  const handleClickSearchButton = () => {
    navigate(`/searchResult?keyword=${inputValue}`);
  };
  return (
    <S.HeaderContainer>
      <Link to="/">
        <div className="Title">Daily Hotel</div>
      </Link>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="지역이나 숙소, 레저를 검색해보세요."
          onChange={handleChangeInput}
          value={inputValue}
        ></input>

        {inputValue !== "" ? (
          <button
            className="deleteButton"
            onClick={handleClickValueResetButton}
          >
            <BsFillXCircleFill size="24"></BsFillXCircleFill>
          </button>
        ) : null}

        <button className="searchButton" onClick={handleClickSearchButton}>
          <BsSearch size="24"></BsSearch>
        </button>
      </div>

      <div className="menuContainer">
        <Link to={"/login"}>로그인/회원가입</Link>
      </div>
    </S.HeaderContainer>
  );
};
