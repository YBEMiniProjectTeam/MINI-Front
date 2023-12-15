export interface DataType {
  accommodation_name: string;
  check_in: string;
  check_out: string;
  guest_email: null;
  guest_name: null;
  payment_status: string;
  price: number;
  reservation_no: string;
  reservation_user_email: string;
  reservation_user_name: string;
  room_name: string;
}

export interface ResponseType {
  statusCode: number;
  message: string;
}

export interface DeleteReservationProps {
  id: number;
}
