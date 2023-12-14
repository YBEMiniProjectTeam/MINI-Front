import axiosInstance from "@api/axiosInstance";
import { GetPaymentDetailsProps } from "@components/Reservations/ReservationList.types";

const getPaymentDetails = async (
  id: number,
  { headers }: GetPaymentDetailsProps
) => {
  const response = await axiosInstance.get(`/payments/${id}`, { headers });
  return response.data.data;
};

export default getPaymentDetails;
