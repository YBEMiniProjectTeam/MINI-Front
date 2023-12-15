import axiosInstance from "./axiosInstance";

export const getMemberInfo = async () => {
  const response = await axiosInstance.get("/member-info");
  return response.data;
};

export interface InfoType {
  email: string;
  name: string;
  birthday: string;
}
