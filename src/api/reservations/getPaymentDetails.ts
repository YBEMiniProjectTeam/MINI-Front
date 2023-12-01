import axios from "axios";
import { API_BASE_URL } from "../config";
import { GetPaymentDetailsProps } from "@components/Reservations/ReservationList.types";

const getPaymentDetails = async (
  id: number,
  { headers }: GetPaymentDetailsProps
) => {
  const GET_PAYMENT_DETAILS_URL = `${API_BASE_URL}/payments/${id}`;
  const response = await axios.get(GET_PAYMENT_DETAILS_URL, { headers });
  // const data = response.data.data;

  // const info = {
  //   name: data.accommodation_name,
  //   checkIn: data.check_in
  // };
  console.log(response.data.data);
  return response.data.data;
};

export default getPaymentDetails;
