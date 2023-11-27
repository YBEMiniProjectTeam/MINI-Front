import axios from "axios";

const getAccomodationInfo = async (id: number) => {
  const GET_ACCOMODAION_INFO_URL = `https://anti-bias.kr/api/accommodations/${id}`;
  const response = await axios.get(GET_ACCOMODAION_INFO_URL);

  return response.data.data;
};

export default getAccomodationInfo;
