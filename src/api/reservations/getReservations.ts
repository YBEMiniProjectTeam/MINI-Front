import axiosInstance from "@api/axiosInstance";

const getReservations = async () => {
  const response = await axiosInstance.get(`/payments`);
  return response.data.data;
};

export default getReservations;
