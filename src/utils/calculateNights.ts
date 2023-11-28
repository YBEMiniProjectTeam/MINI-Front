export const calculateNights = (checkIn: string, checkOut: string) => {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const difference = checkOutDate.getTime() - checkInDate.getTime();
  const nights = difference / (1000 * 3600 * 24);
  return nights;
};
