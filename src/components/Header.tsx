import React, { useState } from "react";
import * as S from "./HeaderStyles";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch, BsFillXCircleFill } from "react-icons/bs";

export const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

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
        <Link to={"/login"}>
          <div className="menuWrap">로그인/회원가입</div>
        </Link>

        <Link to={"/reservationDetails"}>
          <div className="menuWrap">예약/구매 내역</div>
        </Link>

        <div
          className="userMenu"
          onMouseEnter={() => setSubMenuVisible(true)}
          onMouseLeave={() => setSubMenuVisible(false)}
        >
          <div className="relative">
            <div className="menuWrap">
              <span>마이데일리</span>
            </div>
            <div className={isSubMenuVisible ? "subMenu visible" : "subMenu"}>
              <ul>
                <Link to="/wishList">
                  <li>위시리스트</li>
                </Link>

                <Link to="/">
                  <li>로그아웃</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </S.HeaderContainer>
  );
};
