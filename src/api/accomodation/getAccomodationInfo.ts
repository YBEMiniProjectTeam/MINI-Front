import axiosInstance from "@api/axiosInstance";

const getAccomodationInfo = async (id: number) => {
  const response = await axiosInstance.get(`/accommodations/${id}`);
  return response.data.data;
};

export default getAccomodationInfo;
