import axios from "axios";
import { API_BASE_URL } from "../config";
import { GetReservationsProps } from "@pages/reservations/Reservations.types";

const getReservations = async ({ headers }: GetReservationsProps) => {
  const GET_RESERVATIONS_URL = `${API_BASE_URL}/payments`;
  const response = await axios.get(GET_RESERVATIONS_URL, { headers });

  return response.data.data;
};

export default getReservations;
