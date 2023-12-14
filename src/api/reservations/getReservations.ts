import axiosInstance from "@api/axiosInstance";
import { GetReservationsProps } from "@pages/reservations/Reservations.types";

const getReservations = async ({ headers }: GetReservationsProps) => {
  const response = await axiosInstance.get(`/payments`, { headers });
  return response.data.data;
};

export default getReservations;
