import axios from "axios";
import { API_BASE_URL } from "./config";

export const getDistrictList = async (regionId: number) => {
  const GET_DISTRICT_LIST_URL = `${API_BASE_URL}/locations/regions/${regionId}/districts`;

  const response = await axios.get(GET_DISTRICT_LIST_URL);

  return response.data.data.districts;
};
