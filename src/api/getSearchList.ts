import axios from "axios";
import { API_BASE_URL } from "./config";

export const getSearchList = async (
    accomodationName: string | null,
    selectedDistrict: string | null,
    startDate: string | null,
    endDate: string | null,
    category: string | null
) => {
    const GET_SEARCH_LIST_URL = `${API_BASE_URL}/accommodations?accomodationName=${accomodationName}&selectedDistrict=${selectedDistrict}&startDate=${startDate}&endDate=${endDate}&category=${category}`;

    const response = await axios.get(GET_SEARCH_LIST_URL);

    return response.data.data.accomodations;
}