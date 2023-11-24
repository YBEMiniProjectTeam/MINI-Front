import axios from "axios";

const getAccomodationInfo = async () => {
  const GET_ACCOMODAION_INFO_URL = "https://anti-bias.kr/api/accommodations/1";

  const response = await axios.get(GET_ACCOMODAION_INFO_URL);

  return response.data.data;
};

export default getAccomodationInfo;
