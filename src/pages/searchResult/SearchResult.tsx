import React from "react";
import * as styles from "./SearchResult.styles";
import Search from "@components/Search/Search";
import SearchList from "@components/SearchList/SearchList";
import { useSearchParams } from "react-router-dom";

export const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const category = searchParams.get("category");

  return (
    <styles.SearchContainer>
      <Search keyword={keyword} category={category} />
      <SearchList />
    </styles.SearchContainer>
  );
};
