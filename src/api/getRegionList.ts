import axios from "axios";
import { API_BASE_URL } from "./config";

export const getRegionList = async () => {
  const GET_REGION_LIST_URL = `${API_BASE_URL}/locations/regions`;

  const response = await axios.get(GET_REGION_LIST_URL);

  return response.data.data.regions;
};
