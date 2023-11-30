import { useNavigate } from "react-router-dom";
import { getToday, getTomorrow } from "@utils/getTodayTomorrow";
import { convertDateFormat4 } from "@utils/convertDateFormat4";

export const useNavigateToDetailPage = () => {
  const navigate = useNavigate();

  // defualt date
  const today = convertDateFormat4(getToday());
  const tomorrow = convertDateFormat4(getTomorrow());

  const navigateToDetailPage = (id: number) => {
    navigate(`/products?id=${id}&startDate=${today}&endDate=${tomorrow}`);
  };

  return {
    navigateToDetailPage
  };
};
