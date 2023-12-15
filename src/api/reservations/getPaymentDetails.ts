import axiosInstance from "@api/axiosInstance";

const getPaymentDetails = async (id: number) => {
  const response = await axiosInstance.get(`/payments/${id}`);
  return response.data.data;
};

export default getPaymentDetails;
