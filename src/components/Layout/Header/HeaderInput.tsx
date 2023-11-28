import { useState } from "react";
import { BsSearch, BsFillXCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const HeaderInput = (): JSX.Element => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);
  };

  const handleClickValueResetButton = (): void => {
    setInputValue("");
  };

  const handleClickSearchButton = (): void => {
    navigate(`/searchResult?keyword=${inputValue}`);
  };
  const handleKeyDownEnter = (
    e: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (e.key === "Enter") {
      navigate(`/searchResult?keyword=${inputValue}`);
    }
  };
  return (
    <div className="inputContainer">
      <input
        type="text"
        placeholder="지역이나 숙소, 레저를 검색해보세요."
        onChange={handleChangeInput}
        value={inputValue}
        onKeyDown={handleKeyDownEnter}
      ></input>

      {inputValue !== "" ? (
        <button className="deleteButton" onClick={handleClickValueResetButton}>
          <BsFillXCircleFill size="24"></BsFillXCircleFill>
        </button>
      ) : null}

      <button className="searchButton" onClick={handleClickSearchButton}>
        <BsSearch size="24"></BsSearch>
      </button>
    </div>
  );
};
