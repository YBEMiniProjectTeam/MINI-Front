import * as styles from "./SearchResult.styles";
import Search from "@components/Search/Search";
import SearchList from "@components/SearchList/SearchList";
import { useSearchParams } from "react-router-dom";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams?.get("keyword");
  const district = searchParams?.get("district");
  const start_date = searchParams?.get("start_date");
  const end_date = searchParams?.get("end_date");
  const category = searchParams?.get("category");

  return (
    <styles.SearchContainer>
      <Search
        keyword={keyword}
        district={district}
        start_date={start_date}
        end_date={end_date}
        category={category}
      />
      <SearchList
        keyword={keyword}
        district={district}
        start_date={start_date}
        end_date={end_date}
        category={category}
      />
    </styles.SearchContainer>
  );
};

export default SearchResult;
