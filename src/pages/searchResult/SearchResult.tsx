import React from "react";
import * as styles from "./SearchResult.styles";
import Search from "@components/Search/Search";
import SearchList from "@components/SearchList/SearchList";
import { useSearchParams } from "react-router-dom";

export const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams?.get("keyword");
  const category = searchParams?.get("category");
  const region = searchParams?.get("region");

  return (
    <styles.SearchContainer>
      <Search keyword={keyword} category={category} region={region} />
      <SearchList keyword={keyword} />
    </styles.SearchContainer>
  );
};
