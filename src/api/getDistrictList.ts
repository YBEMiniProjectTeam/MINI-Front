import axiosInstance from "@api/axiosInstance";

export const getDistrictList = async (regionId: number) => {
  const getDistrictListURL = `/locations/regions/${regionId}/districts`;

  const response = await axiosInstance.get(getDistrictListURL);

  return response.data.data.districts;
};
