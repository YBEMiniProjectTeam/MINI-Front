import { useNavigate } from "react-router-dom";

export const useNavigateToResultPage = () => {
  const navigate = useNavigate();

  const navigateToResultPage = (category: string) => {
    navigate('/searchResult', {
      state: {
        category: category
      }
    });
  };

  return {
    navigateToResultPage
  };
};