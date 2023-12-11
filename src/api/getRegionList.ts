import axiosInstance from "@api/axiosInstance";

export const getRegionList = async () => {
  const getRegionListURL = `/locations/regions`;

  const response = await axiosInstance.get(getRegionListURL);

  return response.data.data.regions;
};
