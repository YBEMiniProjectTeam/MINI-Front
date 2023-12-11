import { useNavigate } from "react-router-dom";
import { getToday, getTomorrow } from "@utils/getTodayTomorrow";
import { format, parseISO } from "date-fns";

export const useNavigateToDetailPage = () => {
  const navigate = useNavigate();

  // defualt date
  const today = format(parseISO(getToday()), "MM/dd/yyyy");
  const tomorrow = format(parseISO(getTomorrow()), "MM/dd/yyyy");

  const navigateToDetailPage = (id: number) => {
    navigate(`/products?id=${id}&startDate=${today}&endDate=${tomorrow}`);
  };

  return {
    navigateToDetailPage
  };
};
