import axios from "axios";
import { API_BASE_URL } from "../config";
import { GetReservationsProps } from "@pages/reservations/Reservations.types";

const getReservations = async ({ headers }: GetReservationsProps) => {
  const getReservationsUrl = `${API_BASE_URL}/payments`;
  const response = await axios.get(getReservationsUrl, { headers });

  return response.data.data;
};

export default getReservations;
