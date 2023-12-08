import axios from "axios";

const getAccomodationInfo = async (id: number) => {
  const getAccommodationInfoUrl = `https://api.anti-bias.kr/api/accommodations/${id}`;
  const response = await axios.get(getAccommodationInfoUrl);

  return response.data.data;
};

export default getAccomodationInfo;
