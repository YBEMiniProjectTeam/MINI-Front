import React from "react";
import * as styles from "./SearchResult.styles";
import Search from "../../components/Search/Search";
import SearchList from "../../components/SearchList/SearchList";

export const SearchResult = () => {
  return (
    <styles.SearchContainer>
      <Search />
      <SearchList />
    </styles.SearchContainer>
  );
};
