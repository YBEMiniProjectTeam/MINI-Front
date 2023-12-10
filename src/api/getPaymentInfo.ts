import axiosInstance from "@api/axiosInstance";

export const getPaymentInfo = async (cart_ids: number[]) => {
  const response = await axiosInstance.post("/carts/orders/reservations", {
    cart_ids
  });
  return response.data.data;
};
