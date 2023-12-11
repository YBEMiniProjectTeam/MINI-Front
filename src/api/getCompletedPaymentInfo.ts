import axiosInstance from "@api/axiosInstance";

export const getCompletedPaymentInfo = async (count: number) => {
  const response = await axiosInstance.get(
    `/carts/orders/payments?count=${count}`
  );
  return response.data.data;
};
