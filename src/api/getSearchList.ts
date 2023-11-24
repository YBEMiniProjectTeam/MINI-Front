import axios from "axios";

export const getSearchList = async () =>{
    const GET_SEARCH_LIST_URL = "https://cca6d5da-811b-445f-8811-62cab12d0157.mock.pstmn.io/accommodations?region=1&district=1&date=2023-11-20";

    const response = await axios.get(GET_SEARCH_LIST_URL);

    return response.data.data.accomodations;
}