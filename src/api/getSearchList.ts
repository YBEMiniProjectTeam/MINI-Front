import axios from "axios";

export const getSearchList = async (  
    accomodationName: string,
    selectedDistrict: string,
    startDate: string | undefined,
    endDate: string | undefined,
    category: string
) =>{
    const GET_SEARCH_LIST_URL = `https://anti-bias.kr/api/accommodations?accomodationName=${accomodationName}&selectedDistrict=${selectedDistrict}&startDate=${startDate}&endDate=${endDate}&category=${category}`;

    const response = await axios.get(GET_SEARCH_LIST_URL);

    return response.data.data.accomodations;
}