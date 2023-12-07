import axios from "axios";
import { API_BASE_URL } from "../config";
import { GetPaymentDetailsProps } from "@components/Reservations/ReservationList.types";

const getPaymentDetails = async (
  id: number,
  { headers }: GetPaymentDetailsProps
) => {
  const getPaymentDetailsUrl = `${API_BASE_URL}/payments/${id}`;
  const response = await axios.get(getPaymentDetailsUrl, { headers });

  return response.data.data;
};

export default getPaymentDetails;
