import axios from "axios";

export const getAccomodationInfo = async () => {
  const GET_ACCOMODAION_INFO_URL =
    "https://cca6d5da-811b-445f-8811-62cab12d0157.mock.pstmn.io/accommodations/1";

  const response = await axios.get(GET_ACCOMODAION_INFO_URL);

  return response.data.data;
};
