import { useNavigate } from "react-router-dom";

export const useNavigateToResultPage = () => {
  const navigate = useNavigate();

  const navigateToResultPage = (category: string, region: string) => {
    let url = '/searchResult?';

    if (category)
      url += `category=${category}`;
    if (region)
      url += `&district=${region}`;

    navigate(url);
  };

  return {
    navigateToResultPage
  };
};