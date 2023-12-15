import axiosInstance from "@api/axiosInstance";
import { ResponseType } from "@pages/reservationDetails/reservationDetails.types";

const deleteReservation = async (paymentId: number): Promise<ResponseType> => {
  return await axiosInstance.delete(`/payments/${paymentId}`);
};

export default deleteReservation;
