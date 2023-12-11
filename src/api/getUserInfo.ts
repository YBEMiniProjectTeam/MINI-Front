import axiosInstance from "@api/axiosInstance";

export const getUserInfo = async () => {
  const response = await axiosInstance.get("/member-info");
  return response.data.data;
};
